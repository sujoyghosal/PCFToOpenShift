/**
 * TODO(developer): Uncomment and replace these variables before running the sample.
 */
const projectId = "donation-350403";
const zone = "asia-south1-c";
const instanceName = "voicechat";
const hostname = "voicechat.sujoy.com";
const machineType = "e2-micro";
const sourceImage = "projects/debian-cloud/global/images/family/debian-10";
const networkName = "global/networks/default";

const compute = require("@google-cloud/compute");

// Create a new instance with the values provided above in the specified project and zone.
async function createInstanceWithCustomHostname() {
  const instancesClient = new compute.InstancesClient();

  console.log(
    `Creating the ${instanceName} instance in ${zone} with hostname ${hostname}...`
  );

  const [response] = await instancesClient.insert({
    instanceResource: {
      name: instanceName,
      // Custom hostnames are not resolved by the automatically created records
      // provided by Compute Engine internal DNS.
      // You must manually configure the DNS record for your custom hostname.
      hostname,
      disks: [
        {
          // Describe the size and source image of the boot disk to attach to the instance.
          initializeParams: {
            diskSizeGb: "10",
            sourceImage,
          },
          autoDelete: true,
          boot: true,
          type: "PERSISTENT",
        },
      ],
      machineType: `zones/${zone}/machineTypes/${machineType}`,
      networkInterfaces: [
        {
          // Use the network interface provided in the networkName argument.
          name: networkName,
        },
      ],
    },
    project: projectId,
    zone,
  });
  let operation = response.latestResponse;
  const operationsClient = new compute.ZoneOperationsClient();

  // Wait for the create operation to complete.
  while (operation.status !== "DONE") {
    [operation] = await operationsClient.wait({
      operation: operation.name,
      project: projectId,
      zone: operation.zone.split("/").pop(),
    });
  }

  console.log("Instance created.");
}

createInstanceWithCustomHostname();

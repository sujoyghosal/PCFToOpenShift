# PCFtoOpenShift

1. Run discovery scripts and send progress data real time to GUI
2. Each file scan result is stored as a record in DB in a NoSQL schema with info like file type,
   number of library/package dependencies, number env variables referenced, number of VCAP references
3. Script processes files to replace VCAP references with user defined variable names
4. Script generates OpenShift cli script to inject new env variable definitions on OpenShift
5. The scanned and 'purified' (sans PCF bindings) code is new ready to be fed to move2kube
6. move2kube run from command line for source folders and generates OpenShift Kubernets configs (Dockerfile)
7. The transformed source code from move2kube output folder is checked into a repository that triggers a pipeline to deploy to OpenShift kubernetes cluster.
8. Status can be mainained for each file in discovery stage to convey migration status of final successful deployment to OpenShift.

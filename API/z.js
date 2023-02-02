// Loads the configuration from config.env to process.env
const express = require("express");
const mongodb = require("mongodb");
const recordRoutes = express.Router();
const { exec } = require("child_process");
var http = require("http");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5555;
const PORT_GCP = process.env.PORT || 7777;
const app = express();
var loggedinUsers = [];
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*
const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};*/

app.use(function (err, _req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

let dbConnection;

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://admin:admin@cluster0.bk6hekg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  dbConnection = client.db("PCFToOpenshiftDB");
  // perform actions on the collection object
  console.log("Successfully connected to MongoDB - PCFToOpenshiftDB");
  //client.close();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/users", (req, res) => {
  dbConnection
    .collection("Users")
    .find({
      email: {
        $eq: req.query.email,
      },
    })
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching users!");
      } else {
        res.json(result);
      }
    });
});
app.get("/login", (req, res) => {
  dbConnection
    .collection("Users")
    .find({
      email: {
        $eq: req.query.email,
      },
    })
    .limit(1)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching user - " + err);
        console.log("Failed login for " + req.query.email + ": " + err);
      } else {
        //res.json(result);
        console.log("Login response: " + JSON.stringify(result));
        if (
          result &&
          result.length > 0 &&
          checkPassword(req.query.password, result[0].pw)
        ) {
          res.status(200).jsonp(result[0]);
          console.log("Success login for " + req.query.email);
          var newUser = result[0];
          var found = false;
          for (i = 0; i < loggedinUsers.length; i++) {
            if (loggedinUsers[i].email == newUser.email) {
              found = true;
              break;
            }
          }
          if (!found) {
            console.log(
              "New User has logged in, refreshing users list with " +
                newUser.name
            );
            loggedinUsers.push(newUser);
          }
          //broadcast event to all loggedin users
          io.emit("new-loggedin-user", {
            newUser: result[0],
          });
        } else {
          res.status(400).send([]);
          console.log("Failed login for " + req.query.email);
        }
      }
    });
});

async function getUserByEmail(email) {
  if (!email || email == null || email.length < 3) {
    console.log("GetUserByEmail: Not a valid email");
    return;
  }
  dbConnection
    .collection("User")
    .find({
      email: {
        $eq: email,
      },
    })
    .limit(1)
    .toArray(function (err, result) {
      if (err) {
        console.log("Error fetching user!" + err);
        return null;
      } else {
        //res.json(result);
        if (result && result.length > 0) {
          console.log("Email already exists " + result[0]);
          return true;
        } else return false;
      }
    });
}
var bcrypt = require("bcrypt");
const { response } = require("express");
const { stringify } = require("querystring");
var encryptedPw = "null";

function encryptPassword(password) {
  const saltRounds = 10;
  const myPlaintextPassword = password;
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(myPlaintextPassword, salt);
  encryptedPw = hash;
  console.log("Encrypted password=" + hash);
  return hash;
}

function checkPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
  //return true;
}

// This section will help you create a new record.
app.post("/users/insert", (req, res) => {
  var email = req.body.email;
  if (!email || email == null || email.length < 3) {
    console.log("Not a valid email");
    return;
  }
  console.log(JSON.stringify(req.body));
  dbConnection
    .collection("Users")
    .find({
      email: {
        $eq: email,
      },
    })
    .limit(1)
    .toArray(function (err, result) {
      if (err) {
        console.log("Error fetching user!" + err);
        return null;
      } else {
        //res.json(result);
        if (result && result.length > 0) {
          console.log("Email already exists " + JSON.stringify(result[0]));
          res.status(400).send("Email Exists");
          return;
        } else {
          encryptedPw = encryptPassword(req.body.password);
          const userDocument = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            //address: req.body.address,
            pw: encryptedPw,
            ngo: req.body.ngo ? req.body.ngo : false,
            create_time: new Date(),
          };

          dbConnection
            .collection("Users")
            .insertOne(userDocument, function (err, result) {
              if (err) {
                console.error(JSON.stringify(err));
                res.status(400).send("Error inserting user data!");
              } else {
                console.log(`Added a new user with id ${result.insertedId}`);
                res.status(201).send("Success");
              }
            });
        }
      }
    });
});

// This section will help you update a record by id.
app.put("/users/update"),
  (req, res) => {
    const userUpdateQuery = {
      _id: new mongodb.ObjectID(req.body.userID),
    };
    encryptedPw = encryptPassword(req.body.password);
    const updates = {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone_number,
        address: req.body.address,
        pw: encryptedPw,
        ngo: req.body.ngo ? req.body.ngo : false,
        create_time: new Date(),
      },
    };

    dbConnection
      .collection("Users")
      .updateOne(userUpdateQuery, updates, function (err, _result) {
        if (err) {
          console.error(JSON.stringify(err));
          res
            .status(400)
            .send(`Error updating user id ${userUpdateQuery._id}!`);
        } else {
          console.log("1 document updated");
          res.status(200).send("Success");
        }
      });
  };
app.put("/subscribe_events", (req, res) => {
  console.log(
    "Received new subscribe events request " + JSON.stringify(req.body.events)
  );
  var lng;
  var lat;
  var max_dist;
  if (req.body.event_receive_location) {
    max_dist = req.body.event_receive_location.max_distance;
    lng = req.body.event_receive_location.lng;
    lat = req.body.event_receive_location.lat;
  } else {
    lng = null;
    lat = null;
    max_dist = null;
  }
  const subscribeEventsQuery = {
    _id: new mongodb.ObjectID(req.body.user_id),
  };
  const updates = {
    $set: {
      subscribed_events: req.body.events,
      event_receive_location: {
        type: "Point",
        coordinates: [lng, lat],
      },
      event_receive_max_distance: max_dist,
      last_modified_time: new Date().toLocaleString(),
    },
  };

  dbConnection
    .collection("Users")
    .updateOne(subscribeEventsQuery, updates, function (err, _result) {
      if (err) {
        console.error(JSON.stringify(err));
        res
          .status(400)
          .send(`Error updating user id ${subscribeEventsQuery._id}!`);
      } else {
        console.log("1 document updated");
        res.status(200).send("Success");
      }
    });
});
// This section will help you delete a record
app.delete("/users/delete", (req, res) => {
  console.log("Received delete request for cust id " + req.body.userID);
  const custQuery = {
    userID: req.body.userID,
  };

  dbConnection.collection("User").deleteOne(custQuery, function (err, _result) {
    if (err) {
      res.status(400).send(`Error deleting user with id ${custQuery.userID}!`);
    } else {
      console.log("1 document deleted");
      res.status(200).send();
    }
  });
});

//getEvents by email
app.get("/eventsbyemailandtype", (req, res) => {
  dbConnection
    .collection("Events")
    .find({
      email: {
        $eq: req.query.email,
      },
      event_type: req.query.type,
    })
    .limit(1000)
    .toArray(function (err, result) {
      if (err) {
        console.log(
          "eventsbyemailandtype - Failed to fetch events for " +
            req.query.email +
            ", error " +
            err
        );
        res.status(400).send("Error fetching Events!" + err);
      } else {
        //res.json(result);
        if (result && result.length > 0) {
          res.status(200).jsonp(result);
          console.log(
            "eventsbyemailandtype - Success fetching events for " +
              req.query.email
          );
        } else {
          res.status(200).send([]);
          console.log("No Events for " + req.query.email);
        }
      }
    });
});
//Create Event
app.post("/events/insert", (req, res) => {
  console.log("Received array " + JSON.stringify(req.body));
  const eventDocument = {
    email: req.body.email,
    time_created: Date().toString(),
    event_type: "top level scan",
    results: req.body.results,
  };
  createEvent(eventDocument, req, res);
});

//Create Event
//app.post("/events/insert", (req, res) => {
function createEvent(obj, req, res) {
  console.log("Event document = " + JSON.stringify(obj));
  var channel = obj.email;

  dbConnection.collection("Events").insertOne(obj, function (err, result) {
    if (err) {
      console.error(JSON.stringify(err));
      res.status(401).send(err);
    } else {
      console.log(`Added a new event with id ${result.insertedId}`);
      console.log("Sending event to subscribers of channel " + channel);
      io.sockets.in(channel).emit("new-scan", {
        event_id: result.insertedId,
        eventDetails: obj,
      });
      res.status(200).send("Success");
    }
  });
  //dbConnection.collection("Events").createIndex({ location: "2dsphere" });
  /*const eventsCollection = dbConnection.collection("Events");
  const result = eventsCollection.createIndex({ location: "2dsphere" });*/
  //console.log(`Index created: ${result}`);
}
//Get Events By Subscription
app.post("/fetchevents", (req, res) => {
  console.log("FetchEvents Call...");
  dbConnection
    .collection("Events")
    .find({
      event_name: {
        $in: req.body.subscribed_events,
      },
    })
    .limit(200)
    .toArray(function (err, result) {
      if (err) {
        console.log("Failed to fetch event  " + err);
        res.status(404).send("No events");
      } else {
        //res.json(result);
        console.log("Success Calling fetch events");
        if (result && result.length > 0) {
          res.status(200).jsonp(result);
        } else {
          res.status(404).send("No Events");
          console.log("No events");
        }
      }
    });
});
//Neaby Events for my subscribed geo location options
app.get("/topscan", (req, res) => {
  console.log("received top level scan request from " + req.query.email);
  var yourscript = exec(
    "sh /Users/sujoyghosal/apps/PCFToOpenShift/discover.sh" +
      " " +
      req.query.email,
    (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    }
  );
  /*runShellScript(
    "/Users/sujoyghosal/apps/PCFToOpenShift/discover.sh " + req.query.email
  );*/
});
function runShellScript(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}
//Event Update
app.put("/events/update", (req, res) => {
  const eventUpdateQuery = {
    _id: new mongodb.ObjectID(req.body.eventID),
  };
  console.log("Event update query body: " + JSON.stringify(req.body));
  const updates = {
    $set: {
      event_type: req.body.event_type,
      event_name: req.body.event_name,
      city: req.body.city,
      item_category: req.body.item_category,
      item_name: req.body.item_name,
      time_created: Date().toString(),
    },
  };

  dbConnection
    .collection("Events")
    .updateOne(eventUpdateQuery, updates, function (err, _result) {
      if (err) {
        console.error(JSON.stringify(err));
        res.status(400).send(`Error updating user id ${eventUpdateQuery._id}!`);
      } else {
        console.log("1 document updated");
        res.status(200).send("Success");
      }
    });
});
//Cancel Event
app.delete("/events/delete", (req, res) => {
  console.log("Received delete request for event id " + req.body.eventID);
  const query = {
    _id: new mongodb.ObjectID(req.body.eventID),
  };

  dbConnection.collection("Events").deleteOne(query, function (err, _result) {
    if (err) {
      res.status(400).send(`Error deleting event with id ${req.body.eventID}!`);
    } else {
      console.log("1 document deleted");
      res.status(200).send("Success");
    }
  });
});

//Create Subscription
app.post("/subscriptions/insert", (req, res) => {
  console.log("Subscription document = " + JSON.stringify(req.body));
  const subscriptionDocument = {
    user_id: req.body.user_id,
    email: req.body.email,
    subscribed_events: req.body.events,
    time_created: Date().toString(),
  };
  dbConnection
    .collection("Subscriptions")
    .insertOne(subscriptionDocument, function (err, result) {
      if (err) {
        console.error(JSON.stringify(err));
        res.status(400).send("Error inserting subscriptionDocument data!");
      } else {
        console.log(`Added a new subscription with id ${result.insertedId}`);
        res.status(201).send("Success");
      }
    });
});
//Subscriptions Update
app.put("/subscriptions/update", (req, res) => {
  const subscriptionsUpdateQuery = {
    _id: new mongodb.ObjectID(req.body.subscriptionID),
  };
  const updates = {
    $set: {
      user_id: req.body.user_id,
      email: req.body.email,
      subscribed_events: req.body.subscribed_events,
      time_created: Date().toString(),
    },
  };

  dbConnection
    .collection("Subscriptions")
    .updateOne(subscriptionsUpdateQuery, updates, function (err, _result) {
      if (err) {
        console.error(JSON.stringify(err));
        res
          .status(400)
          .send(`Error updating user id ${subscriptionsUpdateQuery._id}!`);
      } else {
        console.log("1 document updated");
        res.status(200).send("Success");
      }
    });
});
//Cancel Event
app.delete("/subscriptions/delete", (req, res) => {
  console.log(
    "Received delete request for subscription id " + req.body.subscriptionID
  );
  const query = {
    _id: new mongodb.ObjectID(req.body.subscriptionID),
  };

  dbConnection
    .collection("Subscriptions")
    .deleteOne(query, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(
            `Error deleting subscription with id ${req.body.subscriptionID}!`
          );
      } else {
        console.log("1 document deleted");
        res.status(200).send("Success");
      }
    });
});
//module.exports = recordRoutes;
// Listen for requests until the server is stopped

//app.use(cors());
var whitelist = [
  "https://donation-web-vq2uax3u4q-el.a.run.app",
  "http://localhost:3000",
  "http://159.122.177.104:31363",
  "http://34.131.27.98:3000",
];
app.use(
  cors({
    origin: whitelist,
  })
);

const httpServer = http.createServer(app).listen(PORT, function (req, res) {
  console.log("listening on *:" + PORT);
});
const io = require("socket.io")(httpServer, {
  cors: {
    //origin: "http://localhost:3000",
    origin: whitelist,
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
  allowEIO3: true,
});
var mysocket = null;
io.on("connection", function (socket) {
  mysocket = socket;
  console.log("a user connected");
  mysocket.emit("event", { lang: "en-US", text: "Today is a beautiful day" });
  socket.on("create-room", function (room) {
    if (room) {
      socket.join(room.channel);
      console.log("Joined client socket to room " + room.channel);
    }
  });
  socket.on("send-login", function (userInfo) {
    mysocket.emit("loggedin-users", {
      currentUsers: loggedinUsers,
    });
  });
  socket.on("leave", function (room) {
    console.log("#####Disconecting client socket from room " + room.channel);
    socket.leave(room.channel);
  });
});

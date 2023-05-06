const {lat,lon,minutes,school,dht} = require('./config.js');

const tempSensor = require("node-dht-sensor").promises;
tempSensor.setMaxRetries(10);

const Sensors = require('./sensor.js');

const {mongoose} = require("./db");
const con = mongoose.connection;

const interval = minutes * 60 * 1000;

con.on('open', () => {
  setInterval( poll , interval);
  console.log('polling started');
});

let poll = async () => {
  try{
    const res = await tempSensor.read(dht, 4);
    const temp = ((res.temperature * (9/5)) + 32).toFixed(2);
    const humidity = (res.humidity).toFixed(2);
    const latlon = `${lon},${lat}`;

    let sensorData = new Sensors({temp,humidity,latlon,school});
    await sensorData.save(res);
    console.log("Sent... ", sensorData);
  } catch(err) {console.log(err);}
};


process.on('SIGINT', function() {
  mongoose.disconnect();
  console.log('mongoose closing ...');
  process.exit(0);
});

// const mongoose = require('mongoose');
// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.connect(process.env.URI, {useNewUrlParser: true});
// }
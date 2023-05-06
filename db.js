const mongoose = require("mongoose");
const {user, pwd, db} = require('./config.js');
const url = `mongodb+srv://${user}:${pwd}@sensors.jztuvmz.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose
    .connect(url,{useNewUrlParser: true})
    .then(_ => console.log("mongo connected"))
    .catch(e => {console.log(e); process.exit();});

module.exports = mongoose;
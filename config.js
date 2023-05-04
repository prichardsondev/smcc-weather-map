require('dotenv').config();
module.exports = {
    user: process.env.MONGO_USER,
    pwd: process.env.MONGO_PASSWORD,
    school: process.env.MONGO_SCHOOL,
    lat: process.env.LAT,
    lon: process.env.LON,
    minutes: process.env.DATA_INTERVAL_MINUTES
}
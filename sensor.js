const mongoose = require('mongoose');
const {school} = require('./config.js');
const sensorSchema = new mongoose.Schema({

    temp:{
        type:Number,
        required:true
    },
    humidity:{
        type:Number,
        required:true
    },
    latlon:{
        type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    },

    date: { type: Date, default: Date.now }
    
},{collection: school});

module.exports = mongoose.model('Sensors', sensorSchema);
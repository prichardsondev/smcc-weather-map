const mongoose = require('mongoose');

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

    date: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('Sensors', sensorSchema);
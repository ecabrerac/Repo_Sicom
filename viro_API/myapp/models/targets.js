'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var targets = new Schema({
    id: Number,
    name: String,
    src: String,
    texto: String,
    visible:Boolean,
    width: Number
});


var Targets = mongoose.model('Targets', targets);

module.exports = Targets

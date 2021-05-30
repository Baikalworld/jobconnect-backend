const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobaddSchema = new Schema({
  addTitle: {
    type: String,
    required: [true, 'Please add a title'],
    maxlength: [250, 'The title can be max 250 chars long']
  },
  addDate: {
    type: Date,
  },
  addLocation: {
    type: String,
    required: [true, 'Please add a location']
  },
  addDesc: {
    type: String,
    required: [true, 'Please add a description']
  },
  addFull: {
    type: Array,
    required: [true, 'Please add a description']
  },
  
  addWrkt: {
    type: Schema.ObjectId,
    ref: 'Worktime',
    required: [true, 'Please add a worktime']
  },
  addComp: {
    type: Schema.ObjectId,
    ref: 'User',
    required: [true, 'Please add an id'],
    maxlength: [250, 'The id can be max 250 chars long']
  },
  addContr: {
    type: Schema.ObjectId,
    ref: 'Contract'
  }
  
});

User --> users
Movie --> movies
module.exports = mongoose.model('Jobadd', JobaddSchema);
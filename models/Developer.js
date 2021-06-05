const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeveloperSchema = new Schema({
  userid: {
    type: String,
    required: [true, 'Please add a userid'],
    maxlength: [50, 'The userid can be max 50 chars long']
  },

  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  surname: {
    type: String,
    required: [true, 'Please add a surname']
  },
  exp: {
    type: String,
    required: [true, 'Please add your tech experience']
  }
  
  
  // addComp: {
  //   type: Schema.ObjectId,
  //   ref: 'User',
  //   required: [true, 'Please add an id'],
  //   maxlength: [250, 'The id can be max 250 chars long']
  // },
  
});


module.exports = mongoose.model('Developer', DeveloperSchema);
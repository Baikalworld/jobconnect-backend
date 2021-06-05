const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
  userid: {
    type: String,
    required: [true, 'Please add a userid'],
    maxlength: [50, 'The title can be max 50 chars long']
  },

  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  desc: {
    type: String,
    required: [true, 'Please add a description']
  },
  contact: {
    type: [String],
    required: [true, 'Please add a contact']
  }
  
  
  // addComp: {
  //   type: Schema.ObjectId,
  //   ref: 'User',
  //   required: [true, 'Please add an id'],
  //   maxlength: [250, 'The id can be max 250 chars long']
  // },
  
});


module.exports = mongoose.model('Company', CompanySchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add the name of your company'],
    maxlength: [50, 'The name can be max 50 chars long']
  },
  adress: {
    type: String,
    required: [true, 'Please add the company adress, street, city id and city, country']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 8,
    select: false
  }
});
  


module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
//const Schema = mongoose.Schema;

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please add the name of your company'],
    maxlength: [50, 'The name can be max 50 chars long']
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
  },

  role: {
    type: [String],
    required: [true, 'Please choose your role (company, bootcamp, developer']
  },
});
  
// hash password
UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//add name below compare boilerplate
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET) 
}

// math user entered password ot hashed password in db
UserSchema.methods.matchPassword = async function(enteredPass) {
  return await bcrypt.compare(enteredPass, this.password)
}

module.exports = mongoose.model('User', UserSchema);
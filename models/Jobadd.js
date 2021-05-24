const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobaddSchema = new Schema({
  add_id: {
    type: String,
    required: [true, 'Please add an id'],
    maxlength: [250, 'The id can be max 250 chars long']
  },
  add_title: {
    type: String,
    required: [true, 'Please add a title'],
    maxlength: [250, 'The title can be max 250 chars long']
  },
  add_date: {
    type: Date,
  }
});

// User --> users
// Movie --> movies
module.exports = mongoose.model('Jobadd', JobaddSchema);
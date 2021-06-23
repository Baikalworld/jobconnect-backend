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
    type: [String],
    required: [true, 'Please add a description']
  },
  
  addWrkt: {
    type: String,
    required: [true, 'Please add a worktime']
  },
  addComp: {
    type: Schema.ObjectId,
    ref: 'Company',
    required: [true, 'Please add a company']
  },
  addContr: {
      type: String,
    required: [true, 'Please add contract type']
  }
/*addTech: {
    type: [Schema.ObjectId],
    ref: "Technology"
  }
  */
});

module.exports = mongoose.model('Jobadd', JobaddSchema);
const mongoose = require('mongoose');
const Jobadd = require('../models/Jobadd');


const getJobadds = async (req, res, next) => {
  //// ?addLocation=Cologne
  /// ?addWrtk=fulltime
  try {
    const queryStr = JSON.stringify(req.query).replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)
    console.log(queryStr)
    const jobadds = await Jobadd.find(JSON.parse(queryStr)).populate('addComp');

    res.json({
      success: true,
      msg: 'show all job offers',
      data: jobadds
    })  
  } catch(err) {
    next(err)
  }

}
/*const getJobadds = async (req, res, next) => {
  try {
    const jobadds = await Jobadd.find();

    res.json({
      success: true,
      msg: 'show all job offers',
      data: jobadds
    })  
  } catch(err) {
    next(err)
  }

}*/

const getJobadd = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const jobadd = await Jobadd.findById(id).populate('addComp');
    res.json({
      success: true,
      msg: 'show selected jobadd',
      data: jobadd
    })
  } catch(err) {
    next(err)
  }

}

const createJobadd = async (req, res, next) => {
  try {
      const { 
        addTitle,
        addDate,
        addLocation,
        addDesc,
        addFull,
        addContr,
        addWrkt,
        addComp
      } = req.body;

      const jobadd = await Jobadd.create({
        addTitle,
        addDate,
        addWrkt,
        addLocation,
        addDesc,
        addFull,
        addContr,
        addComp  
      })

      res.json({
        success: true,
        msg: 'new jobadd created',
        data: jobadd
      })
    } catch(err) {
      next(err)
    }
  
}

const updateJobadd = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { addId, addTitle, addDate } = req.body;

    const jobadd = await Jobadd.findByIdAndUpdate(id, { addId, addTitle, addDate }, { new: true })

    res.json({
      success: true,
      msg: `jobadd with id ${id} updated`,
      data: jobadds
    })
  } catch(err) {
    next(err)
  }
}
const deleteJobadd = async (req, res, next) => {
  try {
    const { id } = req.params;

    const jobadd = await Jobadd.findByIdAndDelete(id);
    res.json({
      success: true,
      msg: `jobadd with id ${id} deleted`,
      data: jobadds
    });
  } catch(err) {
    next(err)
  }
}

module.exports = {
  getJobadd,
  getJobadds,
  createJobadd,
  updateJobadd,
  deleteJobadd
}
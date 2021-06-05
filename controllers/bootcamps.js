const Bootcamp = require('../models/Bootcamp');
const mongoose = require('mongoose');



const getBootcamps = async (req, res, next) => {
    try {
      const bootcamps = await Bootcamp.find();
      res.json({ success: true, msg: 'show all bootcamps', data: bootcamps })
    } catch(err) {
      next(err)
    }
  }

const getBootcamp = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const bootcamp = await Bootcamp.findById(id);
    res.json({
      success: true,
      msg: 'show selected bootcamp',
      data: bootcamp
    })
  } catch(err) {
    next(err)
  }

}

const createBootcamp = async (req, res, next) => {
  try {
      const { 
        userid,
        name,
        desc,
        contact
      } = req.body;

      const bootcamp = await Bootcamp.create({
        userid,
        name,
        desc,
        contact    
      })

      res.json({
        success: true,
        msg: 'new bootcamp',
        data: bootcamp
      })
    } catch(err) {
      next(err)
    }
  
}

const updateBootcamp = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userid, name, desc, contact } = req.body;

    const bootcamp = await Bootcamp.findByIdAndUpdate(id, { userid, name, desc, contact }, { new: true })

    res.json({
      success: true,
      msg: `bootcamp with id ${id} updated`,
      data: bootcamps
    })
  } catch(err) {
    next(err)
  }
}
const deleteBootcamp = async (req, res, next) => {
  try {
    const { id } = req.params;

    const bootcamp = await Bootcamp.findByIdAndDelete(id);
    res.json({
      success: true,
      msg: `bootcamp with id ${id} deleted`,
      data: bootcamps
    });
  } catch(err) {
    next(err)
  }
}

module.exports = {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
}
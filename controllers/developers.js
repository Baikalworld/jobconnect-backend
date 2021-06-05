const Developer = require('../models/Developer');
const mongoose = require('mongoose');



const getDevelopers = async (req, res, next) => {
    try {
      const developers = await Developer.find();
      res.json({ success: true, msg: 'show all developers', data: developers })
    } catch(err) {
      next(err)
    }
  }

const getDeveloper = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const developer = await Developer.findById(id);
    res.json({
      success: true,
      msg: 'show selected developer',
      data: developer
    })
  } catch(err) {
    next(err)
  }

}

const createDeveloper = async (req, res, next) => {
  try {
      const { 
        userid,
        name,
        surname,
        exp
      } = req.body;

      const developer = await Developer.create({
        userid,
        name,
        surname,
        exp    
      })

      res.json({
        success: true,
        msg: 'new developer',
        data: developer
      })
    } catch(err) {
      next(err)
    }
  
}

const updateDeveloper = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userid, name, surname, exp } = req.body;

    const developer = await Developer.findByIdAndUpdate(id, { userid, name, surname, exp }, { new: true })

    res.json({
      success: true,
      msg: `developer with id ${id} updated`,
      data: developers
    })
  } catch(err) {
    next(err)
  }
}
const deleteDeveloper = async (req, res, next) => {
  try {
    const { id } = req.params;

    const developer = await Developer.findByIdAndDelete(id);
    res.json({
      success: true,
      msg: `developer with id ${id} deleted`,
      data: developers
    });
  } catch(err) {
    next(err)
  }
}

module.exports = {
  getDeveloper,
  getDevelopers,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper
}
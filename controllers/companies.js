const Company = require('../models/Company');
const mongoose = require('mongoose');



const getCompanies = async (req, res, next) => {
    try {
      const companies = await Company.find();
      res.json({ success: true, msg: 'show all companies', data: companies })
    } catch(err) {
      next(err)
    }
  }

const getCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const company = await Company.findById(id);
    res.json({
      success: true,
      msg: 'show selected company',
      data: company
    })
  } catch(err) {
    next(err)
  }

}

const createCompany = async (req, res, next) => {
  try {
      const { 
        userid,
        name,
        desc,
        contact
      } = req.body;

      const company = await Company.create({
        userid,
        name,
        desc,
        contact    
      })

      res.json({
        success: true,
        msg: 'new company',
        data: company
      })
    } catch(err) {
      next(err)
    }
  
}

const updateCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userid, name, desc, contact } = req.body;

    const company = await Company.findByIdAndUpdate(id, { userid, name, desc, contact }, { new: true })

    res.json({
      success: true,
      msg: `company with id ${id} updated`,
      data: companies
    })
  } catch(err) {
    next(err)
  }
}
const deleteCompany = async (req, res, next) => {
  try {
    const { id } = req.params;

    const company = await Company.findByIdAndDelete(id);
    res.json({
      success: true,
      msg: `company with id ${id} deleted`,
      data: companies
    });
  } catch(err) {
    next(err)
  }
}

module.exports = {
  getCompany,
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany
}
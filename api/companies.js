const express = require("express");

const {
  getCompany,
  getCompanies,
  createCompany,
  deleteCompany,
  updateCompany
} = require('../controllers/companies.js')

const api = express.Router();

api
  .route("/")
  .get(getCompanies)
  .post(createCompany)

api
  .route('/:id')
  .get(getCompany)
  .delete(deleteCompany)
  .put(updateCompany);

module.exports = api;
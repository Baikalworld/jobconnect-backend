const express = require("express");

const {
  getDeveloper,
  getDevelopers,
  createDeveloper,
  deleteDeveloper,
  updateDeveloper
} = require('../controllers/developers.js')

const api = express.Router();

api
  .route("/")
  .get(getDevelopers)
  .post(createDeveloper)

api
  .route('/:id')
  .get(getDeveloper)
  .delete(deleteDeveloper)
  .put(updateDeveloper);

module.exports = api;
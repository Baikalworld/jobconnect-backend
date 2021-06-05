const express = require("express");

const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  deleteBootcamp,
  updateBootcamp
} = require('../controllers/bootcamps.js')

const api = express.Router();

api
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp)

api
  .route('/:id')
  .get(getBootcamp)
  .delete(deleteBootcamp)
  .put(updateBootcamp);

module.exports = api;
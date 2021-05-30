const express = require("express");

// const {
//   getJobadd,
//   getJobadds,
//   createJobadd,
//   deleteJobadd,
//   updateJobadd
// } = require('../controllers/jobadds.js')

const api = express.Router();

api
  .route("/")
  .get(getJobadds)
  .post(createJobadd)

api
  .route('/:id')
  .get(getJobadd)
  .delete(deleteJobadd)
  .put(updateJobadd);

module.exports = api;
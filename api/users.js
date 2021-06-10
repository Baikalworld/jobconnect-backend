const express = require("express");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserCompanies,
  //createUserCompanies,
} = require('../controllers/users');
const protect = require('../middlewares/auth');

const api = express.Router();

api
  .route("/")
  .get(getUsers)
  
api
.route('/:id')
.get(getUser)
.put(protect, updateUser)
.delete(protect, deleteUser)

// locahost:5000/users/:id/companies
api
  .route('/:id/companies')
  .get(protect, getUserCompanies)
  //.post(protect, createUserCompanies)


module.exports = api;
const express = require("express");

const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser
} = require('../controllers/users.js')

const api = express.Router();

api
  .route("/")
  .get(getUsers)
  .post(createUser)

api
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = api;
const express = require("express");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  //getUserOrders
} = require('../controllers/users');
//const protect = require('../middleware/auth');

const api = express.Router();

api
  .route("/")
  .get(getUsers)
  
api
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

// locahost:5000/users/:id/orders
/*api
  .route('/:id/orders')
  .get(protect, getUserOrders)*/

module.exports = api;
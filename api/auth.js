const express = require("express");
const register = require('../controllers/users').createUser; 
const { getMe, login } = require('../controllers/users');
const protect = require('../middlewares/auth');
const api = express.Router();

api.post('/register', register);
api.post('/login', login);
api.get('/me', protect, getMe);

module.exports = api;
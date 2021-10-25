const express = require('express');
const DbService = require('../controllers/auth');
const router = express.Router();
var authController = DbService.getDbService();

//Mengambil, mengeksekusi, dan memberikan data (router.post)

//-----------------------------------------------------------


// Tampilan (router.get)

//-----------------------------------------------------------
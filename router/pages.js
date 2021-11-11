const express = require('express');
const DbService = require('../controllers/auth');
const router = express.Router();
var authController = DbService.getDbService();

//Mengambil, mengeksekusi, dan memberikan data (router.post)
// router.post();
//-----------------------------------------------------------


// Tampilan (router.get)
router.get("/", (req, res, next) => {
    res.render("index");
});
//-----------------------------------------------------------

module.exports = router; //mengeksport modul router agar bisa digunakan secara global
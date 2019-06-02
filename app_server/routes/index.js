var express = require('express');
var router = express.Router();
var ctrlDisks = require('../controllers/disks'); 

/* GET home page. */
router.get('/', ctrlDisks.diskList); 

module.exports = router;

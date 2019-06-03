var express = require('express');
var router = express.Router();
var ctrlDisks = require('../controllers/disks'); 

/* GET home page. */
router.get('/', ctrlDisks.diskList);
router.get('/list', ctrlDisks.diskList); 

module.exports = router;

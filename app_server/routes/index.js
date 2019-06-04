var express = require('express');
var router = express.Router();
var ctrlDisks = require('../controllers/disks'); 

/* GET home page. */
router.get('/', ctrlDisks.homelist);
router.get('/disk/:diskId', ctrlDisks.disk);
router.get('/list', ctrlDisks.diskList); 

module.exports = router;

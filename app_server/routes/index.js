var express = require('express');
var router = express.Router();
var ctrlDisks = require('../controllers/disks'); 

/* GET home page. */
router.get('/', ctrlDisks.homelist);
router.get('/disk/:diskId', ctrlDisks.disk);
router.get('/list', ctrlDisks.diskList);
router.get('/new', ctrlDisks.addDisk);
router.post('/disk', ctrlDisks.doAddDisk);

module.exports = router;

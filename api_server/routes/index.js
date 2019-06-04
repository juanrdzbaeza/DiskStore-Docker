var express = require('express');
var router = express.Router();
var ctrlDisk = require('../controllers/disk'); 

/**
 * metodos get
 */
//router.get('/', ctrlDisk.diskFindOne);
router.get('/', ctrlDisk.diskFindAll);
router.get('/disk/:id', ctrlDisk.diskFindById);

/**
 * metodos post
 */
router.post('/disk', ctrlDisk.diskCreate);

/**
 * delete
 */
router.delete('/disk/:id', ctrlDisk.diskDelete);

/**
 * actualizar
 */
router.put('/disk/:id', ctrlDisk.diskUpdate);

module.exports = router;

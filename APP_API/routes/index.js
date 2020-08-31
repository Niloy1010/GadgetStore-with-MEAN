var express = require('express');
var router = express.Router();

var ctrlSpecifications = require('../controllers/specifications');
var ctrlDisplay = require('../controllers/display');
var ctrlMemory = require('../controllers/platform');
var ctrlUsers = require('../controllers/users');
var ctrlHeadphones = require('../controllers/headphones');
var ctrlSmartwatch = require('../controllers/smartwatch');


//Specifications
router.get('/specifications', ctrlSpecifications.specifications);
router.post('/specifications', ctrlSpecifications.specificationsCreate);
router.get('/specifications/:specid', ctrlSpecifications.specificationsReadOne);
router.put('/specifications/:specid', ctrlSpecifications.specificationsUpdateOne);
router.delete('/specifications/:specid', ctrlSpecifications.specificationsDeleteOne);



//User Information

router.get('/users', ctrlUsers.users);
router.get('/checkout',ctrlUsers.verifyToken, ctrlUsers.checkout);
router.post('/register', ctrlUsers.usersCreate);
router.post('/login', ctrlUsers.usersReadOne);


//Headphones
router.get('/headphones', ctrlHeadphones.headphones);
router.post('/headphones', ctrlHeadphones.headphonesCreate);
router.get('/headphones/:specid', ctrlHeadphones.headphonesReadOne);
router.put('/headphones/:specid', ctrlHeadphones.headphonesUpdateOne);
router.delete('/headphones/:specid', ctrlHeadphones.headphonesDeleteOne);

//Smartwatch
router.get('/smartwatches', ctrlSmartwatch.smartwatch);
router.post('/smartwatches', ctrlSmartwatch.smartwatchsCreate);
router.get('/smartwatches/:smartwatchid', ctrlSmartwatch.smartwatchsReadOne);
router.put('/smartwatches/:smartwatchid', ctrlSmartwatch.smartwatchsUpdateOne);
router.delete('/smartwatches/:smartwatchid', ctrlSmartwatch.smartwatchesDeleteOne);


module.exports = router;
var express = require('express');
var router = express.Router();
var homePageController = require('../controller/main');
var aboutPageController = require('../controller/about');
var listDisplayController = require('../controller/list-display');
var displayController = require('../controller/display');
var createController = require('../controller/create');
const { route } = require('./users');


/* GET home page. */
router.get('/', homePageController.index);
router.get('/about',aboutPageController.about);
router.get('/list',listDisplayController.listDisplay);
router.get('/display/:specid',displayController.display);
router.route('/create').get(createController.create).post(createController.doAddItem);
module.exports = router;

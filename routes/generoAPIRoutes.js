const express = require('express');
const router = express.Router();
const generoAPIController = require('../controllers/generoAPIController');
router.get('/', generoAPIController.list);

module.exports = router;

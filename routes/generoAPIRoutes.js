const express = require('express');
const router = express.Router();
const generoAPIController = require('../controllers/api/generoAPIController');
router.get('/', generoAPIController.list);

module.exports = router;

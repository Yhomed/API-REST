const express = require('express');
const router = express.Router();
const cancionAPIController = require('../controllers/cancionAPIController');

router.get('/', cancionAPIController.list);

router.post('/', cancionAPIController.create);

router.get('/:id', cancionAPIController.show);

router.put('/:id', cancionAPIController.update);

router.delete('/:id', cancionAPIController.destroy);

module.exports = router;
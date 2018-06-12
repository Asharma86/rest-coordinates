'use strict';

/**
 * Using entity based naming convention for endpoints.
 * GET     /coordinates                 ->  fetchAll
 * POST    /coordinates                 ->  create
 * GET     /coordinates/:id             ->  fetchById
 * PUT     /coordinates/:id             ->  update
 * DELETE  /coordinates/:id             ->  delete
 */

var express = require('express');
var router = express.Router();

var controller = require('./coordinates.controller');

router.get('/', controller.fetchAll);
router.post('/', controller.create);

// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
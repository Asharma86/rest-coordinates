'use strict';
var coordinateService = require("./coordinates.service");

// Get list of coordinates
exports.fetchAll = function (req, res) {

    var coordinates = coordinateService.getCoordinates();

    return res.status(200).json(coordinates);
};

// Save coordinates
exports.create = function (req, res) {

    coordinateService.saveCoordinates(req.body);

    return res.status(201);
};

function handleError(res, err) {
    return res.send(500, err);
}
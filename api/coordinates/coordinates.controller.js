'use strict';
var coordinateService = require("./coordinates.service");

// Save coordinates
exports.create = function (req, res) {

    coordinateService.saveCoordinates(req.body);

    return res.status(201);
};

// Get list of coordinates
exports.fetchAll = function (req, res) {

    var coordinates = coordinateService.getCoordinates();

    return res.status(200).json(coordinates);
};


exports.getById = function (req, res) {

    var coordinate = coordinateService.getCoordinatesById(req.params.id);

    return res.status(200).json(coordinate);
};
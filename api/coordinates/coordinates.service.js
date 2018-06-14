'use strict';

var _ = require("lodash");

var store = {
    list: []
};

/**
 * Saves all the coordinates to the local JSON file
 *
 * @param {Array} coordinates
 */
exports.saveCoordinates = function (coordinates) {

    store.list = coordinates;
};

/**
 * Reads all the coordinates for the file
 *
 * @returns {Array}
 */
exports.getCoordinates = function () {

    return store.list;
};

/**
 * find a coordinate by it's ID
 *
 * @param {string} id
 */
exports.getCoordinatesById = function (id) {

    return _.find(store.list, function(coordinate) {return coordinate.id === parseInt(id)});

};




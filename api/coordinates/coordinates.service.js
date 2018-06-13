'use strict';

var fs = require('fs');
var filename = "coordinates.json";

/**
 * Reads all the coordinates for the file
 *
 * @returns {Array}
 */
exports.getCoordinates = function () {

    var obj = {
        list: []
    };

    fs.exists(filename, function (exists) {
        if (exists) {
            fs.readFile(filename, function readFileCallback(err, data) {
                obj = JSON.parse(data);
                return obj.list;
            });
        }

        return [];

    });


    return obj.list;

};

/**
 * Saves all the coordinates to the local JSON file
 *
 * @param {Array} coordinates
 */
exports.saveCoordinates = function (coordinates) {

    var obj = {
        list: coordinates
    };

    fs.exists(filename, function (exists) {
        if (exists) {
            fs.readFile(filename, 'utf8', function readFileCallback(err, data) {
                obj = JSON.parse(data);
                obj.list.push(coordinates);

                var json = JSON.stringify(obj);
                fs.writeFile(filename, json);
            });

        } else {
            obj.list.push(coordinates);

            fs.writeFile(filename, obj.stringify, {spaces: 2}, function (err) {
                console.log(err);
            });


        }

    });

};



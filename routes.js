/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

    // Insert routes below
    app.use('/coordinates', require('./api/coordinates'));
    app.use('/', require('./api'));


};
const sampleResponses = require('../apis/responses/sampleResponses.js');

/**
 * Routes are defined here.
 *
 * @type {{api: module.exports.api}}
 */
module.exports = {api: function (app) {
    /* a basic get api to get the app name */
    app.get('/', (_, response) => response.send(sampleResponses.appName));

    /* a sample post request */
    app.post('/', (request, response) => {
        response.send(sampleResponses.create(request.body));
    });
}};

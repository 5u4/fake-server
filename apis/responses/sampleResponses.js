/**
 * Export sample responses.
 *
 * @type {{appName: {app: string}}}
 */
module.exports = {
    appName: {
        app: 'fake-api-server'
    },
    create: (request) => {
        return {
            name: request.name,
            text: request.text
        }
    }
};

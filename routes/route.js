const api = (app) => {
    /* a basic get api */
    app.get('/', (_, res) => res.send({
        app: 'fake-api-server'
    }));
};

module.exports = {
    api
};

const UserController = require('./controllers/users.controller')
exports.routesConfig = (app) => {
    app.post('/users',[
        UserController.insert
    ]);
}


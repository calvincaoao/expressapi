var users = require('./users');
var index = require('./index');

module.exports = function(app){

    console.log("router:");
    app.use('/users', users);
    app.use('/', index);
}
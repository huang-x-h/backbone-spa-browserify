var Backbone = require('backbone');
Backbone.$ = require('jquery');

var app = require('./app');
var Router = require('./router');

app.router = new Router();

Backbone.history.start({
    root: app.root
});
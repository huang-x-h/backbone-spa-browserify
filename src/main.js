require('./plugins');

var Backbone = require('backbone');
var app = require('./app');
var Router = require('./router');

app.router = new Router();

Backbone.history.start({
    root: app.root,
    pushState: true
});
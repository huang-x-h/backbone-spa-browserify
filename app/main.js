var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var app = require('./app');
var Router = require('./router');

app.router = new Router();

Backbone.history.start({
    root : app.root
});
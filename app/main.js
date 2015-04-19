var jQuery = require('jquery');
var Backbone = require('backbone');
Backbone.$ = jQuery;

var app = require('app');
var Router = require('router');

app.router = new Router();

Backbone.history.start({
    root : app.root
});
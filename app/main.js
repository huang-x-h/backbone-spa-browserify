// fix for bootstrap
jQuery = require('jquery');
require('bootstrap');

var Backbone = require('backbone');
Backbone.$ = jQuery;

var app = require('./app');
var Router = require('./router');

app.router = new Router();

Backbone.history.start({
    root: app.root
});
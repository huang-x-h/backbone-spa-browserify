/**
 * Created by huangxinghui on 2015/2/5.
 */
var Backbone = require('backbone');

var Router = Backbone.Router.extend({
    routes: {
        'user/:id': 'viewUserDetail'
    },

    viewUserDetail: function (id) {

    }
});

module.exports = Router;
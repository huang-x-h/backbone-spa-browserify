/**
 * Created by huangxinghui on 2015/4/19.
 */
var Backbone = require('backbone'),
    service = require('../mockservice/UserService');

module.exports = Backbone.Model.extend({
    idAttribute: 'id',
    defaults: {
        id: '',
        name: '',
        email: ''
    },

    sync: function (method, model, options) {
        if (method === "read") {
            service.findById(this.id).done(function (data) {
                options.success(data);
            });
        }
    }
});
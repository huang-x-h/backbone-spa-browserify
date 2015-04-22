/**
 * Created by huangxinghui on 2015/4/19.
 */
var _ = require('underscore'),
    Backbone = require('backbone'),
    User = require('../models/UserModel'),
    service = require('../mockservice/UserService');

var UserCollection = Backbone.Collection.extend({
    model: User,
    sync: function (method, model, options) {
        if (method === 'read') {
            options.success(service.users);
        }
    }
});

module.exports = UserCollection;
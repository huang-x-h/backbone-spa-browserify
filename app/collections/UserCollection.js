/**
 * Created by huangxinghui on 2015/4/19.
 */
var Backbone = require('backbone'),
    User = require('../models/UserModel');

var UserCollection = Backbone.Collection.extend({
    model: User,
    url: 'mockservice/users.json'
});

module.exports = UserCollection;
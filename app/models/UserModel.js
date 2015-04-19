/**
 * Created by huangxinghui on 2015/4/19.
 */
var Backbone = require('backbone');

var UserModel = Backbone.Model.extend({
    idAttribute: 'id',
    defaults: {
        id: '',
        name: '',
        email: ''
    }
});

module.exports = UserModel;
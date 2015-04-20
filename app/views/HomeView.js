/**
 * Created by huangxinghui on 2015/4/19.
 */
var Backbone = require('backbone'),
    UserListView = require('./UserListView'),
    UserCollection = require('../collections/UserCollection');

var HomeView = Backbone.View.extend({
    className: 'page',

    initialize: function () {
        this.userList = new UserCollection();
        this.render();
    },

    render: function () {
        this.listView = new UserListView({
            collection: this.userList
        });

        this.$el.html(this.listView.$el);
        this.userList.fetch();

        return this;
    }
});

module.exports = HomeView;
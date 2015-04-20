/**
 * Created by huangxinghui on 2015/4/19.
 */
var $ = require('jquery'),
    Backbone = require('backbone'),
    app = require('../app'),
    template = require('../templates/UserList.hbs');

var UserListView = Backbone.View.extend({
    events: {
        'click tr': 'onClick'
    },

    initialize: function () {
        this.render();

        this.collection.on('reset', this.render, this);
    },

    render: function () {
        this.$el.html(template({users: this.collection.toJSON()}));
        return this;
    },

    onClick: function (e) {
        var id = $(e.currentTarget).data('id');
        app.router.navigate('user/' + id, {trigger: true});
    }
});

module.exports = UserListView;
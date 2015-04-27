/**
 * Created by huangxinghui on 2015/4/20.
 */
var Backbone = require('backbone'),
    template = require('../templates/UserDetail.hbs');

module.exports = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(template(this.model.toJSON()));
        return this;
    }
});
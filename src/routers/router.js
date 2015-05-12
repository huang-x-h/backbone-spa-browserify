/**
 * Created by huangxinghui on 2015/2/5.
 */
var $ = require('jquery'),
    Backbone = require('backbone'),
    PageSlider = require('./utils/pageslider'),
    slider = new PageSlider($('body')),
    HomeView = require('./views/HomeView'),
    homeView = new HomeView().render(),
    UserDetailView = require('./views/UserDetailView'),
    User = require('./models/UserModel');

var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'user/:id': 'viewUserDetail'
    },

    home: function () {
        slider.slidePage(homeView.$el);
    },

    viewUserDetail: function (id) {
        var user = new User({id: id});
        user.fetch({
            success: function (data) {
                slider.slidePage(new UserDetailView({model: data}).$el);
            }
        });
    }
});

module.exports = Router;
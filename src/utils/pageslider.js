/**
 * Created by huangxinghui on 2015/4/20.
 */

var $ = require('jquery');
/**
 * @class PageSlider 页面跳转，直接替换body内部内容
 *
 */
var PageSlider = function(container) {
    this.container = container;
    this.currentPage = null;
    this.stateHistory = [];
};

PageSlider.prototype = {
    /**
     * @method back 页面返回
     */
    back: function() {
        window.location.hash = this.stateHistory[this.stateHistory.length - 2];
    },

    /**
     * @method 页面跳转
     * @param page 跳转的页面内容，需是Zepto对象
     * @param callback 跳转结束后回调函数
     */
    slidePage: function(page, callback) {
        var l = this.stateHistory.length,
            state = window.location.hash;

        if (l === 0) {
            this.stateHistory.push(state);
            this.slidePageFrom(page, null, callback);
        } else if (state === this.stateHistory[l-2]) {
            this.stateHistory.pop();
            this.slidePageFrom(page, 'left', callback);
        } else {
            this.stateHistory.push(state);
            this.slidePageFrom(page, 'right', callback);
        }
    },

    slidePageFrom: function(page, from, callback) {
        this.container.append(page);

        if (!this.currentPage || !from) {
            this.currentPage = page;
            callback && callback();
            return;
        }

        // Position the page at the starting position of the animation
        page.addClass('sliding ' + from);
        this.currentPage.addClass('sliding');

        var to = (from === "left" ? "right" : "left");
        var slideEnd = function(e) {
            var $target = $(e.target);
            $target.removeClass('sliding ' + to);
            page.removeClass('sliding');
            $target.remove();
            callback && callback();
        };

        // Force reflow. More information here: http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
        this.currentPage[0].offsetWidth;
        page.removeClass(from);
        this.currentPage.addClass(from === "left" ? "right" : "left");
        this.currentPage.one('webkitTransitionEnd', slideEnd);
        this.currentPage = page;
    }
};

module.exports = PageSlider;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Does the current device support touch events?
 * @source https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
 * @returns {Boolean}
 */
function isTouchDevice() {
    if (typeof window === 'undefined') {
        return false;
    }

    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function mq(query) {
        return window.matchMedia(query).matches;
    };

    if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');

    return mq(query);
}

exports.isTouchDevice = isTouchDevice;
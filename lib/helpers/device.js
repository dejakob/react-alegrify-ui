/**
 * Does the current device support touch events?
 * @source https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
 * @returns {Boolean}
 */
function isTouchDevice() {
    if (typeof window === 'undefined') {
        return null;
    }

    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    const mq = function(query) {
        return window.matchMedia(query).matches;
    }
  
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');

    return mq(query);
}

export {
    isTouchDevice
};

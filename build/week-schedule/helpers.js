'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getCursorOrTouchPosition(eventData) {
    var clientX = void 0;
    var clientY = void 0;

    if (eventData.touches && eventData.touches.length) {
        clientX = eventData.touches[0].clientX;
        clientY = eventData.touches[0].clientY;
    } else {
        clientX = eventData.clientX;
        clientY = eventData.clientY;
    }

    return {
        clientX: clientX,
        clientY: clientY
    };
}

function formatTimeLabel(index) {
    var hour = formatToXDigits(Math.floor(index / 2), 2);
    var min = formatToXDigits(index % 2 * 30, 2);

    return hour + ':' + min;
}

function formatToXDigits(number, digits) {
    var start = '';

    for (var i = 0; i < digits; i++) {
        start += '0';
    }

    return (start + number).substr(-1 * digits, digits);
}

function calculateOffsetTop(hours, minutes, hourHeight) {
    return hours * hourHeight + minutes / 60 * hourHeight;
}

function heightCss(height) {
    return {
        height: height + 'px',
        minHeight: height + 'px',
        maxHeight: height + 'px'
    };
}

exports.getCursorOrTouchPosition = getCursorOrTouchPosition;
exports.formatTimeLabel = formatTimeLabel;
exports.formatToXDigits = formatToXDigits;
exports.calculateOffsetTop = calculateOffsetTop;
exports.heightCss = heightCss;
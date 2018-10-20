'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
    return hours * hourHeight + minutes / 60 * hourHeight - hourHeight;
}

function heightCss(height) {
    return {
        height: height + 'px',
        minHeight: height + 'px',
        maxHeight: height + 'px'
    };
}

exports.formatTimeLabel = formatTimeLabel;
exports.formatToXDigits = formatToXDigits;
exports.calculateOffsetTop = calculateOffsetTop;
exports.heightCss = heightCss;
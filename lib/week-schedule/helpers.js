function formatTimeLabel(index) {
    const hour = formatToXDigits(Math.floor(index / 2), 2);
    const min = formatToXDigits(index % 2 * 30, 2);

    return `${hour}:${min}`;
}

function formatToXDigits(number, digits) {
    let start = '';

    for (let i = 0; i < digits; i++) {
        start += '0';
    }

    return (start + number).substr(-1 * digits, digits);
}

function calculateOffsetTop(hours, minutes, hourHeight) {
    return hours * hourHeight + minutes / 60 * hourHeight - hourHeight;
}

function heightCss(height) {
    return {
        height: `${height}px`,
        minHeight: `${height}px`,
        maxHeight: `${height}px`
    };
}

export {
    formatTimeLabel,
    formatToXDigits,
    calculateOffsetTop,
    heightCss
};

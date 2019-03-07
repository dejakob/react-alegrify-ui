import React from 'react';

const SPACING = {
    EXTRA_SMALL: 2,
    SMALL: 4,
    MEDIUM: 8,
    LARGE: 16,
    EXTRA_LARGE: 32
};

function SpaceXS(props) {
    return SpaceElement(props, 'extra-small');
}

function SpaceS(props) {
    return SpaceElement(props, 'small');
}

function SpaceM(props) {
    return SpaceElement(props, 'medium');
}

function SpaceL(props) {
    return SpaceElement(props, 'large');
}

function SpaceXL(props) {
    return SpaceElement(props, 'extra-large');
}

function SpaceElement(props, spaceVariant) {
    const classNames = (props.className || '').split(' ');

    classNames.push(`alegrify-space--${spaceVariant}`);
    return React.cloneElement(
        props.children,
        { className: classNames.join(' ') }
    );
}

export default SPACING;
export {
    SpaceXS,
    SpaceS,
    SpaceM,
    SpaceL,
    SpaceXL
};
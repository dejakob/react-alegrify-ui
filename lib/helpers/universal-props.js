import React from 'react';
import { PropTypes } from 'prop-types';

const UNIVERSAL_CLASSES = {
    spaceXS: 'alegrify-space--extra-small',
    spaceS: 'alegrify-space--small',
    spaceM: 'alegrify-space--medium',
    spaceL: 'alegrify-space--large',
    spaceXL: 'alegrify-space--extra-large',

    textStart: 'alegrify-align-text--start',
    textCenter: 'alegrify-align-text--center',
    textEnd: 'alegrify-align-text--end',

    start: 'alegrify-align-child--start',
    center: 'alegrify-align-child--center',
    end: 'alegrify-align-child--end',
    top: 'alegrify-align-child--top',
    middle: 'alegrify-align-child--middle',
    bottom: 'alegrify-align-child--bottom'
};

const ADDITIONAL_PROP_TYPES = {
    dataTest: PropTypes.string,
    dataTestId: PropTypes.string
};

function getAdditionalClassNames(props) {
    const classNames = Array.isArray(props.className) ?
        props.className :
        (typeof props.className === 'string' ? props.className : '').split(' ');

    Object
        .keys(UNIVERSAL_CLASSES)
        .forEach(propName => {
            const className = UNIVERSAL_CLASSES[propName];

            if (props[propName]) {
                classNames.push(className);
            }
        });

    return classNames;
}

function applyAdditionalProps(props) {
    return {
        // Anchors for testing
        'data-test': props.dataTest,
        'data-test-id': props.dataTestId
    }
}

function attachUniversalProps(Component) {
    const WrappedComponent = props => {
        const classNames = getAdditionalClassNames(props);

        return (
            <Component
                {...props}
                className={classNames.join(' ')}
            />
        );
    };

    WrappedComponent.propTypes = {
        ...Component.propTypes,
        ...ADDITIONAL_PROP_TYPES
    };
    WrappedComponent.defaultProps = Component.defaultProps;

    return WrappedComponent;
}

export {
    getAdditionalClassNames,
    attachUniversalProps,
    applyAdditionalProps
};

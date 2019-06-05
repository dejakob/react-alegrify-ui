import React from 'react';

const UNIVERSAL_CLASSES = {
    spaceXS: 'alegrify-space--extra-small',
    spaceS: 'alegrify-space--small',
    spaceM: 'alegrify-space--medium',
    spaceL: 'alegrify-space--large',
    spaceXL: 'alegrify-space--extra-large',
};

function getAdditionalClassNames(props) {
    const classNames = (props.className || '').split(' ');

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

function attachUniversalProps(Component) {
    return props => {
        const classNames = getAdditionalClassNames(props);

        return (
            <Component
                {...props}
                className={classNames.join(' ')}
            />
        );
    };
}

export {
    getAdditionalClassNames,
    attachUniversalProps
};

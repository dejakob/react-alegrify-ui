import React from 'react';
import PropTypes from 'prop-types';

function PropsTable(props) {
    const { Component } = props;
    const { defaultProps, propTypes } = Component;

    return (
        <table>
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Default</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(propTypes).map(propName => (
                    <tr
                        key={propName}
                    >
                        <th>{propName}{isRequired(propTypes[propName]) ? '*' : ''}</th>
                        <td>{getCorrespondingPropType(propTypes[propName])}</td>
                        <td>{(defaultProps || {})[propName] || ''}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

/**
 * 
 * @param propDefinition 
 * @returns {String}
 */
function getCorrespondingPropType(propDefinition) {
    return Object
        .keys(PropTypes)
        .find(propName =>
            PropTypes[propName] === propDefinition ||
            PropTypes[propName].isRequired === propDefinition
        ) || 'any';
}

/**
 * 
 * @param propDefinition 
 * @returns {String}
 */
function isRequired(propDefinition) {
    return Object
        .keys(PropTypes)
        .some(propName =>
            PropTypes[propName].isRequired === propDefinition
        );
}

export default PropsTable;

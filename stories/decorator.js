import React from 'react';

function decorator(story) {
    return (
        <div style={{ margin: '32px' }}>
            {story()}
        </div>
    );
}

export default decorator;

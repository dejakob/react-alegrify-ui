import React from 'react';

function decorator(story) {
    return (
        <main class="alegrify-main">
            <article class="alegrify-article alegrify-article--full alegrify-space--large">
                <div>
                    {story()}
                </div>
            </article>
            <p style={{ textAlign: 'right' }}>Alegrify UI</p>
        </main>
    );
}

export default decorator;

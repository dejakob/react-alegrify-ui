import React from 'react';
import Grid from '../grid';
import GridCell from '../grid-cell';

function Preview(props) {
  const { children } = props;

  return (
    <Grid stretch bleed>
      <GridCell six>
        <div className="preview">
          <div id={props.id}>
            {children}
          </div>
        </div>
      </GridCell>
      <GridCell six>
        <pre className="preview__pre">
          <code className="language-html">
            {props.code.trim()}
          </code>
        </pre>
      </GridCell>
    </Grid>
  )
}

export default Preview;

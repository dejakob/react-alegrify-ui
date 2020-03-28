import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '../build/button';
import Dialog from '../build/dialog';

const DefaultExample = () => {
    const [ open, setOpen ] = useState(false);
    return (
        <>
            <Button onClick={() => { setOpen(true) }}>Open dialog</Button>
            <Dialog
                open={open}
                actions={<Button full onClick={() => { setOpen(false) }}>OK</Button>}
                title="Hello there"
            >
                Some content
            </Dialog>
        </>
    );
};

const dialogDefault = document.getElementById('dialog--default');
console.log('dialog default', dialogDefault);

if (dialogDefault) {
    ReactDOM.render(<DefaultExample />, dialogDefault);
}
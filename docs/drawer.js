import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '../build/button';
import Drawer from '../build/drawer';

const DefaultExample = () => {
    const [ open, setOpen ] = useState(false);
    return (
        <>
            <Button onClick={() => { setOpen(true) }}>Open drawer</Button>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                title="Hello there"
            >
                Some content
            </Drawer>
        </>
    );
};

const drawerDefault = document.getElementById('drawer--default');

if (drawerDefault) {
    ReactDOM.render(<DefaultExample />, drawerDefault);
}
import { useEffect, useRef } from 'react';

/**
 * Listen to a certain key
 * 
 * @param  {...number} keysToListenTo 
 * 
 * @example
 *   const [ onLeftArrow ] = useKeyDown(37);
 *   onLeftArrow(keyDownEvent => { doSomething(); });
 */
function useKeyDown(...keysToListenTo) {
    const callbackScope = useRef({});

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return keysToListenTo.map(keyCode => {
        return listener => {
            callbackScope.current[keyCode] = listener;
        };
    });

    function handleKeyDown(keyDownEvent) {
        if (keysToListenTo.indexOf(keyDownEvent.keyCode) > -1) {
            if (callbackScope.current[keyDownEvent.keyCode]) {
                callbackScope.current[keyDownEvent.keyCode](keyDownEvent);
            }
        }
    }
}

export default useKeyDown;

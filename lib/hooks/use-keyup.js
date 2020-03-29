import { useEffect, useRef } from 'react';

/**
 * Listen to a certain key
 * 
 * @param  {...number} keysToListenTo 
 * 
 * @example
 *   const [ onLeftArrow ] = useKeyUp(37);
 *   onLeftArrow(keyUpEvent => { doSomething(); });
 */
function useKeyUp(...keysToListenTo) {
    const callbackScope = useRef({});

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return keysToListenTo.map(keyCode => {
        return listener => {
            callbackScope.current[keyCode] = listener;
        };
    });

    function handleKeyUp(keyUpEvent) {
        if (keysToListenTo.indexOf(keyUpEvent.keyCode) > -1) {
            if (callbackScope.current[keyCode]) {
                callbackScope.current[keyCode](keyUpEvent);
            }
        }
    }
}

export default useKeyUp;

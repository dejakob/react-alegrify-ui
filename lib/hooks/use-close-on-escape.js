import { useEffect, useRef } from 'react';

const ESCAPE_KEY = 27;

/**
 * Close modal/dropdown/... when pressing escape key
 * 
 * @example
 *   useCloseOnEscape(onClose);
 */
function useCloseOnEscape(closeMethod) {
    const callbackScope = useRef({ closeMethod });

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return [];

    /**
     * When pressing key up
     * @param {KeyboardEvent} keyUpEvent 
     */
    function handleKeyUp(keyUpEvent) {
        const { closeMethod } = callbackScope.current;
        const { keyCode } = keyUpEvent;

        if (keyCode === ESCAPE_KEY && typeof closeMethod === 'function') {
            keyUpEvent.preventDefault();
            keyUpEvent.stopPropagation();
            closeMethod();
        }
    }
}

export default useCloseOnEscape;
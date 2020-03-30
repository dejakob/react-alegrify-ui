import { useEffect, useState } from 'react';

/**
 * Set focus to action in modal on open
 *  and focus to last focused element on close
 * @param {HTMLElement} actionsContainer [container where a button or link can be in]
 * @param {Boolean} open [Is the modal open?]
 * @returns {[lastFocusedElement]}
 */
function useModalFocus(actionsContainer, open) {
    const [
        lastFocusedElement,
        setLastFocusedElement
    ] = useState(null);

    useEffect(() => {
        if (open) {
            setLastFocusedElement(document.activeElement);
            const firstAction = actionsContainer.querySelector('a, button');
    
            if (firstAction) {
                firstAction.focus();
            }
        }
        else if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }, [open]);

    return [ lastFocusedElement ];
}

export default useModalFocus;

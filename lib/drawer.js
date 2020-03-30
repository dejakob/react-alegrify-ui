import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';
import useCloseOnEscape from './hooks/use-close-on-escape';
import useModalFocus from './hooks/use-modal-focus';

/**
 * <Drawer />
 * 
 * ```jsx
 * <Drawer
 *   open={true}
 *   onClose={() => {}}
 * >
 *   Some drawer content
 * </Drawer>
 * ```
 */
function Drawer(props) {
    const domRef = useRef(null);

    useCloseOnEscape(props.onClose);
    useModalFocus(domRef.current, props.open);    

    const classNames = ['alegrify-drawer'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <dialog
            class={classNames.join(' ')}
            open={props.open}
            onClick={props.onClose}
            ref={domRef}
        >
            <div
                class="alegrify-drawer__content"
                onClick={clickEvent => clickEvent.stopPropagation()}
            >
                {props.title ? (
                    <h2
                        class="alegrify-drawer__title"
                    >
                        {props.title}
                    </h2>
                ) : null}

                {props.children}
          </div>
        </dialog>
    );
}

Drawer.propTypes = {

    /**
     * Content
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * Should the dialog be shown?
     */
    open: PropTypes.bool,

    /**
     * Close method
     */
    onClose: PropTypes.func,

    /**
     * Title to show inside the dialog
     */
    title: PropTypes.string
};
Drawer.defaultProps = {};

export default attachUniversalProps(Drawer);

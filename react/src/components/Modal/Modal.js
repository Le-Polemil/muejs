import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { ErrorBoundary } from '../ErrorBoundary'

import './index.scss'

import { TOP, BOTTOM, LEFT, RIGHT, propTypes, defaultProps } from './static'

function getTranslateAnimation({ open, closing, from }) {
    switch (from) {
        case TOP: {
            return open && (closing ? 'to-translateY--100' : 'to-translateY--0')
        }
        case LEFT: {
            return open && (closing ? 'to-translateX--100' : 'to-translateX--0')
        }
        case RIGHT: {
            return open && (closing ? 'to-translateX-100' : 'to-translateX-0')
        }
        case BOTTOM:
        default:
            return open && (closing ? 'to-translateY-100' : 'to-translateY-0')
    }
}

export function UncatchedModal({
    id,
    className = '',
    containerClassName = '',
    animationDuration = 300,
    from = BOTTOM,
    style = {},
    containerStyle = {},
    children,
    onClose = () => undefined,
    onValid = () => undefined,
    onRefuse = () => undefined,
    whileClosing = () => undefined,
} = {}) {
    const [open, _setOpen] = useState(true)
    const [closing, _setClosing] = useState(false)
    const openRef = useRef(open)
    const closingRef = useRef(closing)
    const ref = useRef(null)

    function setOpen(v) {
        openRef.current = v
        _setOpen(v)
    }

    // start animation
    function setClosing(v) {
        closingRef.current = v
        _setClosing(v)
    }

    function close(hasRefused) {
        if (openRef.current) {
            whileClosing({ hasRefused })
            setClosing(true)
        }
    }

    function valid(v) {
        onValid(v)
        close(false)
    }
    function refuse() {
        onRefuse()
        close(true)
    }

    function escFunction(e) {
        if (e.keyCode === 27) {
            close(true)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', escFunction, false)

        return () => {
            document.removeEventListener('keydown', escFunction, false)
        }
    }, [])

    function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            close(true)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (open && closing) {
            const timer = setTimeout(() => {
                if (open) {
                    setOpen(false)
                    setClosing(false)
                    // send false to simplify the usage of onClose
                    // example : onClose={setOpen} instead of onClose={() => setOpen(false)}
                    onClose(false)
                }
            }, animationDuration)
            return () => clearTimeout(timer)
        }
    }, [open, closing])

    if (!open) return null

    const modal = (
        <div
            className={[
                'modal-bg',
                containerClassName,
                open && (closing ? 'to-opacity-0' : 'to-opacity-100'),
            ]
                ?.filter(e => !!e)
                .join(' ')}
            style={{
                '--animation-duration': animationDuration + 'ms',
                ...containerStyle,
            }}
        >
            <div
                id={id}
                className={[
                    'modal',
                    className,
                    getTranslateAnimation({ open, closing, from }),
                ]
                    ?.filter(e => !!e)
                    .join(' ')}
                ref={ref}
                style={{ '--animation-duration': animationDuration + 'ms' }}
            >
                {typeof children === 'function'
                    ? children({ close, valid, refuse })
                    : children}
            </div>
        </div>
    )

    return createPortal(modal, document.getElementById('modal-root'))
}

UncatchedModal.propTypes = propTypes
UncatchedModal.defaultProps = defaultProps

export const Modal = props => {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedModal {...props} />
        </ErrorBoundary>
    )
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps

export default Modal

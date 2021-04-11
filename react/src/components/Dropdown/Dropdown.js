import React, { useState, useEffect, useRef } from 'react'
import { any, bool, func, object, string } from 'prop-types'

import './index.scss'

export const Dropdown = ({
    trigger,
    content,
    children = content,
    direction,
    style,
    contentStyle,
    className,
    containerClassName,
    contentClassName,
    invisible,
    disabled,
    removeFromDOMWhenClosed,
    onClick,
    onOpen,
    onClose,
}) => {
    const ref = useRef(null)
    const [isOpen, _setOpen] = useState(false)
    const isOpenRef = useRef(isOpen)

    function setOpen(v) {
        isOpenRef.current = v
        _setOpen(v)
    }

    function open() {
        if (!isOpenRef.current) {
            onOpen()
            setOpen(true)
        }
    }
    function close() {
        if (isOpenRef.current) {
            onClose()
            setOpen(false)
        }
    }

    function handleClick(e) {
        e.preventDefault()
        e.stopPropagation()
        if (disabled) return null
        isOpen ? close() : open()
        onClick()
    }

    function escFunction(e) {
        if (e.keyCode === 27) {
            close()
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
            close()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div
            className={[
                containerClassName,
                'dropdown-container',
                invisible && 'invisible',
            ]
                ?.filter(e => !!e)
                .join(' ')}
            ref={ref}
            style={style}
        >
            <a
                className={[className, isOpen && 'open']
                    ?.filter(e => !!e)
                    .join(' ')}
                onClick={handleClick}
            >
                {typeof trigger === 'function'
                    ? trigger({ isOpen, open, close })
                    : trigger}
            </a>

            {(isOpen || !removeFromDOMWhenClosed) && (
                <div
                    className={[
                        'dropdown-content overflow-y-auto',
                        isOpen && 'displayed',
                        direction && 'to-' + direction,
                        contentClassName,
                    ]
                        ?.filter(e => !!e)
                        .join(' ')}
                    style={contentStyle}
                >
                    {typeof children === 'function'
                        ? children({ close })
                        : children}
                </div>
            )}
        </div>
    )
}

Dropdown.propTypes = {
    trigger: any,
    content: any,
    children: any,
    direction: string,
    style: object,
    contentStyle: object,
    className: string,
    containerClassName: string,
    contentClassName: string,
    invisible: bool,
    disabled: bool,
    removeFromDOMWhenClosed: bool,
    onClick: func,
    onOpen: func,
    onClose: func,
}

Dropdown.defaultProps = {
    className: '',
    containerClassName: '',
    contentClassName: '',
    invisible: false,
    disabled: false,
    removeFromDOMWhenClosed: false,
    onClick: () => undefined,
    onOpen: () => undefined,
    onClose: () => undefined,
}

export default Dropdown

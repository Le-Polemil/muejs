import React from 'react'

export function Eye({
    onClick = () => null,
    className = '',
    color = 'var(--secondary-color)',
    size = 16,
}) {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 16 16'
            onClick={onClick}
        >
            <g fill='none' fillRule='evenodd'>
                <g fill={color} fillRule='nonzero'>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <path
                                        d='M15.933 7.667C14.318 3.758 11.28 1.333 8 1.333S1.682 3.758.067 7.667c-.09.212-.09.454 0 .666C1.682 12.242 4.72 14.667 8 14.667s6.318-2.425 7.933-6.334c.09-.212.09-.454 0-.666zM8 13c-2.535 0-4.934-1.908-6.318-5C3.066 4.908 5.465 3 8 3c2.535 0 4.934 1.908 6.318 5-1.384 3.092-3.783 5-6.318 5zm0-8.333C6.233 4.667 4.801 6.159 4.801 8c0 1.84 1.432 3.333 3.199 3.333S11.199 9.841 11.199 8c0-.884-.337-1.732-.937-2.357-.6-.625-1.414-.976-2.262-.976zm0 5c-.883 0-1.6-.747-1.6-1.667S7.118 6.333 8 6.333c.883 0 1.6.747 1.6 1.667S8.882 9.667 8 9.667z'
                                        transform='translate(-354 -1493) translate(100 849) translate(0 570) translate(0 34) translate(254 40)'
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Eye

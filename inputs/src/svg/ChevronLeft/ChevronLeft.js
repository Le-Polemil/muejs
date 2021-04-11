import React from 'react'

export function ChevronLeft({
    onClick = () => null,
    className = '',
    color = 'currentColor',
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
                        <g transform='translate(-1368 -770) translate(627) translate(729 758)'>
                            <g>
                                <g>
                                    <path
                                        d='M12.833.365c-.455-.452-1.19-.452-1.645 0L7 4.495 2.87.365c-.455-.452-1.19-.452-1.645 0-.22.22-.345.517-.345.828 0 .311.124.61.345.829l4.947 4.946c.219.221.517.345.828.345.311 0 .61-.124.828-.345l5.005-4.946c.221-.22.345-.518.345-.829 0-.31-.124-.609-.345-.828z'
                                        transform='matrix(0 -1 -1 0 28 28) translate(0 4)'
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

export default ChevronLeft

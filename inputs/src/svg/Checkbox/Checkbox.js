import React from 'react'

export function Checkbox({
    onClick = () => null,
    className = '',
    color = 'currentColor',
    checkColor = 'var(--pale-color)',
    size = 16,
}) {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='2 2 12 12'
            onClick={onClick}
        >
            <g fill='none' fillRule='evenodd'>
                <g fillRule='nonzero'>
                    <g>
                        <g>
                            <path
                                fill={color}
                                d='M14 1.333H2c-.368 0-.667.299-.667.667v12c0 .368.299.667.667.667h12c.368 0 .667-.299.667-.667V2c0-.368-.299-.667-.667-.667z'
                                transform='translate(-121 -524) translate(121 522) translate(0 2)'
                            />
                            <path
                                fill={checkColor}
                                d='M6.807 9.833c.125.127.295.198.473.198s.348-.071.473-.198l2.72-2.72c.262-.261.262-.685 0-.946-.261-.262-.685-.262-.946 0L7.28 8.42l-.807-.813c-.261-.262-.685-.262-.946 0-.262.261-.262.685 0 .946l1.28 1.28z'
                                transform='translate(-121 -524) translate(121 522) translate(0 2)'
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Checkbox

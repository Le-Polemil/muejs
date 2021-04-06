import React from 'react'

export function ArrowLeft({
    onClick = () => null,
    className = '',
    color = 'currentColor',
    size = 12,
}) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 12 12'
            className={className}
            onClick={onClick}
        >
            <g fill='none' fillRule='evenodd'>
                <g>
                    <g transform='translate(-56 -56) rotate(-180 42 42)'>
                        <g>
                            <path
                                fill={color}
                                fillRule='nonzero'
                                d='M11.925 5.62c-.048-.123-.12-.235-.21-.33L6.713.294c-.254-.254-.624-.353-.97-.26-.347.093-.618.363-.71.71-.094.346.005.715.26.969L8.592 5H1c-.552 0-1 .447-1 1 0 .551.448.998 1 .998h7.594l-3.302 3.288c-.19.187-.296.443-.296.709 0 .266.107.522.296.71.188.189.444.295.71.295.267 0 .523-.106.71-.296l5.003-4.995c.09-.095.162-.208.21-.33.1-.243.1-.516 0-.76z'
                                transform='translate(16 16)'
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default ArrowLeft

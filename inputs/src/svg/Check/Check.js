import React from 'react'

export function Check({
    onClick = () => null,
    className = '',
    color = 'var(--secondary-color)',
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
                    <g>
                        <g>
                            <g>
                                <g transform='translate(-618 -2060) translate(495 1847) translate(0 99) translate(0 96) translate(117 12)'>
                                    <g>
                                        <g fill='#F2B705' fillRule='nonzero'>
                                            <path
                                                d='M11.033.907C10.892.766 10.7.686 10.5.686s-.392.08-.533.221L4.38 6.503 2.033 4.147c-.197-.19-.48-.26-.744-.185-.263.075-.466.286-.533.551-.066.266.015.547.212.737l2.88 2.88c.14.142.332.222.532.222s.392-.08.532-.222l6.12-6.12c.154-.142.242-.342.242-.551 0-.21-.088-.41-.241-.552z'
                                                transform='translate(6 6) translate(0 1.5)'
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Check

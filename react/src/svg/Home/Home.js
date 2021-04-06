import React from 'react'

export function Home({
    onClick = () => null,
    className = '',
    color = 'currentColor',
    size = 14,
}) {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 14 14'
            onClick={onClick}
        >
            <g fill='none' fillRule='evenodd'>
                <g>
                    <g transform='translate(-1371 -55) translate(1356 40)'>
                        <g fill={color} fillRule='nonzero'>
                            <path
                                d='M13.764 5.774L7.462.174c-.264-.232-.66-.232-.924 0l-6.302 5.6c-.22.194-.294.504-.189.778.104.269.363.447.651.448h.7v6.3c0 .387.314.7.7.7h9.803c.387 0 .7-.313.7-.7V7h.7c.29-.001.548-.18.652-.448.105-.274.03-.584-.19-.778zM7.7 12.6H6.3v-2.1c0-.387.313-.7.7-.7.387 0 .7.313.7.7v2.1zm3.501 0h-2.1v-2.1C9.1 9.34 8.16 8.4 7 8.4c-1.16 0-2.1.94-2.1 2.1v2.1H2.798V7H11.2v5.6zm-8.661-7L7 1.636 11.46 5.6H2.54z'
                                transform='translate(15 15)'
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Home

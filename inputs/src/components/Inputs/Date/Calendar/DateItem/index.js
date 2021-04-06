import React from 'react'

import {
    isSameDay,
    isSameMonth,
    getDateISO,
} from '../../../../../utils/calendar'

export default function DateItem({
    current,
    month,
    year,
    today,
    date,
    index,
    onClick: handleClick,
}) {
    const _date = date ? new Date(date.join('-')) : null
    if (!_date) return null

    const isToday = isSameDay(_date, today)
    const isCurrent = current && isSameDay(_date, current)
    const inMonth =
        month &&
        year &&
        isSameMonth(_date, new Date([year, month, 1].join('-')))

    const onClick = handleClick(_date)
    const props = { index, onClick, title: _date.toDateString(), onClick }

    return (
        <div
            key={getDateISO(_date)}
            className={[
                'datepicker-month-day',
                'grid-item',
                inMonth && 'in-month',
                isToday && 'is-today',
                isCurrent && 'is-current',
            ]
                ?.filter(e => !!e)
                .join(' ')}
            {...props}
        >
            {_date.getDate()}
        </div>
    )
}

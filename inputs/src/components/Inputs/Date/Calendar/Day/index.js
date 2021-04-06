import React from 'react'

import { WEEK_DAYS } from '../../../../../utils/calendar'

export default function DayLabel({ day, index }) {
    const daylabel = WEEK_DAYS[day].toUpperCase()

    return (
        <label
            className='datepicker-day-label grid-item'
            style={{ gridRow: '1 / 1', gridColumn: index }}
        >
            {daylabel}
        </label>
    )
}

import React, { useState } from 'react'
import { ChevronLeft } from '../../../../../svg/ChevronLeft'
import { ChevronRight } from '../../../../../svg/ChevronRight'

import {
    getNextMonth,
    getPreviousMonth,
    CALENDAR_MONTHS,
} from '../../../../../utils/calendar'

export default function MonthAndYear({ month, setMonth, year, setYear }) {
    const [modifying, setModifying] = useState('month')

    const monthname = Object.keys(CALENDAR_MONTHS)[
        Math.max(0, Math.min(month - 1, 11))
    ]

    function gotoPreviousMonth() {
        const { month: newMonth, year: newYear } = getPreviousMonth(month, year)
        if (year !== newYear) setYear(newYear)
        setMonth(newMonth)
    }

    function gotoNextMonth() {
        const { month: newMonth, year: newYear } = getNextMonth(month, year)
        if (year !== newYear) setYear(newYear)
        setMonth(newMonth)
    }

    function gotoPreviousYear() {
        setYear(year - 1)
    }

    function gotoNextYear() {
        setYear(year + 1)
    }

    function handlePrevious() {
        if (modifying === 'month') gotoPreviousMonth()
        else if (modifying === 'year') gotoPreviousYear()
    }

    function handleNext() {
        if (modifying === 'month') gotoNextMonth()
        else if (modifying === 'year') gotoNextYear()
    }

    return (
        <div className={`flex pb-10 width-100% modifying-${modifying}`}>
            <button
                className='btn-text arrow-left bold'
                onMouseDown={handlePrevious}
                title='Mois dernier'
                type='button'
            >
                <ChevronLeft />
            </button>

            <span className='month-and-year flex-1 flex justify-center'>
                <button
                    className='btn-text month bold font-20 mr-10'
                    onClick={() => setModifying('month')}
                    type='button'
                >
                    {monthname}
                </button>

                <button
                    className='btn-text year bold font-20'
                    onClick={() => setModifying('year')}
                    type='button'
                >
                    {year}
                </button>
            </span>

            <button
                className='btn-text arrow-right bold'
                onMouseDown={handleNext}
                title='Mois prochain'
                type='button'
            >
                <ChevronRight />
            </button>
        </div>
    )
}

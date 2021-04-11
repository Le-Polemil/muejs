import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import calendar, {
    isDate,
    isSameDay,
    WEEK_DAYS,
} from '../../../../utils/calendar'

import DateItem from './DateItem'
import Day from './Day'
import MonthAndYear from './MonthAndYear'

export default function Calendar({
    date: defaultDate,
    close,
    onChange = () => null,
}) {
    const [dateInput, setDate] = useState(defaultDate)
    const [current, setCurrent] = useState(null)
    const [month, setMonth] = useState(null)
    const [year, setYear] = useState(null)

    useEffect(() => {
        const isDateObject = isDate(dateInput)
        const _date = isDateObject ? dateInput : new Date()
        setCurrent(isDateObject ? dateInput : null)
        setMonth(+_date.getMonth() + 1)
        setYear(_date.getFullYear())
    }, [dateInput])

    useEffect(() => {
        let newDate

        if (new RegExp('/').test(defaultDate)) {
            const [dd, mm, yyyy] = defaultDate.split('/')
            newDate = new Date(yyyy, mm - 1, dd)
        } else if (new RegExp('-').test(defaultDate)) {
            const [dd, mm, yyyy] = defaultDate.split('-')
            newDate = new Date(yyyy, mm - 1, dd)
        }

        if (isDate(newDate)) {
            setDate(newDate)
        }
    }, [defaultDate])

    function getCalendarDates() {
        const calendarMonth =
            month || (current && +current.getMonth() + 1) || undefined
        const calendarYear =
            year || (current && current.getFullYear()) || undefined

        return calendar(calendarMonth, calendarYear)
    }

    const gotoDate = dt => evt => {
        evt && evt.preventDefault()

        !(current && isSameDay(dt, current)) && setDate(dt)

        onChange('' + dayjs(dt).format('DD/MM/YYYY'))
        close()
    }

    return (
        <div className='flex flex-column align-items-center'>
            <MonthAndYear
                month={month}
                setMonth={setMonth}
                year={year}
                setYear={setYear}
            />

            <div>
                <div className='grid'>
                    {Object.keys(WEEK_DAYS).map((day, index) => (
                        <Day key={`daylabel#${day}`} day={day} index={index} />
                    ))}

                    {getCalendarDates().map((date, index) => {
                        return (
                            <DateItem
                                key={`calendarDate#${
                                    date ? date.join('-') : index
                                }`}
                                index={index}
                                current={current}
                                month={month}
                                year={year}
                                date={date}
                                onClick={gotoDate}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

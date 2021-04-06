import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Dropdown } from 'react-muejs'
import { v4 as uuid } from 'uuid'
import { func, object, string, any, bool, array, oneOfType } from 'prop-types'

import Calendar from './Calendar'

import { Calendar as CalendarIcon } from '../../../svg/Calendar'

import { validateDate } from '../../../utils/calendar'

import './index.scss'

const Datepicker = ({
    //input
    label,
    name,
    value,
    placeholder,
    disabled,
    readOnly = disabled,
    className,
    inputClassName,
    contentClassName,
    onChange,
    //other
    direction,
    helper,
    // form
    setValue,
    errors,
}) => {
    const [id] = useState(uuid())
    const error = errors?.[name]

    return (
        <label className={`field ${className ?? ''}`.trim()}>
            <label className='label bold mb-4' htmlFor={id}>
                {label || name}
            </label>

            {/* <div
            className={[
                'datepicker',
                'input-field',
                fieldClassName,
                !value && 'empty',
                (disabled || readOnly) && 'disabled',
                error ? 'invalid' : 'valid',
            ]
                ?.filter(e => !!e)
                .join(' ')}
        > */}

            <Dropdown
                disabled={disabled || readOnly}
                direction={direction}
                contentClassName={contentClassName}
                invisible
                className={[
                    'datepicker input overflow-y-auto overflow-x-hidden width-100%',
                    'with-icon',
                    !value?.length && 'empty',
                    error && 'invalid',
                    (disabled || readOnly) && 'disabled',
                    inputClassName,
                ]
                    .filter(e => !!e)
                    .join(' ')}
                trigger={() => (
                    <>
                        <input
                            value={value ?? ''}
                            name={name}
                            id={id}
                            type='text'
                            onChange={onChange}
                            readOnly={readOnly}
                            disabled={disabled}
                            placeholder={placeholder}
                            autoComplete='off'
                        />

                        <CalendarIcon className='input-icon absolute pointer' />
                    </>
                )}
            >
                {({ close }) => (
                    <Calendar date={value} onChange={onChange} close={close} />
                )}
            </Dropdown>

            <div className='flex justify-space-between'>
                <div
                    className={`helper flex-1 ${error ? 'invalid' : ''}`.trim()}
                >
                    {error ? error?.message ?? 'Erreur' : helper}
                </div>
            </div>
        </label>
    )
}

Datepicker.propTypes = {
    // input
    label: string,
    name: string.isRequired,
    placeholder: string,
    readOnly: bool,
    disabled: bool,
    className: string,
    inputClassName: string,
    contentClassName: string,
    onChange: func,
    value: any,
    // other
    direction: string,
    loading: bool,
    helper: string,
    // form
    errors: any,
}

Datepicker.defaultProps = {
    className: '',
    inputClassName: '',
    contentClassName: 'right-unset',
    onChange: () => null,
}

const InputDate = ({ control, name, rules, defaultValue, ...otherProps }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                ...(rules || {}),
                validate: date =>
                    date &&
                    ((typeof rules?.validate === 'function' &&
                        rules.validate(date)) ||
                        validateDate(date, 'DD/MM/YYYY') ||
                        'Le format doit être JJ/MM/AAAA'),
            }}
            defaultValue={defaultValue}
            render={({ onChange, value, name }) => (
                <Datepicker
                    {...otherProps}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
            )}
        />
    )
}

InputDate.propTypes = {
    // input
    name: string.isRequired,
    defaultValue: oneOfType([array, string]),
    // form
    rules: object,
    control: any,
    // transmitted
    label: string,
    placeholder: string,
    readOnly: bool,
    disabled: bool,
    className: string,
    inputClassName: string,
    contentClassName: string,
    onChange: func,
    value: any,
    direction: string,
    loading: bool,
    helper: string,
}

InputDate.defaultProps = {
    defaultValue: '',
}

export default InputDate

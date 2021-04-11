import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Dropdown, useGridify } from 'react-muejs'
import { v4 as uuid } from 'uuid'
import { func, object, string, any, bool, array, oneOfType } from 'prop-types'

import Calendar from './Calendar'

import { Calendar as CalendarIcon } from '../../../svg/Calendar'

import { validateDate } from '../../../utils/calendar'

import './index.scss'

export const Datepicker = ({
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
    validIfNoErrors,
    haveRules,
    direction,
    helper,
    // form
    formState: { errors },
    setValue,
    // grid
    ...props
}) => {
    const {
        className: gridClassName,
        style: gridStyle = {},
        ...gridProps
    } = useGridify({
        componentName: 'InputDate',
        ...props,
    })

    const [id] = useState(uuid())
    const error = errors?.[name]?.message

    return (
        <label
            className={[
                'field',
                gridClassName,
                className,
                !value?.length && 'empty',
                error && 'invalid',
                validIfNoErrors && !error && haveRules && 'valid',
                (disabled || readOnly) && 'disabled',
            ]
                .filter(e => !!e)
                .join(' ')}
            style={gridStyle}
            {...gridProps}
        >
            <label className='label bold mb-4' htmlFor={id}>
                {label || name}
            </label>

            <Dropdown
                disabled={disabled || readOnly}
                direction={direction}
                contentClassName={contentClassName}
                invisible
                className={[
                    'datepicker input overflow-y-auto overflow-x-hidden width-100%',
                    'with-icon',
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
                            autoComplete={id}
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
                <div className='helper flex-1'>
                    {error ? error ?? 'Erreur' : helper}
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

export const InputDate = ({
    control,
    name,
    rules,
    defaultValue,
    ...otherProps
}) => {
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
            render={({ field: { onChange, value, name } = {} }) => (
                <Datepicker
                    {...otherProps}
                    value={value}
                    onChange={onChange}
                    name={name}
                    haveRules={rules && rules !== {}}
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

import React, { useState } from 'react'
import { useWatch } from 'react-hook-form'
import { useGridify } from 'react-muejs'
import { v4 as uuid } from 'uuid'
import { any, bool, string } from 'prop-types'

import { Checkbox as CheckboxIcon } from '../../../svg/Checkbox'

const InputRadio = ({
    label,
    name,
    value,
    defaultChecked,
    disabled,
    readOnly = disabled,
    className,
    inputClassName,
    // other
    helper,
    rules,
    // form
    control,
    errors,
    register,
    //grid
    ...gridProps
}) => {
    const {
        className: gridClassName,
        style: gridStyle = {},
        ...props
    } = useGridify({
        componentName: 'InputRadio',
        ...gridProps,
    })

    const [id] = useState(uuid())
    const error = errors?.[name]

    const checked =
        useWatch({
            control,
            name,
            defaultValue: defaultChecked && value,
        }) == value

    return (
        <label
            className={`field ${gridClassName ?? ''} ${className ?? ''}`.trim()}
            style={gridStyle}
            {...props}
        >
            <div
                className={[
                    'radio input',
                    error && 'invalid',
                    (disabled || readOnly) && 'disabled',
                    inputClassName,
                ]
                    ?.filter(e => !!e)
                    .join(' ')}
            >
                <div className='flex align-items-center height-20 width-20 b-rad-50% b-2 b-secondary mr-6'>
                    <CheckboxIcon
                        size={18}
                        className={`check-icon m--1 b-rad-50% overflow-hidden ${
                            checked ? 'checked' : ''
                        }`}
                    />
                </div>

                <input
                    id={id}
                    defaultChecked={defaultChecked}
                    name={name}
                    type='radio'
                    className='hidden'
                    readOnly={readOnly}
                    disabled={disabled}
                    value={value}
                    ref={register(rules)}
                />

                <label className='label bold' htmlFor={id}>
                    {label || name}
                </label>
            </div>

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

InputRadio.propTypes = {
    // input
    label: string,
    name: string.isRequired,
    value: string.isRequired,
    defaultChecked: bool,
    readOnly: bool,
    disabled: bool,
    className: string,
    inputClassName: string,
    // other
    helper: string,
    rules: any,
    // form
    control: any,
    errors: any,
    register: any,
}

InputRadio.defaultProps = {
    className: '',
    inputClassName: '',
    defaultValue: '',
    onChange: () => null,
}

export default InputRadio

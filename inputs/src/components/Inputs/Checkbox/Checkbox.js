import React, { useState } from 'react'
import { useWatch } from 'react-hook-form'
import { useGridify } from 'react-muejs'
import { v4 as uuid } from 'uuid'
import { any, bool, string } from 'prop-types'

import { Checkbox as CheckboxIcon } from '../../../svg/Checkbox'

import './index.scss'

export const InputCheckbox = ({
    label,
    name,
    defaultChecked,
    disabled,
    readOnly = disabled,
    className,
    inputClassName,
    // other
    validIfNoErrors,
    helper,
    // form
    rules,
    formState: { errors },
    control,
    register,
    //grid
    ...props
}) => {
    const {
        className: gridClassName,
        style: gridStyle = {},
        ...gridProps
    } = useGridify({
        componentName: 'InputCheckbox',
        ...props,
    })

    const [id] = useState(uuid())
    const error = errors?.[name]

    const checked = useWatch({
        control,
        name,
        defaultValue: defaultChecked,
    })

    return (
        <label
            className={[
                'field',
                gridClassName,
                className,
                error && 'invalid',
                validIfNoErrors && !error && rules && rules !== {} && 'valid',
                (disabled || readOnly) && 'disabled',
            ]
                ?.filter(e => !!e)
                .join(' ')}
            style={gridStyle}
            {...gridProps}
        >
            <div
                className={['checkbox input', inputClassName]
                    ?.filter(e => !!e)
                    .join(' ')}
            >
                <div className='icon flex align-items-center width-20 mr-6'>
                    <CheckboxIcon
                        color='var(--checkbox-color)'
                        className={`check-icon ${checked ? 'checked' : ''}`}
                    />
                </div>

                <input
                    id={id}
                    defaultChecked={defaultChecked}
                    type='checkbox'
                    className='hidden'
                    readOnly={readOnly}
                    disabled={disabled}
                    {...register(name, rules)}
                />

                <label className='body-14 medium' htmlFor={id}>
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

InputCheckbox.propTypes = {
    // input
    label: string,
    name: string.isRequired,
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

InputCheckbox.defaultProps = {
    className: '',
    inputClassName: '',
    defaultValue: '',
    onChange: () => null,
}

export default InputCheckbox

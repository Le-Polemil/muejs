import React, { useState } from 'react'
import { useWatch } from 'react-hook-form'
import { useGridify } from 'react-muejs'
import { v4 as uuid } from 'uuid'
import { any, bool, string } from 'prop-types'

import { Checkbox as CheckboxIcon } from '../../../svg/Checkbox'

const InputCheckbox = ({
    label,
    name,
    defaultChecked,
    disabled,
    readOnly = disabled,
    className,
    inputClassName,
    helper,
    rules,
    // form
    errors,
    control,
    register,
    //grid
    ...gridProps
}) => {
    const {
        className: gridClassName,
        style: gridStyle = {},
        ...props
    } = useGridify({
        componentName: 'InputCheckbox',
        ...gridProps,
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
            className={`field ${gridClassName ?? ''} ${className ?? ''}`.trim()}
            style={gridStyle}
            {...props}
        >
            <div
                className={[
                    'checkbox input',
                    error && 'invalid',
                    (disabled || readOnly) && 'disabled',
                    inputClassName,
                ]
                    ?.filter(e => !!e)
                    .join(' ')}
            >
                <div className='flex align-items-center width-20 b-2 b-secondary mr-6'>
                    <CheckboxIcon
                        className={`check-icon ${checked ? 'checked' : ''}`}
                    />
                </div>

                <input
                    id={id}
                    defaultChecked={defaultChecked}
                    name={name}
                    type='checkbox'
                    className='hidden'
                    readOnly={readOnly}
                    disabled={disabled}
                    ref={register(rules)}
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

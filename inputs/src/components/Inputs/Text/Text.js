import React, { useState, useEffect } from 'react'
import { useWatch } from 'react-hook-form'
import { useGridify } from 'react-muejs'
import { v4 as uuid } from 'uuid'
import { any, bool, func, number, string } from 'prop-types'

import { Eye } from '../../../svg/Eye'
import { EyeClosed } from '../../../svg/EyeClosed'

export const InputText = ({
    // input
    label,
    name,
    type: _type,
    defaultValue,
    placeholder,
    disabled,
    readOnly = disabled,
    className,
    inputClassName,
    // other
    validIfNoErrors,
    helper,
    maxCharacters,
    // form
    rules,
    formState: { errors },
    control,
    register,
    // grid props
    ...props
}) => {
    const {
        className: gridClassName,
        style: gridStyle = {},
        ...gridProps
    } = useGridify({
        componentName: 'InputText',
        ...props,
    })

    const [id] = useState(uuid())
    const [type, setType] = useState(_type)

    const error = errors?.[name]?.message
    const value = useWatch({
        control,
        name,
        defaultValue,
    })

    useEffect(() => {
        if (_type) {
            setType(_type)
        }
    }, [_type])

    return (
        <label
            className={[
                'field',
                gridClassName,
                className,
                !value && 'empty',
                error && 'invalid',
                validIfNoErrors && !error && rules && rules !== {} && 'valid',
                (disabled || readOnly) && 'disabled',
            ]
                .filter(e => e)
                .join(' ')}
            style={gridStyle}
            {...gridProps}
        >
            <label className='label bold mb-4' htmlFor={id}>
                {label || name}
            </label>
            <div className='relative flex align-items-center width-100%'>
                <input
                    className={[
                        'input flex-1',
                        _type === 'password' && 'with-icon',
                        inputClassName,
                    ]
                        .filter(e => e)
                        .join(' ')}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    readOnly={readOnly}
                    disabled={disabled}
                    {...register(name, rules)}
                />

                {_type === 'password' &&
                    (type === 'password' ? (
                        <EyeClosed
                            className='input-icon absolute pointer'
                            onClick={() => setType('text')}
                        />
                    ) : (
                        <Eye
                            className='input-icon absolute pointer'
                            onClick={() => setType('password')}
                        />
                    ))}
            </div>

            <div className='flex justify-space-between'>
                <div className='helper flex-1'>
                    {error ? error?.message ?? 'Erreur' : helper}
                </div>

                {maxCharacters && (
                    <div className='helper ml-40'>
                        {value?.length || 0}/{maxCharacters}
                    </div>
                )}
            </div>
        </label>
    )
}

InputText.propTypes = {
    // input
    label: string,
    name: string.isRequired,
    type: string.isRequired,
    defaultValue: string,
    placeholder: string,
    readOnly: bool,
    disabled: bool,
    className: string,
    inputClassName: string,
    onChange: func,
    onClick: func,
    onBlur: func,
    onFocus: func,
    // other
    helper: string,
    maxCharacters: number,
    // form
    rules: any,
    errors: any,
    control: any,
    register: any,
}

InputText.defaultProps = {
    inputClassName: '',
    className: '',
    type: 'text',
    defaultValue: '',
    control: () => null,
}

export default InputText

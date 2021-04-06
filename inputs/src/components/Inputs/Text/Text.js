import React, { useState, useEffect } from 'react'
import { useWatch } from 'react-hook-form'
import { useGridify } from 'react-muejs'
import { v4 as uuid } from 'uuid'
import { any, bool, func, number, string } from 'prop-types'

import { Eye } from '../../../svg/Eye'

const InputText = ({
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
    helper,
    maxCharacters,
    // form
    rules,
    errors,
    control,
    register,
    // grid props
    ...gridProps
}) => {
    const {
        className: gridClassName,
        style: gridStyle = {},
        ...props
    } = useGridify({
        componentName: 'InputText',
        ...gridProps,
    })

    const [id] = useState(uuid())
    const [type, setType] = useState(_type)

    const error = errors?.[name]
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
            className={`field ${gridClassName ?? ''} ${className ?? ''}`.trim()}
            style={gridStyle}
            {...props}
        >
            <label className='label bold mb-4' htmlFor={id}>
                {label || name}
            </label>
            <div className='relative flex align-items-center width-100%'>
                <input
                    className={[
                        'input flex-1',
                        _type === 'password' && 'with-icon',
                        !value && 'empty',
                        error && 'invalid',
                        (disabled || readOnly) && 'disabled',
                        inputClassName,
                    ]
                        .filter(e => e)
                        .join(' ')}
                    id={id}
                    ref={register(rules)}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    readOnly={readOnly}
                    disabled={disabled}
                />

                {_type === 'password' && (
                    <Eye
                        className='input-icon absolute pointer'
                        onClick={() =>
                            setType(type === 'password' ? 'text' : 'password')
                        }
                    />
                )}
            </div>

            <div className='flex justify-space-between'>
                <div
                    className={`helper flex-1 ${error ? 'invalid' : ''}`.trim()}
                >
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

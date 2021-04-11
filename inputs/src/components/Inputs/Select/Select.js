import React, { useRef, useState, useEffect } from 'react'
import { Controller } from 'react-hook-form'
import { useGridify, Spinner, Dropdown } from 'react-muejs'
import { v4 as uuid } from 'uuid'
import { any, bool, func, array, oneOfType, string } from 'prop-types'

import useArray from '../../../hooks/useArray'

import { ChevronDown } from '../../../svg/ChevronDown'
import { Check } from '../../../svg/Check'

import './index.scss'

// TODO export in another file
const SEPARATOR = 'separator'

function getOptionLabel(opt) {
    if (!opt) {
        return 'Non défini'
    }
    if (opt instanceof Object) {
        return opt?.label || opt?.text
    }
    return opt
}

export const Select = ({
    // input
    label,
    name,
    value,
    placeholder,
    disabled: _disabled,
    readOnly = _disabled,
    className,
    inputClassName,
    multiple,
    onChange,
    // other
    direction,
    options,
    loading,
    validIfNoErrors,
    haveRules,
    helper,
    // form
    formState: { errors },
    //grid
    ...props
}) => {
    const {
        className: gridClassName,
        style: gridStyle = {},
        ...gridProps
    } = useGridify({
        componentName: 'InputSelect',
        ...props,
    })

    const [id] = useState(uuid())
    const error = errors?.[name]

    const entries = (options instanceof Object && Object.entries(options)) || []

    const disabled = _disabled || !entries?.length

    if (options && !entries?.length) {
        console.warn('Wrong options type, should be an object')
    }

    const [selected, actions] = useArray(
        [value].flat()?.filter(e => !!e && options?.[e])
    )

    useEffect(() => {
        if (!loading) {
            actions.clear()
            actions.push([value].flat()?.filter(e => !!e && options?.[e]))
        }
    }, [loading, JSON.stringify(options)])

    useEffect(() => {
        if (!loading && entries?.length > 0) {
            const value = multiple
                ? selected?.filter(key => !!key && options?.[key])
                : selected[0]

            onChange(value)
        }
    }, [JSON.stringify(selected)])

    function handleClick(key, close) {
        try {
            if (readOnly || disabled) return null

            if (!multiple) {
                actions.clear()
            }

            if (key) {
                const foundIndex = selected.findIndex(i => `${i}` === `${key}`)
                if (foundIndex > -1) {
                    actions.removeIndex(foundIndex)
                } else {
                    actions.push(key)
                }

                if (!multiple) {
                    close()
                }
            }
        } catch (e) {
            console.error(e)
        }
    }

    const spinning = loading && !(entries?.length > 0)

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
                className={[
                    'select input overflow-y-auto overflow-x-hidden',
                    'with-icon',
                    inputClassName,
                ]
                    .filter(e => !!e)
                    .join(' ')}
                trigger={({ isOpen }) => (
                    <>
                        {spinning && (
                            <div className='flex justify-items-left width-100%'>
                                <Spinner size='input-size' />
                            </div>
                        )}
                        {!spinning &&
                            (placeholder &&
                            !(entries?.length > 0 && selected?.length > 0) ? (
                                <span className='placeholder overflow-ellipsis'>
                                    {placeholder}
                                </span>
                            ) : (
                                <span className='flex-1 flex align-items-center height-100% font-14'>
                                    {selected
                                        .map(
                                            (key, index) =>
                                                `${getOptionLabel(
                                                    options?.[key]
                                                )}${
                                                    index < selected.length - 1
                                                        ? ','
                                                        : ''
                                                } `
                                        )
                                        .join('')}
                                </span>
                            ))}

                        <ChevronDown
                            className={`input-icon absolute pointer ${
                                isOpen && 'active'
                            }`}
                        />
                    </>
                )}
            >
                {({ close }) =>
                    entries?.length > 0 &&
                    entries.map(([key, opt]) => {
                        let text
                        const isSelected =
                            selected.findIndex(i => `${i}` === `${key}`) > -1
                        let optProps = {}
                        if (opt instanceof Object) {
                            const { label: lbl, text: txt, ...rest } = opt || {}
                            text = lbl || txt
                            optProps = rest
                        } else {
                            text = opt
                        }

                        if (text === SEPARATOR) {
                            return (
                                <div
                                    key={`${key}#${SEPARATOR}`}
                                    className='separator'
                                />
                            )
                        }

                        return (
                            <button
                                key={key}
                                id={key}
                                type='button'
                                disabled={optProps?.disabled}
                                readOnly={
                                    optProps?.readOnly || optProps?.disabled
                                }
                                className={`option ${
                                    isSelected ? 'active' : ''
                                }`.trim()}
                                {...optProps}
                            >
                                <span
                                    className='flex align-items-center'
                                    onClick={() =>
                                        optProps?.readOnly || optProps?.disabled
                                            ? null
                                            : handleClick(key, close)
                                    }
                                >
                                    {text}

                                    {isSelected && (
                                        <Check
                                            className='ml-10'
                                            color='var(--secondary-color)'
                                        />
                                    )}
                                </span>
                            </button>
                        )
                    })
                }
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

Select.propTypes = {
    // input
    label: string,
    name: string.isRequired,
    placeholder: string,
    readOnly: bool,
    disabled: bool,
    className: string,
    inputClassName: string,
    multiple: bool,
    onChange: func,
    value: any,
    // other
    direction: string,
    loading: bool,
    helper: string,
    options: any,
    // form
    errors: any,
}

Select.defaultProps = {
    className: '',
    inputClassName: '',
    multiple: false,
    onChange: () => null,
}

export const InputSelect = ({
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
            rules={rules}
            defaultValue={
                Array.isArray(defaultValue)
                    ? defaultValue.join(',')
                    : defaultValue || ''
            }
            render={({ field: { onChange, value, name } }) => (
                <Select
                    {...otherProps}
                    value={(value && value?.split(',')) || undefined}
                    onChange={array =>
                        onChange(Array.isArray(array) ? array.join(',') : array)
                    }
                    name={name}
                    haveRules={rules && rules !== {}}
                />
            )}
        />
    )
}

InputSelect.propTypes = {
    // input
    name: string.isRequired,
    defaultValue: oneOfType([array, string]),
    // form
    rules: any,
    control: any,
    // transmitted
    label: string,
    placeholder: string,
    readOnly: bool,
    disabled: bool,
    className: string,
    inputClassName: string,
    multiple: bool,
    onChange: func,
    value: any,
    direction: string,
    loading: bool,
    helper: string,
    options: any,
}

InputSelect.defaultProps = {
    defaultValue: '',
}

export default InputSelect

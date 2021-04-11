import React, { useState, useEffect, useRef } from 'react'
import { Controller } from 'react-hook-form'
import { useGridify } from 'react-muejs'

import { v4 as uuid } from 'uuid'
import {
    func,
    object,
    string,
    bool,
    any,
    array,
    oneOfType,
    number,
} from 'prop-types'
import deburr from 'lodash.deburr'

import Suggestions from './Suggestions'

export function getRegExp(search) {
    if (!search) return /(.*)/

    return new RegExp('(' + deburr(search) + ')', 'gi')
}

export function isSomewhereInValue(toCompare, input) {
    return getRegExp(input).test(deburr(toCompare))
}

export function getSuggestionLabel(suggestion, mainField) {
    return (
        suggestion?.[mainField] ?? suggestion?.name ?? suggestion?.label ?? ''
    )
}

export const Autocomplete = ({
    // field
    label,
    name,
    value,
    placeholder,
    disabled,
    readOnly = disabled,
    className = '',
    inputClassName = '',
    onChange,
    // onChoose,
    // suggestions
    suggestions = [],
    renderSuggestion,
    loading,
    mainField,
    comparisonFunction,
    noneLabel,
    // others
    validIfNoErrors,
    haveRules,
    // form
    helper,
    formState: { errors },
    // grid
    ...props
}) => {
    const {
        className: gridClassName,
        style: gridStyle = {},
        ...gridProps
    } = useGridify({
        componentName: 'InputAutocomplete',
        ...props,
    })

    const [id] = useState(uuid())
    const [activeSuggestion, setActiveSuggestion] = useState(0)
    const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions)
    const [showSuggestions, setShowSuggestions] = useState(false)

    const ref = useRef(null)

    const error = errors?.[name]

    useEffect(() => {
        if (suggestions && suggestions.length > 0) {
            setActiveSuggestion(0)

            let tmp = []

            suggestions?.forEach(suggestion => {
                let toCompare = suggestion || ''
                if (suggestion instanceof Object) {
                    toCompare = getSuggestionLabel(suggestion, mainField)
                }

                if (
                    (value
                        ? toCompare && comparisonFunction(toCompare, value)
                        : true) &&
                    tmp.findIndex(
                        sugg =>
                            getSuggestionLabel(sugg, mainField) === toCompare
                    ) === -1
                ) {
                    tmp.push(suggestion)
                }
            })

            setFilteredSuggestions(tmp.slice(0, 20))
        } else {
            setFilteredSuggestions([])
        }
    }, [JSON.stringify(suggestions), JSON.stringify(value)])

    function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            setShowSuggestions(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const choose = v => {
        if (v instanceof Object) {
            let newValue
            if (value instanceof Object) {
                newValue = { ...value, ...v }
            } else {
                newValue = v
            }

            onChange(newValue)
            // onChoose(newValue)
        } else {
            onChange(v)
            // onChoose(v)
        }
        setShowSuggestions(false)
    }

    const handleKeyDown = e => {
        // Enter
        if (e.keyCode === 13) {
            choose(filteredSuggestions[activeSuggestion])
        }
        // up
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) return null
            setActiveSuggestion(activeSuggestion - 1)
        }
        // down
        else if (e.keyCode === 40) {
            if (activeSuggestion === filteredSuggestions.length - 1) return null
            setActiveSuggestion(activeSuggestion + 1)
        }
    }

    return (
        <label
            className={[
                'field',
                gridClassName,
                className,
                !value?.length && 'empty',
                error && 'invalid',
                (disabled || readOnly) && 'disabled',
            ]
                .filter(e => !!e)
                .join(' ')}
            style={gridStyle}
            ref={ref}
            {...gridProps}
        >
            <label className='label bold mb-4' htmlFor={id}>
                {label || name}
            </label>

            <div className='dropdown-container'>
                <input
                    className={[
                        'input overflow-y-auto overflow-x-hidden width-100%',
                        'autocomplete',
                        inputClassName,
                    ]
                        .filter(e => !!e)
                        .join(' ')}
                    type='text'
                    value={value || ''}
                    name={name}
                    id={id}
                    onClick={() => {
                        setShowSuggestions(true)
                    }}
                    onChange={e => {
                        setShowSuggestions(true)
                        onChange(e?.currentTarget?.value)
                    }}
                    onKeyDown={handleKeyDown}
                    readOnly={readOnly}
                    disabled={disabled}
                    placeholder={placeholder}
                    autoComplete={id}
                />

                <Suggestions
                    filteredSuggestions={filteredSuggestions}
                    activeSuggestion={activeSuggestion}
                    showSuggestions={showSuggestions}
                    renderSuggestion={renderSuggestion}
                    choose={choose}
                    noneLabel={noneLabel}
                    mainField={mainField}
                    loading={loading}
                />
            </div>

            <div className='flex justify-space-between'>
                <div
                    className={`helper flex-1 ${error ? 'invalid' : ''}`.trim()}
                >
                    {(error ? error?.message ?? 'Erreur' : helper) ?? ''}
                </div>
            </div>
        </label>
    )
}

Autocomplete.propTypes = {
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
    comparisonFunction: func,
    noneLabel: string,
    // other
    loading: bool,
    helper: string,
    options: any,
    // form
    errors: any,
}

Autocomplete.defaultProps = {
    className: '',
    comparisonFunction: isSomewhereInValue,
    inputClassName: '',
    noneLabel: 'Aucune suggestion possible',
    suggestions: [],
}

export const InputAutocomplete = ({
    control,
    name,
    rules,
    defaultValue,
    mainField,
    onChange,
    suggestions,
    ...otherProps
}) => {
    const defaultFound =
        suggestions?.length > 0 &&
        suggestions?.find(
            sugg =>
                sugg?.id === defaultValue?.id ||
                getSuggestionLabel(sugg, mainField) === defaultValue
        )

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={
                defaultFound instanceof Object ? defaultFound?.id : defaultValue
            }
            render={({ field: { onChange, value, name } = {} }) => {
                const found =
                    suggestions?.length > 0 &&
                    suggestions?.find(sugg => sugg?.id === value)

                return (
                    <Autocomplete
                        {...otherProps}
                        value={
                            found instanceof Object
                                ? getSuggestionLabel(found, mainField)
                                : value
                        }
                        suggestions={suggestions}
                        onChange={valueOrObj => {
                            const newFound = suggestions?.find(
                                sugg =>
                                    sugg?.id === valueOrObj?.id ||
                                    getSuggestionLabel(sugg, mainField) ===
                                        valueOrObj
                            )

                            if (newFound instanceof Object) {
                                return onChange(
                                    newFound?.id ??
                                        getSuggestionLabel(
                                            newFound,
                                            mainField
                                        ) ??
                                        ''
                                )
                            }

                            onChange(valueOrObj)
                        }}
                        mainField={mainField}
                        name={name}
                        haveRules={rules && rules !== {}}
                    />
                )
            }}
        />
    )
}

InputAutocomplete.propTypes = {
    // input
    name: string.isRequired,
    defaultValue: oneOfType([number, object, string]),
    onChange: func,
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
    value: any,
    loading: bool,
    helper: string,
    suggestions: array,
}

InputAutocomplete.defaultProps = {
    defaultValue: '',
    onChange: () => null,
}

export default InputAutocomplete

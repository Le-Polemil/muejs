import React from 'react'
import { Spinner } from 'react-muejs'

export default function Suggestions({
    showSuggestions,
    activeSuggestion,
    filteredSuggestions,
    choose,
    renderSuggestion,
    noneLabel,
    mainField,
    loading,
}) {
    if (!showSuggestions) return null

    if (!(filteredSuggestions && filteredSuggestions.length > 0)) {
        return (
            <div className='suggestions dropdown-content displayed'>
                <div className='suggestion'>
                    <span className='flex align-items-center'>
                        {loading ? (
                            <Spinner
                                size='width-24 height-24'
                                justify='left'
                                className='mt-0'
                            />
                        ) : (
                            noneLabel
                        )}
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className='suggestions dropdown-content displayed overflow-y-auto'>
            {filteredSuggestions.map((suggestion, index) => {
                let suggestionLabel = suggestion
                if (suggestion instanceof Object) {
                    suggestionLabel =
                        suggestion?.[mainField] ??
                        suggestion?.label ??
                        suggestion?.name ??
                        ''
                }
                if (!suggestionLabel) return null

                return (
                    <button
                        key={suggestion.id}
                        id={suggestion.id}
                        type='button'
                        className={`suggestion ${
                            index === activeSuggestion ? 'active' : ''
                        }`.trim()}
                        // {...optProps}
                    >
                        <span
                            className='flex align-items-center'
                            onClick={e => {
                                e.preventDefault()
                                e.stopPropagation()
                                choose(suggestion)
                            }}
                        >
                            {renderSuggestion
                                ? renderSuggestion(suggestion)
                                : suggestionLabel}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}

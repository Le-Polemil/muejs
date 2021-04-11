import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Breadcrumb, ErrorBoundary } from 'react-muejs'

import { STEPS } from './static'

function UncatchedInputs() {
    const history = useHistory()
    const { step } = useParams()

    const entries = Object.entries(STEPS)

    const currentId = entries?.find(([id, { key }]) =>
        [id, key]?.includes(step)
    )?.[0]

    const Tag = STEPS?.[currentId]?.Tag

    return (
        <>
            {Tag && <Tag />}
            <Breadcrumb
                url='inputs'
                step={step}
                steps={STEPS}
                history={history}
            />
        </>
    )
}

export default function Inputs(props) {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedInputs {...props} />
        </ErrorBoundary>
    )
}

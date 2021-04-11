import React from 'react'
import { object, string } from 'prop-types'

import { ErrorBoundary } from '../ErrorBoundary'
import { Element } from '../GridElement'
import { Link } from '../Link'

import './index.scss'

function UncatchedCard({ backgroundColor, to, style, ...props }) {
    const Tag = to ? Link : Element
    return (
        <Tag
            {...props}
            to={to}
            componentName='Card Link'
            style={{ ...style, '--card-bg': backgroundColor }}
        />
    )
}

export function Card(props) {
    return (
        <ErrorBoundary
            className='card'
            fallback='Houston, on a un problème'
            showDetails
        >
            <UncatchedCard {...props} />
        </ErrorBoundary>
    )
}

Card.propTypes = {
    backgroundColor: string,
    to: string,
    style: object,
}

export default Card

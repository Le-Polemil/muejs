import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { string, object, number, oneOfType } from 'prop-types'

import './index.scss'

export const Breadcrumb = ({ url, steps, noLinkAfterId }) => {
    const { step } = useParams()

    const entries = steps instanceof Object && Object.entries(steps)

    if (!entries?.length) return null

    const currentId = entries?.find(([id, { key }]) =>
        [id, key]?.includes(step)
    )?.[0]

    const lastStepId = entries?.[entries?.length - 1]?.[0]

    const percentPerStep = 100 / entries.length
    let percent = percentPerStep / 2

    if (currentId === lastStepId) {
        percent = 100
    } else {
        percent += percentPerStep * (currentId - 1)
    }

    let Tag = url ? Link : 'div'

    return (
        <>
            <div className='height-100' />
            <div className='breadcrumb absolute bottom-0 left-0 right-0 bg-pale-grey ph-4vw pv-16'>
                <div
                    className='border flex justify-space-between sm-:flex-wrap'
                    style={{ '--percent': percent }}
                >
                    {entries
                        .map(([stepId, { breadcrumb, key } = {}], index) => {
                            if (!breadcrumb) return null

                            const placement = Math.sign(stepId - currentId)

                            if (
                                parseInt(stepId, 10) >
                                parseInt(noLinkAfterId, 10)
                            ) {
                                Tag = 'div'
                            }

                            return (
                                <Tag
                                    key={stepId}
                                    to={
                                        Tag === 'div'
                                            ? undefined
                                            : `/${url}/${key || stepId}`
                                    }
                                    className='pt-16'
                                >
                                    <span
                                        className={`body-14 medium ${
                                            placement <= 0
                                                ? 'text-primary'
                                                : 'text-black'
                                        }`}
                                    >
                                        {stepId}
                                    </span>
                                    <span
                                        className={`body-14 medium ${
                                            placement === 0
                                                ? 'text-primary'
                                                : 'text-black'
                                        }`}
                                    >
                                        {' '}
                                        - {breadcrumb}
                                    </span>
                                </Tag>
                            )
                        })
                        ?.filter(e => !!e)}
                </div>
            </div>
        </>
    )
}

Breadcrumb.propTypes = {
    className: string,
    steps: object.isRequired,
    url: string,
    noLinkAfterId: oneOfType([string, number]),
}

export default Breadcrumb

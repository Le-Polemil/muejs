import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Grid, Element, ErrorBoundary } from 'react-muejs'
import { InputCheckbox } from 'inputs-muejs'

import { requireAtLeastX, watchArray } from '../../../utils/validation'

import Navbar from '../../../components/Navbar'

function UncatchedTestsInputCheckbox() {
    const form = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'firstError',
    })
    const onSubmit = values => console.log({ values })

    const { handleSubmit, watch, errors } = form

    return (
        <>
            <Navbar />

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    className='md-:mh-6vw lg+:mh-10vw pv-2vw'
                    columnsTemplate='repeat(auto-fit, minmax(200px, 1fr))'
                    gap='24px'
                >
                    <Element type='h1' col='1' fullWidth>
                        Input Checkbox
                    </Element>

                    <InputCheckbox
                        {...form}
                        label='Pas coché'
                        name='not-checked'
                    />
                    <InputCheckbox
                        {...form}
                        label='Coché'
                        name='checked'
                        defaultChecked
                    />

                    <InputCheckbox
                        {...form}
                        label='Requis'
                        name='required'
                        rules={{ required: 'Requis' }}
                    />

                    <InputCheckbox
                        {...form}
                        className='flex-1'
                        label='1ere option'
                        name='1st-opt'
                        rules={{
                            validate: () =>
                                requireAtLeastX(
                                    watchArray(watch, [
                                        '1st-opt',
                                        '2d-opt',
                                        '3d-opt',
                                    ]),
                                    1,
                                    ''
                                ),
                        }}
                    />
                    <InputCheckbox
                        {...form}
                        className='flex-1'
                        label='2e option'
                        name='2d-opt'
                        rules={{
                            validate: () =>
                                requireAtLeastX(
                                    watchArray(watch, [
                                        '1st-opt',
                                        '2d-opt',
                                        '3d-opt',
                                    ]),
                                    1,
                                    ''
                                ),
                        }}
                    />

                    <InputCheckbox
                        {...form}
                        className='flex-1'
                        label='3e option'
                        name='3d-opt'
                        rules={{
                            validate: () =>
                                requireAtLeastX(
                                    watchArray(watch, [
                                        '1st-opt',
                                        '2d-opt',
                                        '3d-opt',
                                    ]),
                                    1,
                                    ''
                                ),
                        }}
                    />

                    {errors?.['1st-opt'] && (
                        <div
                            className='helper text-error '
                            style={{
                                gridColumn: '1/ span 3',
                                marginTop: 'calc(-16px - 2vw)',
                            }}
                        >
                            Veuillez choisir au moins l'une des 3 options
                        </div>
                    )}

                    {/* <InputSelect {...form} label='Rempli' name='filled' /> */}

                    <Button col='1' fullWidth type='submit'>
                        Submit
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default function TestsInputCheckbox(props) {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedTestsInputCheckbox {...props} />
        </ErrorBoundary>
    )
}

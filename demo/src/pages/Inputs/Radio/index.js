import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Grid, Element, ErrorBoundary } from 'react-muejs'
import { InputRadio } from 'inputs-muejs'

import Navbar from '../../../components/Navbar'

function UncatchedTestsInputRadio() {
    const { handleSubmit, watch, ...form } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'firstError',
    })
    const onSubmit = values => console.log({ values })

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
                        Input Radio
                    </Element>
                    <InputRadio
                        {...form}
                        label='Pas coché'
                        name='checked'
                        value='no'
                    />
                    <InputRadio
                        {...form}
                        label='Coché'
                        name='checked'
                        value='yes'
                        defaultChecked
                    />

                    <InputRadio
                        {...form}
                        label='Désactivé'
                        name='disabled'
                        value='1'
                        disabled
                    />

                    <InputRadio
                        {...form}
                        label='Requis 1'
                        name='required'
                        value='1st-required'
                        rules={{ required: 'Requis' }}
                    />

                    <InputRadio
                        {...form}
                        label='Requis 2'
                        name='required'
                        value='2d-required'
                        rules={{ required: 'Requis' }}
                    />

                    {/* <InputSelect {...form} label='Rempli' name='filled' /> */}

                    <Button col='1' fullWidth type='submit'>
                        Submit
                    </Button>
                </Grid>
            </form>
        </>
    )
}
export default function TestsInputRadio(props) {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedTestsInputRadio {...props} />
        </ErrorBoundary>
    )
}

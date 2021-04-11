import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Element, ErrorBoundary, Grid } from 'react-muejs'
import { InputDate } from 'inputs-muejs'

import Navbar from '../../../components/Navbar'

function UncatchedTestsInputDate() {
    const { handleSubmit, watch, errors, ...rest } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'firstError',
    })
    const onSubmit = values => console.log({ values })

    const form = { errors, ...rest }

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
                        Input Date
                    </Element>

                    <InputDate {...form} label='Vide' name='empty' />

                    <InputDate
                        {...form}
                        label='Rempli'
                        name='filled'
                        defaultValue='12/05/2012'
                        contentClassName='md+:right-unset sm-:left-unset'
                    />

                    <InputDate
                        {...form}
                        label='Wrongly filled'
                        name='wrongly-filled'
                        defaultValue='bonjour'
                        contentClassName='sm-:right-unset md:left-unset lg+:right-unset'
                    />

                    <InputDate
                        {...form}
                        label='Placeholder'
                        name='placeholder'
                        placeholder='Placeholder'
                        contentClassName='md+:right-unset sm-:left-unset'
                    />
                    <InputDate
                        {...form}
                        label='Label'
                        name='label'
                        helper='helper text'
                    />
                    <InputDate
                        {...form}
                        label='Requis'
                        name='required'
                        rules={{ required: 'Requis' }}
                    />
                    <InputDate
                        {...form}
                        label='Désactivé'
                        name='disabled'
                        disabled
                    />
                    <InputDate
                        {...form}
                        label='Non-modifiable'
                        name='read-only'
                        readOnly
                        defaultValue='09/03/1996'
                    />

                    <Button col='1' fullWidth type='submit'>
                        Submit
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default function TestsInputDate(props) {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedTestsInputDate {...props} />
        </ErrorBoundary>
    )
}

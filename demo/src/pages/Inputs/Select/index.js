import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Element, ErrorBoundary, Grid } from 'react-muejs'
import { InputSelect } from 'inputs-muejs'

import Navbar from '../../../components/Navbar'

function UncatchedTestsInputSelect() {
    const { handleSubmit, watch, errors, ...rest } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'firstError',
    })
    const onSubmit = values => console.log({ values })

    const form = { errors, ...rest }

    const OPTIONS = {
        opt1: 'Choix 1',
        opt2: 'Choix 2',
        opt3: { label: 'Choix 3', disabled: true },
        opt4: { label: 'Choix 4' },
        opt5: { label: 'Choix 5' },
    }

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
                        Input Select
                    </Element>

                    <InputSelect
                        {...form}
                        label='Vide'
                        name='empty'
                        options={OPTIONS}
                    />

                    <InputSelect
                        {...form}
                        label='Rempli'
                        name='filled'
                        defaultValue={['opt2']}
                        options={OPTIONS}
                    />

                    <InputSelect
                        {...form}
                        label='Placeholder'
                        name='placeholder'
                        placeholder='Placeholder'
                        options={OPTIONS}
                    />

                    <InputSelect
                        {...form}
                        label='Multiple'
                        name='multiple'
                        multiple
                        options={OPTIONS}
                    />

                    <InputSelect
                        {...form}
                        label='Multiple pré-rempli'
                        name='filled-multiple'
                        multiple
                        defaultValue={['opt1', 'opt2']}
                        options={OPTIONS}
                    />

                    <InputSelect
                        {...form}
                        label='Sans options'
                        name='no-options'
                    />

                    <InputSelect
                        {...form}
                        label='Requis'
                        name='required'
                        options={OPTIONS}
                        rules={{ required: 'Requis' }}
                    />

                    <InputSelect
                        {...form}
                        label='2 minimum'
                        name='two-required'
                        options={OPTIONS}
                        multiple
                        rules={{
                            validate: v => {
                                const value = (v && v?.split(',')) || undefined
                                if (
                                    !value ||
                                    (Array.isArray(value) &&
                                        !(value?.length >= 2))
                                )
                                    return 'Choisissez au moins 2 réponses'
                            },
                        }}
                    />

                    <InputSelect
                        {...form}
                        label='1 ou 2 réponses'
                        name='1-or-2'
                        options={OPTIONS}
                        multiple
                        rules={{
                            validate: v => {
                                const value = (v && v?.split(',')) || undefined
                                if (
                                    !value ||
                                    (Array.isArray(value) && !value?.length)
                                )
                                    return 'Choisissez en au moins 1'
                                if (Array.isArray(value) && value?.length > 2)
                                    return 'Choisissez en 2 max'
                            },
                        }}
                    />

                    <InputSelect
                        {...form}
                        label="Message d'aide"
                        name='helper'
                        options={OPTIONS}
                        helper="Ceci est un message d'aide"
                    />

                    <InputSelect
                        {...form}
                        label='Désactivé'
                        name='disabled'
                        options={OPTIONS}
                        disabled
                    />

                    <InputSelect
                        {...form}
                        label='Désactivé avec placeholder'
                        name='disabled-with-placeholder'
                        options={OPTIONS}
                        placeholder='Placeholder'
                        disabled
                    />

                    <InputSelect
                        {...form}
                        label='Non-modifiable'
                        name='read-only'
                        defaultValue={['opt1']}
                        options={OPTIONS}
                        readOnly
                    />

                    <InputSelect
                        {...form}
                        label='Chargement des options'
                        name='loading'
                        loading
                    />

                    <Button col='1' fullWidth type='submit'>
                        Submit
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default function TestsInputSelect(props) {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedTestsInputSelect {...props} />
        </ErrorBoundary>
    )
}

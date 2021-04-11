import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Element, ErrorBoundary, Grid } from 'react-muejs'
import { InputAutocomplete } from 'inputs-muejs'

import Navbar from '../../../components/Navbar'

function UncatchedTestsInputAutocomplete() {
    const { handleSubmit, watch, errors, ...rest } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'firstError',
    })
    const onSubmit = values => console.log({ values })

    const form = { errors, ...rest }

    const SUGGESTIONS = [
        { id: 1, brand: 'google', name: 'Google Glasses' },
        { id: 2, brand: 'google', name: 'Smart Glasses' },
        { id: 3, brand: 'apple', name: 'iGlasses' },
        { id: 4, brand: 'facebook', name: 'Telescope' },
        { id: 5, brand: 'samsung', name: 'Samsung Eyes' },
        { id: 6, brand: 'yahoo', name: 'Smart Lunettes' },
    ]

    const choosed = watch('choosed', 1)
    const helper = watch('helper')
    const choosedBrand = SUGGESTIONS?.find(
        sugg => sugg?.id === (choosed?.id ?? choosed)
    )?.brand
    const helperBrand = SUGGESTIONS?.find(
        sugg => sugg?.id === (helper?.id ?? helper)
    )?.brand

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

                    <InputAutocomplete
                        {...form}
                        label='Vide'
                        name='empty'
                        suggestions={SUGGESTIONS}
                    />
                    <InputAutocomplete
                        {...form}
                        label='Rempli'
                        name='filled'
                        defaultValue='Google Glasses'
                        suggestions={SUGGESTIONS}
                    />
                    <InputAutocomplete
                        {...form}
                        label='Choisi'
                        name='choosed'
                        defaultValue={1}
                        suggestions={SUGGESTIONS}
                        helper={choosed && `Marque choisie : ${choosedBrand}`}
                    />
                    <InputAutocomplete
                        {...form}
                        label='Placeholder'
                        name='placeholder'
                        placeholder='Placeholder'
                        suggestions={SUGGESTIONS}
                    />
                    <InputAutocomplete
                        {...form}
                        label='Marque dans le helper'
                        name='helper'
                        suggestions={SUGGESTIONS}
                        helper={helper && `Marque choisie : ${helperBrand}`}
                    />
                    <InputAutocomplete
                        {...form}
                        label='Par marque'
                        name='use-brand'
                        mainField='brand'
                        suggestions={SUGGESTIONS}
                    />
                    <InputAutocomplete
                        {...form}
                        label='Sans suggestions'
                        name='no-suggestions'
                    />
                    <InputAutocomplete
                        {...form}
                        label='Requis'
                        name='required'
                        suggestions={SUGGESTIONS}
                        rules={{ required: 'Requis' }}
                    />

                    <InputAutocomplete
                        {...form}
                        label='2 minimum'
                        name='two-required'
                        suggestions={SUGGESTIONS}
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
                    <InputAutocomplete
                        {...form}
                        label='1 ou 2 réponses'
                        name='1-or-2'
                        suggestions={SUGGESTIONS}
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
                    <InputAutocomplete
                        {...form}
                        label="Message d'aide"
                        name='helper'
                        suggestions={SUGGESTIONS}
                        helper="Ceci est un message d'aide"
                    />
                    <InputAutocomplete
                        {...form}
                        label='Désactivé'
                        name='disabled'
                        suggestions={SUGGESTIONS}
                        disabled
                    />
                    <InputAutocomplete
                        {...form}
                        label='Non-modifiable'
                        name='read-only'
                        defaultValue={['opt1']}
                        suggestions={SUGGESTIONS}
                        readOnly
                    />
                    <InputAutocomplete {...form} label='Rempli' name='filled' />

                    <Button col='1' fullWidth type='submit'>
                        Submit
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default function TestsInputAutocomplete(props) {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedTestsInputAutocomplete {...props} />
        </ErrorBoundary>
    )
}

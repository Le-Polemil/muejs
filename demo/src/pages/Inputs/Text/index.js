import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Element, ErrorBoundary, Grid } from 'react-muejs'
import { InputText } from 'inputs-muejs'

import Navbar from '../../../components/Navbar'

function UncatchedTestsInputText() {
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
                        Input Text
                    </Element>

                    <InputText {...form} label='Vide' name='empty' />

                    <InputText
                        {...form}
                        label='Rempli'
                        name='filled'
                        defaultValue='Valeur'
                    />

                    <InputText
                        {...form}
                        label='Placeholder'
                        name='placeholder'
                        placeholder='Placeholder'
                    />

                    <InputText
                        {...form}
                        label='Label'
                        name='label'
                        helper='helper text'
                    />

                    <InputText
                        {...form}
                        label='Compteur + longueur max'
                        name='counter'
                        helper='Ne doit pas dépasser 20 caractères'
                        maxCharacters={20}
                        rules={{
                            maxLength: { value: 20, message: 'Trop long' },
                        }}
                    />

                    <InputText
                        {...form}
                        label='Requis'
                        name='required'
                        rules={{ required: 'Requis' }}
                    />

                    <InputText
                        {...form}
                        label='Valid'
                        name='valid'
                        rules={{ validate: v => true }}
                        validIfNoErrors
                    />

                    <InputText
                        {...form}
                        label='Info'
                        name='info'
                        className='info'
                    />

                    <InputText
                        {...form}
                        label='Désactivé'
                        name='disabled'
                        disabled
                    />

                    <InputText
                        {...form}
                        label='Non-modifiable'
                        name='read-only'
                        defaultValue='Non-modifiable'
                        readOnly
                    />

                    <InputText
                        {...form}
                        label='Mot de passe'
                        name='password'
                        type='password'
                        defaultValue='password'
                    />

                    <Element fullWidth />

                    <Button col='1' fullWidth type='submit'>
                        Submit
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default function TestsInputText(props) {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedTestsInputText {...props} />
        </ErrorBoundary>
    )
}

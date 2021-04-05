import React, { useState, useEffect } from 'react'
import { Grid, Element, ErrorBoundary, Button, Icon } from 'react-muejs'

import Navbar from '../../components/Navbar'

function UncatchedHome() {
    const [error, setError] = useState(null)

    useEffect(() => {
        if (error) {
            throw new Error(error)
        }
    }, [error])

    return (
        <Grid
            className='height-100vh'
            columnsTemplate='10% repeat(3, 1fr) 10%'
            rowsTemplate='auto repeat(4, 1fr)'
            colGap='24px'
        >
            <Navbar />
        </Grid>
    )
    return (
        <Grid
            className='height-100vh'
            columnsTemplate='10% repeat(3, 1fr) 10%'
            rowsTemplate='auto repeat(4, 1fr)'
            colGap='24px'
        >
            <Navbar />

            <Element
                type='h1'
                className='text-primary align-self-bottom'
                col='2'
                width='2'
            >
                Bonjour,
            </Element>
            <Element
                type='h2'
                className='text-secondary weight-700 align-self-top'
                col='2'
                row='3'
                width='2'
            >
                Cobelt
                <Icon
                    className='ml-5 text-info v-align-middle'
                    icon='check_circle'
                    type='outlined'
                    size='xs'
                    title='Vérifié'
                />
            </Element>
            <Button
                aspect='filled'
                color='success'
                direction='left'
                className='width-100%'
                col='2'
                row='4'
                onClick={() => window.alert('Success!')}
            >
                Success !<Icon size='lg' className='ml-5' icon='done' />
            </Button>
            <Button
                aspect='border'
                color='warning'
                direction='bottom'
                className='width-100%'
                col='3'
                row='4'
                onClick={() => window.alert('Warning')}
            >
                Warning !
                <Icon size='lg' className='ml-5' icon='warning' />
            </Button>
            <Button
                aspect='filled'
                color='error'
                direction='right'
                className='width-100%'
                col='4'
                row='4'
                onClick={() =>
                    setError("Vous n'auriez pas dû cliquer sur ce bouton")
                }
            >
                ERROR !
                <Icon size='lg' className='ml-5' icon='error' />
            </Button>
        </Grid>
    )
}

export default function Home(props) {
    return (
        <ErrorBoundary
            fallback='Houston, on a un problème'
            showDetails
            className='text-dark'
        >
            <UncatchedHome {...props} />
        </ErrorBoundary>
    )
}

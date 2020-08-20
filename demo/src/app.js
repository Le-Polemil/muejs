import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Grid, Element, ErrorBoundary } from 'muejs'
import Button from 'muejs/src/components/Button/Button'

export default function App() {
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
            <Element className='bg-primary ph-10% pv-20' col='1' width='-1'>
                Bonjour les loulous
            </Element>
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
                <i className='material-icons-round'>done</i>Success !
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
                <i className='material-icons-round'>warning</i>Warning !
            </Button>
            <Button
                aspect='filled'
                color='error'
                direction='right'
                className='width-100%'
                col='4'
                row='4'
                onClick={() => setError("Vous n'auriez pas dû cliquer sur ce bouton")}
            >
                <i className='material-icons-round'>error</i>ERROR
            </Button>
        </Grid>
    )
}

ReactDOM.render(
    <ErrorBoundary fallback="Oops y'a eu un soucis">
        <App />
    </ErrorBoundary>,
    document.getElementById('root')
)

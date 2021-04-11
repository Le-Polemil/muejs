import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Card, ErrorBoundary, Grid } from 'react-muejs'

import Navbar from '../../components/Navbar'

function UncatchedHome() {
    const [error, setError] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if (error) {
            throw new Error(error)
        }
    }, [error])

    return (
        <>
            <Navbar />

            <Grid
                className='md-:mh-6vw lg+:mh-10vw pv-2vw'
                columnsTemplate='repeat(auto-fit, minmax(200px, 1fr))'
                rowsTemplate='repeat(3, minmax(200px, 1fr))'
                gap='24px'
            >
                <Card
                    to='/buttons'
                    align='items-center'
                    justify='center'
                    history={history}
                >
                    <h2>Buttons</h2>
                </Card>
                <Card
                    to='/modals'
                    align='items-center'
                    justify='center'
                    history={history}
                >
                    <h2>Modals</h2>
                </Card>
                <Card
                    to='/inputs'
                    align='items-center'
                    justify='center'
                    history={history}
                >
                    <h2>Inputs</h2>
                </Card>
            </Grid>
        </>
    )
}

export default function Home(props) {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedHome {...props} />
        </ErrorBoundary>
    )
}

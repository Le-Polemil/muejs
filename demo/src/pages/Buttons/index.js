import React from 'react'
import { Grid, Element, ErrorBoundary, Button } from 'react-muejs'

import Navbar from '../../components/Navbar'

function UncatchedHome() {
    return (
        <>
            <Navbar />
            <Grid
                className='md-:mh-6vw lg+:mh-10vw pv-2vw'
                columnsTemplate='repeat(auto-fit, minmax(200px, 1fr))'
                gap='24px'
            >
                <Element type='h1' col='1' fullWidth>
                    Filled
                </Element>

                <Button text='Bottom' />
                <Button direction='top' text='Top' />
                <Button direction='left' text='Left' />
                <Button direction='right' text='Right' />

                <Button color='light-primary' text='Light Primary' />
                <Button color='primary' text='Primary' />
                <Button color='dark-primary' text='Dark Primary' />
                <Element />

                <Button color='light-secondary' text='Light Secondary' />
                <Button color='secondary' text='Secondary' />
                <Button color='dark-secondary' text='Dark Secondary' />
                <Element />

                <Button color='success' icon='done' text='Success' />
                <Button color='warning' icon='warning' text='Warning' />
                <Button color='error' icon='error' text='Error' />
                <Button color='info' icon='info' text='Info' />

                <Button color='black' text='Black' />
                <Button color='dark' text='Dark' />
                <Button color='grey' text='Grey' />
                <Button color='light' text='Light' />

                <Element type='h1' col='1' fullWidth>
                    Border
                </Element>

                <Button aspect='border' text='Bottom' />
                <Button aspect='border' direction='top' text='Top' />
                <Button aspect='border' direction='left' text='Left' />
                <Button aspect='border' direction='right' text='Right' />

                <Button
                    aspect='border'
                    color='light-primary'
                    text='Light Primary'
                />
                <Button aspect='border' color='primary' text='Primary' />
                <Button
                    aspect='border'
                    color='dark-primary'
                    text='Dark Primary'
                />
                <Element />

                <Button
                    aspect='border'
                    color='light-secondary'
                    text='Light Secondary'
                />
                <Button aspect='border' color='secondary' text='Secondary' />
                <Button
                    aspect='border'
                    color='dark-secondary'
                    text='Dark Secondary'
                />
                <Element />

                <Button
                    aspect='border'
                    color='success'
                    icon='done'
                    text='Success'
                />
                <Button
                    aspect='border'
                    color='warning'
                    icon='warning'
                    text='Warning'
                />
                <Button
                    aspect='border'
                    color='error'
                    icon='error'
                    text='Error'
                />
                <Button aspect='border' color='info' icon='info' text='Info' />

                <Button aspect='border' color='black' text='Black' />
                <Button aspect='border' color='dark' text='Dark' />
                <Button aspect='border' color='grey' text='Grey' />
                <Button aspect='border' color='light' text='Light' />

                <Element type='h1' col='1' fullWidth>
                    Text
                </Element>

                <Button
                    aspect='text'
                    color='light-primary'
                    text='Light Primary'
                />
                <Button aspect='text' color='primary' text='Primary' />
                <Button
                    aspect='text'
                    color='dark-primary'
                    text='Dark Primary'
                />
                <Element />

                <Button
                    aspect='text'
                    color='light-secondary'
                    text='Light Secondary'
                />
                <Button aspect='text' color='secondary' text='Secondary' />
                <Button
                    aspect='text'
                    color='dark-secondary'
                    text='Dark Secondary'
                />
                <Element />

                <Button
                    aspect='text'
                    color='success'
                    icon='done'
                    text='Success'
                />
                <Button
                    aspect='text'
                    color='warning'
                    icon='warning'
                    text='Warning'
                />
                <Button aspect='text' color='error' icon='error' text='Error' />
                <Button aspect='text' color='info' icon='info' text='Info' />

                <Button aspect='text' color='black' text='Black' />
                <Button aspect='text' color='dark' text='Dark' />
                <Button aspect='text' color='grey' text='Grey' />
                <Button aspect='text' color='light' text='Light' />

                {/* <Button disabled text='Disabled' /> */}
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

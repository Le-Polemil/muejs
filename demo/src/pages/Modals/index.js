import React, { useState } from 'react'

import { Button, ErrorBoundary, Element, Flex, Grid, Modal } from 'react-muejs'

import Navbar from '../../components/Navbar'

function UncatchedTestsModals() {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)

    return (
        <>
            <Navbar />
            <Grid
                className='md-:mh-6vw lg+:mh-10vw pv-2vw'
                columnsTemplate='repeat(auto-fit, minmax(200px, 1fr))'
                gap='24px'
            >
                <Element type='h1' col='1' fullWidth>
                    Modals
                </Element>

                <Button onClick={() => setOpen1(true)}>Bottom</Button>
                {open1 && (
                    <Modal onClose={setOpen1}>
                        Ceci est une pop-up de base
                    </Modal>
                )}

                <Button onClick={() => setOpen2(true)}>Top</Button>
                {open2 && (
                    <Modal from='top' onClose={setOpen2}>
                        Ceci est une pop-up de base
                    </Modal>
                )}

                <Button onClick={() => setOpen3(true)}>Left</Button>
                {open3 && (
                    <Modal from='left' onClose={setOpen3}>
                        Ceci est une pop-up de base
                    </Modal>
                )}

                <Button onClick={() => setOpen4(true)}>Right</Button>
                {open4 && (
                    <Modal from='right' onClose={setOpen4}>
                        Ceci est une pop-up de base
                    </Modal>
                )}

                <Button onClick={() => setOpen5(true)}>Ouvrir</Button>
                {open5 && (
                    <Modal onClose={setOpen5}>
                        {({ refuse, valid }) => {
                            return (
                                <Flex column className='height-100%'>
                                    <h1>Modal complète</h1>

                                    <div>
                                        Souhaitez-vous valider cette pop-up ?
                                    </div>

                                    <div className='flex-1' />

                                    <div className='flex justify-center'>
                                        <Button
                                            onClick={refuse}
                                            aspect='border' // aspette lol
                                            className='mr-40'
                                        >
                                            Refuser
                                        </Button>
                                        <Button
                                            onClick={valid}
                                            className='mr-40'
                                        >
                                            Valider
                                        </Button>
                                    </div>
                                </Flex>
                            )
                        }}
                    </Modal>
                )}
            </Grid>
        </>
    )
}

export default function TestsModals(props) {
    return (
        <ErrorBoundary
            fallback='Houston, on a un problème'
            showDetails
            className='text-dark'
        >
            <UncatchedTestsModals {...props} />
        </ErrorBoundary>
    )
}

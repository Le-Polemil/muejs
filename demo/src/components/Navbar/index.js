import React, { useState } from 'react'
import { Flex, Icon, ErrorBoundary } from 'react-muejs'

function UncatchedNavbarContent({ className = '', ...props }) {
    throw new Error('Aucun content disponible')
    return (
        <>
            <div>Bonjour les loulous</div>
            <Icon icon='pan_tool' />
        </>
    )
}

function NavbarContent(props) {
    return (
        <ErrorBoundary
            fallback='Houston, on a un problème'
            showDetails
            className='text-dark'
        >
            <NavbarContent {...props} />
        </ErrorBoundary>
    )
}

export default function Navbar({ className = '', ...props }) {
    return (
        <Flex
            className={`${className} justify-space-between bg-primary ph-10% pv-20`.trim()}
            col='1'
            fullWidth
            {...props}
        >
            <NavbarContent />
        </Flex>
    )
}

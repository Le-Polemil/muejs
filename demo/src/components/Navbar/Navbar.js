import React, { useState } from 'react'
import { Flex, Icon, ErrorBoundary } from 'muejs'

function NavbarContent({ className = '', ...props }) {
    throw new Error('Aucun content disponible')
    return (
        <>
            <div>Bonjour les loulous</div>
            <Icon icon='pan_tool' />
        </>
    )
}

export function Navbar({ className = '', ...props }) {
    return (
        <Flex
            className={`${className} justify-space-between bg-primary ph-10% pv-20`.trim()}
            col='1'
            fullWidth
            {...props}
        >
            <ErrorBoundary
                fallback={({ error, errorInfo }) => (
                    <h6 className='text-error weight-900'>{error.message}</h6>
                )}
            >
                <NavbarContent />
            </ErrorBoundary>
        </Flex>
    )
}

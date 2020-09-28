import React from 'react';

import { MobileMenuPageOverlay, MobileMenuButtonWrapper, MobileMenuButton, MobileMenuWrapper } from './styles';

const MobileMenu = ({ active, toggleMobileMenu }) => {
    return (
        <>
            <MobileMenuPageOverlay active={active} onClick={toggleMobileMenu} />
            <MobileMenuButtonWrapper onClick={toggleMobileMenu}>
                <MobileMenuButton />
            </MobileMenuButtonWrapper>

            <MobileMenuWrapper active={active} />
        </>
    )
}

export default MobileMenu
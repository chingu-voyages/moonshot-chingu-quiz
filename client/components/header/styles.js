import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 88px;
    width: 100%;
    background: #333;
`;

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1440px;
    max-width: calc(100% - 100px);
    height: 100%;
    margin: 0 auto;
`;

// LOGO //
export const LogoWrapper = styled.a`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 58px;
    height: 58px;
    margin-right: 18px;
`;

export const LogoText = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #18E28C;
`;

// NAVBAR //
export const Navbar = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavbarLink = styled.a`
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    margin-right: 32px;

    &:last-of-type {
        margin-right: 0;
    }
`;

// MOBILE MENU //
export const MobileMenuPageOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 500;
    background: #000;

    opacity: ${props => props.active ? '0.2' : '0'};
    ${props => !props.active && `pointer-events: none`};
    transition: all ease .3s;
`;

export const MobileMenuButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fff;
`;

export const MobileMenuButton = styled.div`
    position: relative;
    width: 22px;
    height: 2px;
    background: #fff;

    &:before,
    &:after {
        content: "";
        width: inherit;
        height: inherit;
        background: inherit;
        position: absolute;
        left: 0;
    }

    &:before {
        top: -6px;
    }

    &:after {
        top: 6px;
    }
`;

export const MobileMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background: #fff;
    width: calc(100% - 80px);
    max-width: 350px;
    height: 100%;
    z-index: 600;
    transform: ${props => props.active ? 'translateX(0)' : 'translateX(100%)'};
    transition: all ease .3s;
`;

export const MobileMenuTitle = styled.div`
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    background: #057A55;
    color: #fff;
    padding: 12px 0;
    border-bottom: 1px solid #ccc;
`;

export const MobileMenuLink = styled(NavbarLink)`
    display: block;
    color: #4a4a4a;
    text-align: center;
    font-size: 18px;
    margin: 0;
    padding: 12px 0;
    border-bottom: 1px solid #ccc;
`;
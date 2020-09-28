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

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

// Placeholder until we got logo file
export const Logo = styled.div`
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: #18E28C;
    margin-right: 15px;
`;

export const LogoText = styled.div`
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    text-transform: uppercase;
    color: #18E28C;
`;
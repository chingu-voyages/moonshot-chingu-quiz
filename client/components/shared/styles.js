import styled, { css } from 'styled-components';

// -- TEXT ELEMENTS -- //

// HEADINGS //
export const HugeText = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 69px;
  line-height: 100%;
`;

export const Heading1 = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 53px;
  line-height: 120%;
`;

export const Heading2 = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 120%;
`;

export const Heading3 = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 36px;
`;

export const Heading4 = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;

// BODY TEXT //
export const TextBody = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
`;

export const TextBodyBold = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
`;

export const TextBodySmall = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
`;

export const TextBodySmallBold = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
`;

export const TextBodyMicro = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
`;

export const TextBodyMicroBold = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
`;

// -- STYLED TEXT -- //

export const PageHeader = styled(Heading1)`
  color: #18E28C;
  padding: 0;
  margin: 20px auto;
`;


// -- Buttons -- //

export const PrimaryButton = styled.button`
  width: max-content;
  padding: 8px 15px;
  margin: 0;
  background: transparent;
  border: 1px solid #057A55;
  border-radius: 5px;
  color: #057A55;
  cursor: pointer;
  filter: contrast(30%);
  transition-duration: 200ms;

  ${props => props.activeLight && css`
    background: #057A55;
    color: #fff;
    filter: none;
  `}

  ${props => props.activeDark && css`
    background: #057A55;
    color: #333;
    filter: none;
  `}

`;

export const PrimaryButtonSmall = styled(PrimaryButton)`
  padding: 2px 12px;
`;

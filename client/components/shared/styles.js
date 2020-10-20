import styled, { css, keyframes } from "styled-components";

// -- TEXT ELEMENTS -- //

// HEADINGS //
export const HugeText = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 69px;
  line-height: 100%;
`;

export const Heading1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 53px;
  line-height: 120%;
`;

export const Heading2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 120%;
`;

export const Heading3 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 36px;
`;

export const Heading4 = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;

// BODY TEXT //
export const TextBody = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
`;

export const TextBodyBold = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
`;

export const TextBodySmall = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
`;

export const TextBodySmallBold = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
`;

export const TextBodyMicro = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
`;

export const TextBodyMicroBold = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
`;

// -- STYLED TEXT -- //

export const PageHeader = styled(Heading1)`
  color: ${props => props.theme.colors.greenPrimary};
  padding: 0;
  margin: 20px auto;
`;

// -- Buttons -- //

export const PrimaryButton = styled.button`
  width: max-content;
  padding: 8px 15px;
  margin: 0;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.darkGreen};
  border-radius: 5px;
  color: ${props => props.theme.colors.darkGreen};
  cursor: pointer;
  transition-duration: 200ms;

  ${props =>
    props.mod === "fillLight" &&
    css`
      background: ${props.theme.colors.darkGreen};
      color: ${props.theme.colors.light};
      filter: none;
    `}

  ${props =>
    props.mod === "fillDark" &&
    css`
      background: ${props.theme.colors.darkGreen};
      color: ${props.theme.colors.grey};
      filter: none;
    `}

  ${props =>
    props.mod === "ghost" &&
    css`
      filter: contrast(50%);
      opacity: 0.7;
    `}

    ${props =>
    props.size === "small" &&
    css`
      padding: 2px 12px;
    `}
`;

// -- Loading and Error -- //
export const FullWidthContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.grey};
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 10px;
`;

// -- Animations -- //
export const riseUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 25px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

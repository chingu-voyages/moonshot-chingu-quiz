import styled from "styled-components";
import { breakpoint } from "../../frontend-config";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.grey};
  height: 66px;
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: ${breakpoint("maxWidth")};
  max-width: calc(100% - 70px);
  margin: 0 auto;
  color: ${props => props.theme.colors.light};
`;

export const HighlightLink = styled.span`
  color: ${props => props.theme.colors.midGreen};
  margin-left: 5px;
`;

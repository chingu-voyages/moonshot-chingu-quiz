import styled from "styled-components";
import { breakpoint } from "../../frontend-config";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #333;
  height: 66px;
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: ${breakpoint("maxWidth")};
  max-width: calc(100% - 70px);
  margin: 0 auto;
  color: #fff;
`;

export const HighlightLink = styled.span`
  color: #18e28c;
  margin-left: 5px;
`;

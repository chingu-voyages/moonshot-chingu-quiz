import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../frontend-config";
import { Heading1 } from "./styles";

export default function PageHeader({ children }) {
  const HeaderWrapper = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 25px 0;
    margin: 0 0 25px 0;
    background: ${props => props.theme.colors.backgroundPrimary};

    @media (min-width: ${breakpoint("md")}) {
      padding: 40px 0;
      margin: 0 0 40px 0;
    }
  `;

  const PageH1 = styled(Heading1)`
    color: ${props => props.theme.colors.greenPrimary};
    padding: 0 10px;
    margin: 20px auto;
  `;

  return (
    <HeaderWrapper>
      <PageH1>{children}</PageH1>
    </HeaderWrapper>
  );
}

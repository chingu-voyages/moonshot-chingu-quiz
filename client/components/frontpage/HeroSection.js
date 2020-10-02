import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: #333;
  padding: 45px 25px 65px;
`;

const Headline = styled.h1`
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;
  color: #18e28c;
  margin-bottom: 32px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  padding: 0 40px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #18e28c;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  margin-right: 24px;
  padding: 10px 20px;

  &:last-of-type {
    margin-right: 0;
  }

  ${props =>
    props.light &&
    css`
      background: #18e28c;
      color: #333;
    `}

  ${props =>
    props.dark &&
    css`
      background: #333;
      color: #18e28c;
    `}
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <Headline>{`<Chingu meets Hacktober/>`}</Headline>

      <Subtitle>
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
        suscipit quaerendum. At nam minimum ponderum. Est audiam animal
        molestiae te.
      </Subtitle>

      <ButtonsWrapper>
        <Link href="/contribute">
          <Button light>Contribute</Button>
        </Link>

        <Link href="/about">
          <Button dark>About Us</Button>
        </Link>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default HeroSection;

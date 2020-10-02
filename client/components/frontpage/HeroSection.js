import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #333;
  padding: 45px 25px 65px;
`;

const Headline = styled.h1`
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
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

const HeroSection = () => {
  return (
    <Wrapper>
      <Headline>{`<Chingu meets Hacktober/>`}</Headline>
      <Subtitle>
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
        suscipit quaerendum. At nam minimum ponderum. Est audiam animal
        molestiae te.
      </Subtitle>
    </Wrapper>
  );
};

export default HeroSection;

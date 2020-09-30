import styled from "styled-components";

export const tileWrapper = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-tempate-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  place-content: center;
  width: 100%;
  margin: 0 auto;
`;

export const tileContainer = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 130px 1fr;
  grid-template-rows: 1fr;
  place-items: center start;
  place-content: center;
  width: 300px;
  height: 115px;
  padding: 0;
  margin: 0 auto;
`;

export const tileImage = styled.img`
  width: 130px;
  padding: 0;
  margin: 0;
`;

export const tileBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-gap: 0;
  width: calc(100% - 130px);
  padding: 0;
  margin: 0;
`;

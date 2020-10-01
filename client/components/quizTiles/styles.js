import styled from 'styled-components';

export const TileSection = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  place-content: center;
  width: 100%;
  margin: 10px auto;
`;

export const TileContainer = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  place-items: center start;
  place-content: center;
  width: 300px;
  height: 115px;
  padding: 0;
  margin: 0 auto;
`;

export const TileImage = styled.img`
  width: 100px;
  padding: 20px;
  margin: 0;
`;

export const TileBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-gap: 0;
  width: 100%;
  padding: 0;
  margin: 0;
`;

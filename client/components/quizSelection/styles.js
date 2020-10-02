import styled from 'styled-components';
import { breakpoint } from '../../frontend-config';

export const QuizzesHeader = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  background: #333;
`;

export const TileSection = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  place-items: center;
  place-content: center;
  width: 100%;
  margin: 10px auto;

  @media only screen and (min-width:${breakpoint('xs')}) {
    width: 95%;
    margin: 25px auto;
  }
`;

export const TileContainer = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  place-items: center start;
  place-content: center;
  width: 100%;
  height: 115px;
  padding: 0;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 3px 1px 10px #c4c4c4;
  transition-duration: 350ms;

  &:hover {
    box-shadow: 5px 3px 18px #c4c4c4;
    cursor: pointer;
  }

  @media only screen and (min-width:${breakpoint('xs')}) {
    width: 375px;
  }
`;

export const TileImage = styled.img`
  width: 100px;
  padding: 20px;
  margin: 0;
`;

export const TileBody = styled.div`
  place-self: start;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr;
  grid-gap: 0;
  width: 100%;
  padding: 0 5px 0 0;
  margin: 15px 0 0 0;
`;

export const TopicSelectionContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  width: 95%;
  padding: 0;
  margin: 10px auto;
`;

export const TopicSelectionList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin: 0;
  list-style: none;
`;

export const TopicSelectionItem = styled.li`
  width: max-content;
  padding: 10px;
  margin: 0 10px 0 0;
  background: transparent;
  border: 1px solid #057A55;
  border-radius: 5px;
  color: #057A55;
`;

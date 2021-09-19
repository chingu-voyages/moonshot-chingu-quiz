import styled from "styled-components";
import {breakpoint} from '../../frontend-config'

import { GraphPathBG, GraphPath, GraphText } from "./styles";

export const ScoreGraphCore = ({ className, percentage }: { className?: string, percentage: number }) => {
  return (
    <svg className={className} viewBox="0 0 36 36">
      <defs>
        <linearGradient id="gradient" x1="80%" y1="20%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#18e28c33" />
          <stop offset="100%" stopColor="#18e28c" />
        </linearGradient>
      </defs>
      <GraphPathBG
        d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <GraphPath
        strokeDasharray={`${percentage}, 100`}
        stroke={percentage >= 95 ? "#18e28c" : "url(#gradient)"}
        d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <GraphText x="18" y="20.35">
        {percentage}%
      </GraphText>
    </svg>
  );
}

const ScoreGraph = styled(ScoreGraphCore)`
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;

  @media (min-width: ${breakpoint("lg")}) {
    transform: scale(1.1);
    position: sticky;
    top: 200px;
    width: 100%;
    margin-top: 78px;
  }
`;

export default ScoreGraph;
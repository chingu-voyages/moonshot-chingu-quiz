import { GraphSVG, GraphPathBG, GraphPath, GraphText } from "./styles";

export default function ScoreGraph({ percentage }: { percentage: number }) {
  return (
    <GraphSVG viewBox="0 0 36 36">
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
    </GraphSVG>
  );
}

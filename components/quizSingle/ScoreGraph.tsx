
import { GraphSVG, GraphPathBG, GraphPath, GraphText } from "./styles";

export default function ScoreGraph({percentage}: {percentage:number}) {
    return (
        <div>
            <GraphSVG viewBox="0 0 36 36">
                <GraphPathBG
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <GraphPath
                    strokeDasharray={`${percentage}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <GraphText x="18" y="20.35">{percentage}%</GraphText>
            </GraphSVG>
        </div>
        )
}
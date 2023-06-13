import { GamePlayers } from "@/classes/constants";
import { WinLine } from "@/classes/interfaces";

interface Props {
    listLine: WinLine[];
    gameSize: number;
}

export default function Lines({ listLine, gameSize }: Props) {
    const angle = (line: WinLine) => {
        const deltaY = line.endRow - line.startRow;
        const deltaX = line.endColumn - line.startColumn;
        const radians = Math.atan2(deltaY, deltaX);
        const degrees = radians * (180 / Math.PI);
        return degrees;
    };

    return (
        <>
            {listLine.map((line, index) => {
                const color =
                    line.player === GamePlayers.PLAYER_ONE
                        ? "bg-red-500"
                        : "bg-blue-500";
                const angleLine = angle(line);
                const sizeBox = 340 / gameSize;
                const widthLine =
                    angleLine === 45 || angleLine === 135
                        ? 2.8 * sizeBox
                        : 2 * sizeBox;
                const heightLine = 4;
                const leftOffset = 2;
                const topOffset = 2;
                const styleLine = {
                    width: `${widthLine}px`,
                    height: `${heightLine}px`,
                    transform: `rotate(${angleLine}deg)`,
                    transformOrigin: "0% 0%",
                    top: `${
                        line.startRow * sizeBox + sizeBox / 2 + topOffset
                    }px`,
                    left: `${
                        line.startColumn * sizeBox + sizeBox / 2 + leftOffset
                    }px`,
                };

                return (
                    <div
                        key={index}
                        className={`absolute ${color}`}
                        style={styleLine}></div>
                );
            })}
        </>
    );
}

import { Letter } from "@/classes/constants/Letter";
import React from "react";

interface GameBoardProps {
    grid: string[][];
    gameInProgress: boolean;
    onCellClick: (row: number, column: number, letter: Letter) => void;
    currentLetter: Letter;
    gameSize: number;
}

function GameBoard({
    grid,
    gameInProgress,
    onCellClick,
    currentLetter,
    gameSize,
}: GameBoardProps) {

    // styles
    const gridColumns = {
        gridTemplateColumns: `repeat(${gameSize}, minmax(0, 1fr))`,
    };
    
    const sizeCell = {
        width: `${340 / gameSize}px`,
        height: `${340 / gameSize}px`,
    };


    return (
            <div
                className="grid border select-none border-slate-200"
                style={gridColumns}>
                {grid.map((row, rowIndex) =>
                    row.map((column, columnIndex) => (
                        <button
                            onClick={
                                gameInProgress
                                    ? undefined
                                    : () => onCellClick(rowIndex, columnIndex, currentLetter)
                            }
                            key={columnIndex}
                            className="border border-slate-200 bg-white text-2xl font-bold"
                            style={sizeCell}>
                            {column}
                        </button>
                    ))
                )}
            </div>
    );
}

export default GameBoard;

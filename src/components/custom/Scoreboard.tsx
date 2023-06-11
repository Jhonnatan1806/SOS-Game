import React from "react";

interface ScoreboardProps {
    scores: number[];
}

export default function Scoreboard({ scores }: ScoreboardProps) {
    return (
        <div className="flex flex-row items-center justify-center font-bold text-center gap-4 select-none">
            <div className="bg-red-500 w-12 h-12 rounded text-4xl text-white">
                {scores[0]}
            </div>
            <p className="text-2xl">:</p>
            <div className="bg-blue-500 w-12 h-12 rounded text-4xl text-white">
                {scores[1]}
            </div>
        </div>
    );
}

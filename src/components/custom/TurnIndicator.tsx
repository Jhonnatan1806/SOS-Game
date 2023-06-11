import { GamePlayer } from "@/classes/enums/GamePlayers";
import React from "react";

interface TurnIndicatorProps {
    currentTurn: string;
}

export default function TurnIndicator({ currentTurn }: TurnIndicatorProps) {
    return (
        <div
            className={`${
                currentTurn === GamePlayer.PLAYER_ONE ? "bg-red-500" : "bg-blue-500"
            } px-4 py-2 rounded w-full`}>
            <p className="w-fit text-2xl text-white">
                <strong>Turno actual:</strong> {currentTurn}
            </p>
        </div>
    );
}

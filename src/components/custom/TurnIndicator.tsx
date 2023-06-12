import React from "react";
import { GamePlayers } from "@/classes/constants";

interface TurnIndicatorProps {
    currentTurn: string;
}

export default function TurnIndicator({ currentTurn }: TurnIndicatorProps) {
    return (
        <div
            className={`${
                currentTurn === GamePlayers.PLAYER_ONE ? "bg-red-500" : "bg-blue-500"
            } px-4 py-2 rounded w-full`}>
            <p className="w-fit text-2xl text-white">
                <strong>Turno actual:</strong> {currentTurn}
            </p>
        </div>
    );
}

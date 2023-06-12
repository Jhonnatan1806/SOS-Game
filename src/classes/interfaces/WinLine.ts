import { GamePlayers } from "@/classes/enums/GamePlayers";

export interface WinLine {
    startRow: number;
    startColumn: number;
    endRow: number;
    endColumn: number;
    player: GamePlayers;
}
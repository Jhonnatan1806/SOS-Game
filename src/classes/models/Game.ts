import {
    Difficulty,
    GameMode,
    GamePlayers,
    GameType,
} from "@/classes/constants";
import { Board, Player, Record } from "@/classes/models";

/**
 * Representa un juego de SOS.
 */
export class Game {
    private board: Board;
    private players: Player[];
    private difficulty: Difficulty;
    private gameType: GameType;
    private record: Record;

    /**
     * Crea un juego de SOS.
     *
     * @param size - El tamaño del tablero.
     * @param type - El tipo de juego.
     * @param mode - El modo de juego.
     * @param difficulty - La dificultad del juego.
     */
    constructor(
        size: number = 3,
        type: GameType = GameType.SIMPLE_GAME,
        mode: GameMode = GameMode.PVP,
        difficulty: Difficulty = Difficulty.EASY
    ) {
        this.board = new Board(size, size);
        this.gameType = type;
        if (mode === GameMode.PVC) {
            this.players = [
                new Player(GamePlayers.PLAYER_ONE),
                new Player(GamePlayers.PLAYER_TWO, true),
            ];
        } else if (mode === GameMode.CVC) {
            this.players = [
                new Player(GamePlayers.PLAYER_ONE, true),
                new Player(GamePlayers.PLAYER_TWO, true),
            ];
        } else {
            this.players = [
                new Player(GamePlayers.PLAYER_ONE),
                new Player(GamePlayers.PLAYER_TWO),
            ];
        }
        this.difficulty = difficulty;
        this.record = new Record();
    }

    /**
     * Retorna el tablero del juego.
     *
     * @returns El objeto que representa el tablero del juego.
     */
    public getBoard(): Board {
        return this.board;
    }

    /**
     * Retorna el modo del juego.
     *
     * @returns El modo del juego.
     */
    public getGameMode(): GameType {
        return this.gameType;
    }

    /**
     * Retorna los jugadores del juego.
     *
     * @returns Un arreglo con los jugadores del juego.
     */
    public getPlayers(): Player[] {
        return this.players;
    }

    /**
     * Retorna la dificultad del juego.
     *
     * @returns La dificultad del juego.
     */
    public getDifficulty(): Difficulty {
        return this.difficulty;
    }

    /**
     * Retorna el record del juego.
     *
     * @returns El record del juego.
     */
    getRecord(): Record {
        return this.record;
    }
}

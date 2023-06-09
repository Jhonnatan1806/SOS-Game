import { Letter } from "@/classes/enums/Letter";
import { MoveGenerator } from "@/classes/utils/MoveGenerator";
import { Player } from "@/classes/models/Player";
import { CheckWinner } from "@/classes/utils/CheckWinner";
import { Game } from "@/classes/models/Game";
import { GameType } from "@/classes/enums/GameType";
import { GameState } from "@/classes/enums/GameState";
import { GameWinner } from "@/classes/enums/GameWinner";
import { Line } from "@/classes/models/Line";
import { Record } from "@/classes/models/Record";

/**
 * @class GameController
 * @classdesc Controla el juego de SOS.
 */
export class GameController {
    private game: Game;
    private gameState: GameState;
    private gameWinner: GameWinner;
    private currentPlayerIndex: number;
    private completedLines: Line[];
    private record: Record;

    /**
     * Crea un juego de SOS.
     *
     * @constructor
     * @param {Game} game - El juego.
     */
    constructor(game: Game) {
        this.game = game;
        this.gameState = GameState.PLAYING;
        this.gameWinner = GameWinner.NONE;
        this.currentPlayerIndex = 0;
        this.completedLines = [];
        this.record = new Record();
    }

    /**
     * Retorna el juego.
     *
     * @returns {Game} El juego.
     */
    public getGame(): Game {
        return this.game;
    }

    public getSize(): number {
        return this.game.getBoard().getRows();
    }

    /**
     * Retorna el jugador actual.
     *
     * @returns {Player} El jugador actual.
     */
    public getCurrentPlayer(): Player {
        return this.game.getPlayers()[this.currentPlayerIndex];
    }

    /**
     * Cambia el jugador actual al siguiente jugador en la lista de jugadores.
     */
    public changeCurrentPlayer(): void {
        this.currentPlayerIndex =
            (this.currentPlayerIndex + 1) % this.game.getPlayers().length;
    }

    /**
     * Retorna `true` si el juego ha terminado.
     *
     * @returns {GameState} `true` si el juego ha terminado, `false` en caso contrario.
     */
    public getGameState(): GameState {
        return this.gameState;
    }

    /**
     * Retorna el jugador ganador del juego.
     *
     * @returns {Player} El jugador ganador.
     * @throws Error si hay empate.
     */
    public getWinner(): GameWinner {
        const scorePlayer1 = this.game.getPlayers()[0].getScore().getPoints();
        const scorePlayer2 = this.game.getPlayers()[1].getScore().getPoints();
        if (scorePlayer1 === scorePlayer2) {
            this.gameWinner = GameWinner.TIE;
        }
        if (scorePlayer1 > scorePlayer2) {
            this.gameWinner = GameWinner.WINNER_PLAYER1;
        }
        if (scorePlayer1 < scorePlayer2) {
            this.gameWinner = GameWinner.WINNER_PLAYER2;
        }
        return this.gameWinner;
    }

    /**
     * Realiza un movimiento en el tablero.
     *
     * @param {number} row - La fila donde se realizará el movimiento.
     * @param {number} column - La columna donde se realizará el movimiento.
     * @param {string} letter - La letra que se colocará en la posición especificada.
     */
    public makeMove(row: number, column: number, letter: Letter): boolean {
        const board = this.game.getBoard();
        if (
            this.gameState === GameState.FINISHED ||
            board.getCell(row, column) !== Letter.EMPTY
        ) {
            return false;
        }
        board.setCell(row, column, letter);
        this.record.addMovement(row, column, letter);
        return true;
    }

    /**
     * Realiza un movimiento de la Computadora en el tablero.
     */
    public botMove(): [number, number, Letter] {
        const board = this.game.getBoard();
        const [row, col, letter] = MoveGenerator.getMovement(
            board,
            this.game.getDifficulty()
        );
        return [row, col, letter];
    }

    public checkSOS(row: number, column: number): boolean {
        const board = this.game.getBoard();
        const mode = this.game.getGameMode();
        const checkWinner = new CheckWinner(board, mode, row, column);
        const points = checkWinner.checkBoard();
        this.getCurrentPlayer().getScore().addPoints(points);
        if (points > 0 && mode === GameType.SIMPLE_GAME) {
            this.gameState = GameState.FINISHED;
            const lines = checkWinner.getLines();
            for (const line of lines) {
                this.addSOSLine(line);
            }
            return true;
        }
        if (board.isFull()) {
            this.gameState = GameState.FINISHED;
        }
        return false;
    }

    /**
     * Retorna la última línea de SOS completada durante el juego.
     *
     * @returns {Line} La última línea de SOS completada o null si no hay ninguna.
     */
    public getCompletedSOSLines(): Line[] {
        return this.completedLines;
    }

    private addSOSLine(line: Line) {
        this.completedLines.push(line);
    }

    public resetGame(): void {
        this.game.getBoard().reset();
        this.game.getPlayers()[0].getScore().reset();
        this.game.getPlayers()[1].getScore().reset();
        this.record.reset();
        this.gameState = GameState.PLAYING;
        this.gameWinner = GameWinner.NONE;
        this.currentPlayerIndex = 0;
        this.completedLines = [];
    }

    public getRecord(): Record {
        return this.record;
    }
}

import { GameState, GameType, GameWinner, Letter } from "@/classes/constants";
import { Checker, MoveGenerator } from "@/classes/helpers";
import { WinLine } from "@/classes/interfaces";
import { Game, Player, Record } from "@/classes/models";

/**
 * @class GameController
 * @classdesc Controla el juego de SOS.
 */
export class GameController {
    private game: Game;
    private gameState: GameState;
    private gameWinner: GameWinner;
    private currentPlayerIndex: number;
    private completedLines: WinLine[];
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
     * Retorna los movimientos realizados del tablero.
     *
     * @returns {Record} Los movimientos realizados del tablero.
     */
    public getRecord(): Record {
        return this.record;
    }

    /**
     * Retorna los scores de los jugadores.
     *
     * @returns {number[]} Los scores de los jugadores.
     */
    public getScores(): number[] {
        return this.game
            .getPlayers()
            .map((player) => player.getScore().getPoints());
    }

    /**
     * Retorna la última línea de SOS completada durante el juego.
     *
     * @returns {Line} La última línea de SOS completada o null si no hay ninguna.
     */
    public getCompletedSOSLines(): WinLine[] {
        return this.completedLines;
    }

    /**
     * Agrega una línea de SOS completada durante el juego.
     *
     * @param {WinLine} line - La línea de SOS completada.
     */
    private addSOSLine(line: WinLine) {
        this.completedLines.push(line);
    }

    /**
     * Retorna el jugador ganador del juego.
     *
     * @returns {Player} El jugador ganador.
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
     * @returns {boolean} `true` si el movimiento se realizó con éxito, `false` en caso contrario.
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
     * Realiza un movimiento de la Computadora en el tablero
     * y retorna la fila donde se realizó el movimiento.
     *
     * @return {number, number, Letter} el movimiento del bot.
     */
    public botMove(): [number, number, Letter] {
        const board = this.game.getBoard();
        const { row, column, letter } = MoveGenerator.getMovement(
            board,
            this.game.getDifficulty()
        );
        return [row, column, letter];
    }

    /**
     * Verifica si se ha completado una línea de SOS.
     *
     * @param {number} row - La fila donde se realizó el movimiento.
     * @param {number} column - La columna donde se realizó el movimiento.
     * @param {string} letter - La letra que se colocó en la posición especificada.
     * @returns {boolean} `true` si se completó una línea de SOS, `false` en caso contrario.
     */
    public checkSOS(row: number, column: number, letter: Letter): boolean {
        const board = this.game.getBoard();
        const mode = this.game.getGameMode();
        const movement = { row, column, letter };
        const player = this.getCurrentPlayer().getName();
        const winLines = Checker.checkPlay(board, movement, player);
        const points = winLines.length;
        this.getCurrentPlayer().getScore().addPoints(points);
        if (mode === GameType.SIMPLE_GAME) {
            if (points > 0) {
                this.gameState = GameState.FINISHED;
                for (const line of winLines) {
                    this.addSOSLine(line);
                }
                return true;
            }
        } else if (mode === GameType.GENERAL_GAME) {
            if (points > 0) {
                for (const line of winLines) {
                    this.addSOSLine(line);
                }
            }
            if (board.isFull()) {
                this.gameState = GameState.FINISHED;
                return true;
            }
        }
        return false;
    }

    /**
     * Reinicia el juego.
     */
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
}

import { Difficulty, GamePlayers, Letter } from "@/classes/constants";
import { Checker } from "@/classes/helpers";
import { Movement } from "@/classes/interfaces";
import { Board } from "@/classes/models";

/**
 * @class MoveGenerator
 * @classdesc Clase que representa un movimiento de la IA en el tablero.
 */
export class MoveGenerator {
    /**
     * Retorna un movimiento de la IA.
     *
     * @param {Board} board
     * @param {Difficulty} difficulty
     * @returns {Movement} - Un arreglo con la fila, columna y letra del movimiento.
     */
    public static getMovement(board: Board, difficulty: Difficulty): Movement {
        if (difficulty === Difficulty.MEDIUM) {
            return this.mediumMove(board);
        }
        if (difficulty === Difficulty.HARD) {
            return this.hardMove(board);
        }
        return this.easyMove(board);
    }

    /**
     * Movimiento Facil
     * Genera un movimiento aleatorio.
     *
     * @param {Board} board - El tablero del juego.
     * @returns {Movement} - Un arreglo con la fila, columna y letra del movimiento.
     */
    public static easyMove(board: Board): Movement {
        let row: number, column: number;
        do {
            row = Math.floor(Math.random() * board.getRows());
            column = Math.floor(Math.random() * board.getColumns());
        } while (board.getCell(row, column) !== Letter.EMPTY);
        const letter = Math.random() < 0.5 ? Letter.S : Letter.O;
        return { row, column, letter };
    }

    /**
     * Movimiento Medio
     * Genera un movimiento mas sofisticado.
     *
     * @param {Board} board - El tablero del juego.
     * @returns {Movement} - Un arreglo con la fila, columna y letra del movimiento.
     */
    public static mediumMove(board: Board): Movement {
        const rows = board.getRows();
        const columns = board.getColumns();
        const playerLetters = [Letter.S, Letter.O];

        for (const letter of playerLetters) {
            for (let row = 0; row < rows; row++) {
                for (let column = 0; column < columns; column++) {
                    if (board.getCell(row, column) === Letter.EMPTY) {
                        board.setCell(row, column, letter);
                        const movement = { row, column, letter };
                        const points = Checker.checkPlay(
                            board,
                            movement,
                            GamePlayers.PLAYER_TWO
                        ).length;
                        board.setCell(row, column, Letter.EMPTY);

                        if (points >= 1) {
                            return { row, column, letter };
                        }
                    }
                }
            }
        }

        return MoveGenerator.easyMove(board);
    }

    /**
     * Movimiento Dificil
     * Genera un movimiento mas sofisticado.
     *
     * @param {Board} board - El tablero del juego.
     * @returns {Movement} - Un arreglo con la fila, columna y letra del movimiento.
     */
    public static hardMove(board: Board): Movement {
        const rows = board.getRows();
        const columns = board.getColumns();
        const playerLetters = [Letter.S, Letter.O];

        let maxPoints = -Infinity;
        let bestMove: Movement | null = null;

        for (const pletter of playerLetters) {
            for (let row = 0; row < rows; row++) {
                for (let column = 0; column < columns; column++) {
                    if (board.getCell(row, column) === Letter.EMPTY) {
                        board.setCell(row, column, pletter);
                        const points = MoveGenerator.evaluateMove(
                            board,
                            pletter,
                            row,
                            column
                        );
                        board.setCell(row, column, Letter.EMPTY);

                        if (points > maxPoints) {
                            maxPoints = points;
                            const letter =
                                Math.random() < 0.5 ? Letter.S : Letter.O;
                            bestMove = { row, column, letter };
                        }
                    }
                }
            }
        }

        if (bestMove) {
            return bestMove;
        }

        return MoveGenerator.easyMove(board);
    }

    /**
     * Evalua un movimiento.
     *
     * @param {Board} board - El tablero del juego.
     * @param {Letter} letter - La letra del jugador.
     * @param {number} row - La fila del movimiento.
     * @param {number} column - La columna del movimiento.
     * @returns {number} - La evaluacion del movimiento.
     */
    private static evaluateMove(
        board: Board,
        letter: Letter,
        row: number,
        column: number
    ): number {
        const playerMovement = { row, column, letter };
        const playerPoints = Checker.checkPlay(
            board,
            playerMovement,
            GamePlayers.PLAYER_ONE
        ).length;
        const opponentLetter = letter === Letter.S ? Letter.O : Letter.S;
        const opponentMovement = { row, column, letter: opponentLetter };
        board.setCell(row, column, opponentLetter);
        const opponentPoints = Checker.checkPlay(
            board,
            opponentMovement,
            GamePlayers.PLAYER_TWO
        ).length;
        return playerPoints - opponentPoints;
    }
}

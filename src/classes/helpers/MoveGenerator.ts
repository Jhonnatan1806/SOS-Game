import { Difficulty, GamePlayers, Letter } from "@/classes/constants";
import { Checker } from "@/classes/helpers";
import { Movement, MakeMove } from "@/classes/interfaces";
import { Board } from "@/classes/models";

/**
 * Clase que representa un movimiento de la IA en el tablero.
 */
export class MoveGenerator implements MakeMove{

    private board: Board;
    private difficulty: Difficulty;

    /**
     * Crea un movimiento de la IA.
     * 
     * @param board - El tablero del juego.
     * @param difficulty - La dificultad del juego.
     */
    public constructor(board: Board, difficulty: Difficulty) {
        this.board = board;
        this.difficulty = difficulty;
    }

    /**
     * Retorna un movimiento de la IA.
     *
     * @returns - Un arreglo con la fila, columna y letra del movimiento.
     */
    public getMovement(): Movement {
        if (this.difficulty === Difficulty.MEDIUM) {
            return this.mediumMove(this.board);
        }
        if (this.difficulty === Difficulty.HARD) {
            return this.hardMove(this.board);
        }
        return this.easyMove(this.board);
    }

    /**
     * Movimiento Facil
     * Genera un movimiento aleatorio.
     *
     * @param board - El tablero del juego.
     * @returns Un arreglo con la fila, columna y letra del movimiento.
     */
    public easyMove(board: Board): Movement {
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
     * @param board - El tablero del juego.
     * @returns Un arreglo con la fila, columna y letra del movimiento.
     */
    public mediumMove(board: Board): Movement {
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
                            const random_letter = Math.random() < 0.5 ? Letter.S : Letter.O;
                            return { row, column, letter:random_letter };
                        }
                    }
                }
            }
        }

        return this.easyMove(board);
    }

    /**
     * Movimiento Dificil
     * Genera un movimiento mas sofisticado.
     *
     * @param board - El tablero del juego.
     * @returns Un arreglo con la fila, columna y letra del movimiento.
     */
    public hardMove(board: Board): Movement {
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

        return this.easyMove(board);
    }

    /**
     * Evalua un movimiento.
     *
     * @param board - El tablero del juego.
     * @param letter - La letra del jugador.
     * @param row - La fila del movimiento.
     * @param column - La columna del movimiento.
     * @returns La evaluacion del movimiento.
     */
    private evaluateMove(
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

import { Letter } from "@/classes/enums/Letter";
import { Board } from "@/classes/models/Board";
import { Difficulty } from "@/classes/enums/Difficulty";
import { CheckWinner } from "@/classes/utils/CheckWinner";
import { GameType } from "@/classes/enums/GameType";

/**
 * @class IMoveGenerator
 * @classdesc Clase que representa un movimiento de la IA en el tablero.
 */
export class MoveGenerator {
    public static getMovement(
        board: Board,
        difficulty: Difficulty
    ): [number, number, Letter] {
        if (difficulty === Difficulty.MEDIUM) {
            return this.mediumMove(board);
        }
        if (difficulty === Difficulty.HARD) {
            return this.hardMove(board);
        }
        return this.easyMove(board);
    }

    public static easyMove(board: Board): [number, number, Letter] {
        let row: number, col: number;
        do {
            row = Math.floor(Math.random() * board.getRows());
            col = Math.floor(Math.random() * board.getColumns());
        } while (board.getCell(row, col) !== Letter.EMPTY);
        const letter = Math.random() < 0.5 ? Letter.S : Letter.O;
        return [row, col, letter];
    }

    public static mediumMove(board: Board): [number, number, Letter] {
        const rows = board.getRows();
        const columns = board.getColumns();
        const playerLetters = [Letter.S, Letter.O];

        for (const letter of playerLetters) {
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < columns; col++) {
                    if (board.getCell(row, col) === Letter.EMPTY) {
                        board.setCell(row, col, letter);
                        const checkWinner = new CheckWinner(board, GameType.SIMPLE_GAME, row, col);
                        const points = checkWinner.checkBoard();
                        board.setCell(row, col, Letter.EMPTY);

                        if (points >= 1) {
                            return [row, col, letter];
                        }
                    }
                }
            }
        }

        return MoveGenerator.easyMove(board);
    }

    public static hardMove(board: Board): [number, number, Letter] {
        const rows = board.getRows();
        const columns = board.getColumns();
        const playerLetters = [Letter.S, Letter.O];

        let maxPoints = -Infinity;
        let bestMove: [number, number, Letter] | null = null;

        for (const letter of playerLetters) {
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < columns; col++) {
                    if (board.getCell(row, col) === Letter.EMPTY) {
                        board.setCell(row, col, letter);
                        const points = MoveGenerator.evaluateMove(board, letter, row, col);
                        board.setCell(row, col, Letter.EMPTY);

                        if (points > maxPoints) {
                            maxPoints = points;
                            bestMove = [row, col, letter];
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

    // Evalúa la puntuación de un movimiento para un jugador dado
    private static evaluateMove(board: Board, letter: Letter, row: number, col: number): number {
        const gameType = MoveGenerator.determineGameType(board);
        const checkWinner = new CheckWinner(board, gameType, row, col);
        const playerPoints = checkWinner.checkBoard();
        const opponentLetter = letter === Letter.S ? Letter.O : Letter.S;
        board.setCell(row, col, opponentLetter);
        const opponentPoints = checkWinner.checkBoard();

        // Devuelve la diferencia de puntos entre el jugador actual y el oponente
        return playerPoints - opponentPoints;
    }

    // Determina el tipo de juego basado en el tamaño del tablero
    private static determineGameType(board: Board): GameType {
        const rows = board.getRows();
        const columns = board.getColumns();
        return GameType.SIMPLE_GAME;
    }
}

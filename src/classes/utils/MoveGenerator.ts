import { Letter } from "@/classes/enums/Letter";
import { Board } from "@/classes/models/Board";
import { Difficulty } from "@/classes/enums/Difficulty";
import { Checker } from "@/classes/utils/Checker";
import { GamePlayers } from "@/classes/enums/GamePlayers";

/**
 * @class MoveGenerator
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
                for (let column = 0; column < columns; column++) {
                    if (board.getCell(row, column) === Letter.EMPTY) {
                        board.setCell(row, column, letter);
                        const movement = { row, column, letter}; 
                        const points = Checker.checkPlay(board, movement, GamePlayers.PLAYER_TWO).length;
                        board.setCell(row, column, Letter.EMPTY);

                        if (points >= 1) {
                            return [row, column, letter];
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
                for (let column = 0; column < columns; column++) {
                    if (board.getCell(row, column) === Letter.EMPTY) {
                        board.setCell(row, column, letter);
                        const points = MoveGenerator.evaluateMove(board, letter, row, column);
                        board.setCell(row, column, Letter.EMPTY);

                        if (points > maxPoints) {
                            maxPoints = points;
                            const letterRandom = Math.random() < 0.5 ? Letter.S : Letter.O;
                            bestMove = [row, column, letterRandom];
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

    private static evaluateMove(board: Board, letter: Letter, row: number, column: number): number {
        const playerMovement = { row, column, letter}; 
        const playerPoints = Checker.checkPlay(board, playerMovement, GamePlayers.PLAYER_ONE).length;
        const opponentLetter = letter === Letter.S ? Letter.O : Letter.S;
        const opponentMovement = { row, column, letter:opponentLetter}
        board.setCell(row, column, opponentLetter);
        const opponentPoints =  Checker.checkPlay(board, opponentMovement, GamePlayers.PLAYER_TWO).length;
        return playerPoints - opponentPoints;
    }
}

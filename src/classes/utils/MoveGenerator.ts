import { Letter } from "@/classes/enums/Letter";
import { Board } from "@/classes/models/Board";
import { Difficulty } from "@/classes/enums/Difficulty";

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
        //falta implementar
        return MoveGenerator.easyMove(board);
    }

    public static hardMove(board: Board): [number, number, Letter] {
        //falta implementar
        return MoveGenerator.easyMove(board);
    }
    
}

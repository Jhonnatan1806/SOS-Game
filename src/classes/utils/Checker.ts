import { Board } from "@/classes/models/Board";
import { Movement } from "@/classes/interfaces/Movement";
import { WinLine } from "@/classes/interfaces/WinLine";
import { Letter } from "@/classes/enums/Letter";
import { GamePlayers } from "@/classes/enums/GamePlayers";

export class Checker {

    static checkPlay(board: Board, movement: Movement, player: GamePlayers): WinLine[] {
        if(movement.letter === Letter.O){
            return this.checkO(board, movement, player);
        }
        if (movement.letter === Letter.S){
            return this.checkS(board, movement, player);
        }
        
        return [];        
    }

    static checkO(board: Board, movement: Movement, player: GamePlayers): WinLine[] {
        const winLines: WinLine[] = [];

        // horizontal check
        if (movement.row - 1>=0 && movement.row+1 < board.getRows()){
            const sos = board.getCell(movement.row-1, movement.column) + board.getCell(movement.row, movement.column) + board.getCell(movement.row+1, movement.column);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row-1, startColumn: movement.column, endRow: movement.row+1, endColumn: movement.column, player: player};
                winLines.push(wiLine);
            }
        }
        // vertical check
        if (movement.column - 1>=0 && movement.column+1 < board.getColumns()){
            const sos = board.getCell(movement.row, movement.column-1) + board.getCell(movement.row, movement.column) + board.getCell(movement.row, movement.column+1);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row, startColumn: movement.column-1, endRow: movement.row, endColumn: movement.column+1, player: player};
                winLines.push(wiLine);
            }
        }

        // diagonal main check
        if (movement.row - 1>=0 && movement.row+1 < board.getRows() && movement.column - 1>=0 && movement.column+1 < board.getColumns()){
            const sos = board.getCell(movement.row-1, movement.column-1) + board.getCell(movement.row, movement.column) + board.getCell(movement.row+1, movement.column+1);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row-1, startColumn: movement.column-1, endRow: movement.row+1, endColumn: movement.column+1, player: player};
                winLines.push(wiLine);
            }
        }

        // diagonal reverse check
        if (movement.row - 1>=0 && movement.row+1 < board.getRows() && movement.column - 1>=0 && movement.column+1 < board.getColumns()){
            const sos = board.getCell(movement.row-1, movement.column+1) + board.getCell(movement.row, movement.column) + board.getCell(movement.row+1, movement.column-1);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row-1, startColumn: movement.column+1, endRow: movement.row+1, endColumn: movement.column-1, player: player};
                winLines.push(wiLine);
            }
        }

        return winLines;
    }

    static checkS(board: Board, movement: Movement, player: GamePlayers): WinLine[] {
        const winLines: WinLine[] = [];

        // horizontal rigth check
        if (movement.row + 2 < board.getRows()){
            const sos = board.getCell(movement.row, movement.column) + board.getCell(movement.row+1, movement.column) + board.getCell(movement.row+2, movement.column);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row, startColumn: movement.column, endRow: movement.row+2, endColumn: movement.column, player: player};
                winLines.push(wiLine);
            }
        }

        // horizontal left check
        if (movement.row - 2 >= 0){
            const sos = board.getCell(movement.row-2, movement.column) + board.getCell(movement.row-1, movement.column) + board.getCell(movement.row, movement.column);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row-2, startColumn: movement.column, endRow: movement.row, endColumn: movement.column, player: player};
                winLines.push(wiLine);
            }
        }

        // vertical up check
        if (movement.column + 2 < board.getColumns()){
            const sos = board.getCell(movement.row, movement.column) + board.getCell(movement.row, movement.column+1) + board.getCell(movement.row, movement.column+2);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row, startColumn: movement.column, endRow: movement.row, endColumn: movement.column+2, player: player};
                winLines.push(wiLine);
            }
        }

        // vertical down check
        if (movement.column - 2 >= 0){
            const sos = board.getCell(movement.row, movement.column-2) + board.getCell(movement.row, movement.column-1) + board.getCell(movement.row, movement.column);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row, startColumn: movement.column-2, endRow: movement.row, endColumn: movement.column, player: player};
                winLines.push(wiLine);
            }
        }

        // diagonal main rigth down check
        if (movement.row + 2 < board.getRows() && movement.column + 2 < board.getColumns()){
            const sos = board.getCell(movement.row, movement.column) + board.getCell(movement.row+1, movement.column+1) + board.getCell(movement.row+2, movement.column+2);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row, startColumn: movement.column, endRow: movement.row+2, endColumn: movement.column+2, player: player};
                winLines.push(wiLine);
            }
        }

        // diagonal main left up check
        if (movement.row - 2 >= 0 && movement.column - 2 >= 0){
            const sos = board.getCell(movement.row-2, movement.column-2) + board.getCell(movement.row-1, movement.column-1) + board.getCell(movement.row, movement.column);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row-2, startColumn: movement.column-2, endRow: movement.row, endColumn: movement.column, player: player};
                winLines.push(wiLine);
            }
        }

        // diagonal reverse rigth up check
        if (movement.row - 2 >= 0 && movement.column + 2 < board.getColumns()){
            const sos = board.getCell(movement.row-2, movement.column+2) + board.getCell(movement.row-1, movement.column+1) + board.getCell(movement.row, movement.column);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row-2, startColumn: movement.column+2, endRow: movement.row, endColumn: movement.column, player: player};
                winLines.push(wiLine);
            }
        }

        // diagonal reverse left down check
        if (movement.row + 2 < board.getRows() && movement.column - 2 >= 0){
            const sos = board.getCell(movement.row, movement.column) + board.getCell(movement.row+1, movement.column-1) + board.getCell(movement.row+2, movement.column-2);
            if (sos === "SOS"){
                const wiLine: WinLine = {startRow: movement.row, startColumn: movement.column, endRow: movement.row+2, endColumn: movement.column-2, player: player};
                winLines.push(wiLine);
            }
        }

        return winLines;
    }

}
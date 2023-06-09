import { Letter } from "@/classes/enums/Letter";
import { GameType } from "@/classes/enums/GameType";
import { Board } from "@/classes/models/Board";
import { Line } from "@/classes/models/Line";

export class CheckWinner {
    private board: Board;
    private gameType: GameType;
    private win: Letter[] = [Letter.S, Letter.O, Letter.S];
    private currentRow: number;
    private currentColumn: number;
    private lines: Line[];

    constructor(
        board: Board,
        gameType: GameType,
        currentRow: number,
        currentColumn: number
    ) {
        this.board = board;
        this.gameType = gameType;
        this.currentRow = currentRow;
        this.currentColumn = currentColumn;
        this.lines = [];
    }

    public checkBoard(): number {
        if (this.gameType === GameType.SIMPLE_GAME) {
            return this.checkSimpleGame();
        } else if (this.gameType === GameType.GENERAL_GAME) {
            // TODO: Implementar
            return -1;
        }
        return 0;
    }

    private checkSimpleGame(): number {
        const checkHorizontal = this.checkHorizontal(
            this.currentRow,
            this.currentColumn
        );
        const checkVertical = this.checkVertical(
            this.currentRow,
            this.currentColumn
        );
        const checkDiagonal = this.checkDiagonal(
            this.currentRow,
            this.currentColumn
        );
        const checkReverseDiagonal = this.checkReverseDiagonal(
            this.currentRow,
            this.currentColumn
        );
        if (
            checkHorizontal === 1 ||
            checkVertical === 1 ||
            checkDiagonal === 1 ||
            checkReverseDiagonal === 1
        ) {
            return (
                checkHorizontal +
                checkVertical +
                checkDiagonal +
                checkReverseDiagonal
            );
        }
        return 0;
    }

    private checkHorizontal(currentRow: number, currentColumn: number): number {
        const maxRows = this.board.getRows();
        const maxColumns = this.board.getColumns();

        for (let i = 0; i < maxColumns; i++) {
            for (let j = 0; j <= maxRows - this.win.length; j++) {
                if (
                    this.board.getGrid()[i][j] === this.win[0] &&
                    this.board.getGrid()[i][j + 1] === this.win[1] &&
                    this.board.getGrid()[i][j + 2] === this.win[2]
                ) {
                    if (
                        (i === currentRow &&
                            j <= currentColumn &&
                            currentColumn <= j + 2) ||
                        (i === currentRow &&
                            j <= currentColumn &&
                            currentColumn <= j + 2)
                    ) {
                        this.lines.push({
                            startRow: i,
                            startColumn: j,
                            endRow: i,
                            endColumn: j + 2,
                        });
                        return 1;
                    }
                }
            }
        }
        return 0;
    }

    private checkVertical(currentRow: number, currentColumn: number): number {
        const maxRows = this.board.getRows();
        const maxColumns = this.board.getColumns();

        for (let i = 0; i <= maxColumns - this.win.length; i++) {
            for (let j = 0; j < maxRows; j++) {
                if (
                    this.board.getGrid()[i][j] === this.win[0] &&
                    this.board.getGrid()[i + 1][j] === this.win[1] &&
                    this.board.getGrid()[i + 2][j] === this.win[2]
                ) {
                    if (
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j === currentColumn) ||
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j === currentColumn)
                    ) {
                        this.lines.push({
                            startRow: i,
                            startColumn: j,
                            endRow: i + 2,
                            endColumn: j,
                        });
                        return 1;
                    }
                }
            }
        }
        return 0;
    }

    private checkDiagonal(currentRow: number, currentColumn: number): number {
        const maxRows = this.board.getRows();
        const maxColumns = this.board.getColumns();

        for (let i = 0; i <= maxColumns - this.win.length; i++) {
            for (let j = 0; j <= maxRows - this.win.length; j++) {
                if (
                    this.board.getGrid()[i][j] === this.win[0] &&
                    this.board.getGrid()[i + 1][j + 1] === this.win[1] &&
                    this.board.getGrid()[i + 2][j + 2] === this.win[2]
                ) {
                    if (
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j <= currentColumn &&
                            currentColumn <= j + 2) ||
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j <= currentColumn &&
                            currentColumn <= j + 2)
                    ) {
                        this.lines.push({
                            startRow: i,
                            startColumn: j,
                            endRow: i + 2,
                            endColumn: j + 2,
                        });
                        return 1;
                    }
                }
            }
        }
        return 0;
    }

    private checkReverseDiagonal(
        currentRow: number,
        currentColumn: number
    ): number {
        const maxRows = this.board.getRows();
        const maxColumns = this.board.getColumns();

        for (let i = 0; i <= maxColumns - this.win.length; i++) {
            for (let j = this.win.length - 1; j < maxRows; j++) {
                if (
                    this.board.getGrid()[i][j] === this.win[0] &&
                    this.board.getGrid()[i + 1][j - 1] === this.win[1] &&
                    this.board.getGrid()[i + 2][j - 2] === this.win[2]
                ) {
                    if (
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j - 2 <= currentColumn &&
                            currentColumn <= j) ||
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j - 2 <= currentColumn &&
                            currentColumn <= j)
                    ) {
                        this.lines.push({
                            startRow: i,
                            startColumn: j,
                            endRow: i + 2,
                            endColumn: j - 2,
                        });
                        return 1;
                    }
                }
            }
        }
        return 0;
    }

    public getLines(): Line[] {
        return this.lines;
    }
}

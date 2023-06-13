import { Movement } from "@/classes/interfaces/Movement";
import { Letter } from "@/classes/constants/Letter";

/**
 * Representa un registro de movimientos.
 */
export class Record {
    private movements: Movement[];

    /**
     * Crea una instancia de la clase Record.
     */
    constructor() {
        this.movements = [];
    }

    /**
     * Obtiene los movimientos del registro.
     *
     * @returns Los movimientos del registro.
     */
    public getMovements(): Movement[] {
        return this.movements;
    }

    /**
     * Agrega un movimiento al registro.
     *
     * @param row - La fila del movimiento.
     * @param column - La columna del movimiento.
     * @param letter - La letra del movimiento.
     */
    public addMovement(row: number, column: number, letter: Letter): void {
        this.movements.push({ row, column, letter });
    }

    /**
     * Reinicia el registro.
     */
    public reset(): void {
        this.movements = [];
    }
}

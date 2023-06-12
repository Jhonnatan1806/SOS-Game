import { Movement } from "@/classes/interfaces/Movement";
import { Letter } from "@/classes/constants/Letter";

/**
 * @class Record
 * @classdesc Representa un registro de movimientos.
 */
export class Record {

    private movements: Movement[];

    /**
     * Crea una instancia de la clase Record.
     * 
     * @constructor
     */
    constructor() {
        this.movements = [];
    }

    /**
     * Obtiene los movimientos del registro.
     * 
     * @returns {Movement[]} - Los movimientos del registro.
     */
    public getMovements() : Movement[] {
        return this.movements;
    }

    /**
     * Agrega un movimiento al registro.
     * 
     * @param {number} row - La fila del movimiento.
     * @param {number} column - La columna del movimiento.
     * @param {Letter} letter - La letra del movimiento.
     */ 
    public addMovement(row:number, column:number, letter:Letter): void {
        this.movements.push({row, column, letter});
    }

    /**
     * Reinicia el registro.
     */
    public reset(): void {
        this.movements = [];
    }
}
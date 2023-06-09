import { Movement } from "@/classes/models/Movement";
import { Letter } from "@/classes/enums/Letter";

export class Record {

    private movements: Movement[];

    constructor() {
        this.movements = [];
    }

    getMovements() {
        return this.movements;
    }

    getClone() {
        const clone = new Record();
        clone.movements = this.movements.slice();
        return clone;
    }

    addMovement(row:number, column:number, letter:Letter) {
        this.movements.push({row, column, letter});
    }

    reset() {
        this.movements = [];
    }
}
import { Letter } from "@/classes/enums/Letter";

export interface Movement{
    row: number;
    column: number;
    letter: Letter;
}
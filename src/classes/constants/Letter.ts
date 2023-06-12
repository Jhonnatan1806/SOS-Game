/**
 * @class GameMode
 * @classdesc Representa el modo de juego del tablero.
 * @readonly
 * @enum {string}
 */
export enum Letter {
	/**
	 * Letra S
	 * @type {string}
	 */
	S = "S",

	/**
	 * Letra O
	 * @type {string}
	 */
	O = "O",

	/**
	 * Celda vacía
	 * @type {string}
	 * @default
	 */
	EMPTY = "",
}

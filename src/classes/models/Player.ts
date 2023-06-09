import { Score } from "@/classes/models/Score";

/**
 * @class Player
 * @classdesc Esta clase representa un jugador del juego SOS.
 */
export class Player {
	private readonly name: string;
	private readonly score: Score;
    private readonly bot: boolean;

	/**
	 * Crea una instancia de la clase Player.
     * 
	 * @constructor
	 * @param {string} name - El nombre del jugador.
	 */
	constructor(name: string, bot: boolean = false) {
		this.name = name;
		this.score = new Score();
        this.bot = bot;
	}

	/**
	 * Obtiene el nombre del jugador.
	 * @returns {string} - El nombre del jugador.
	 */
	public getName(): string {
		return this.name;
	}

	/**
	 * Obtiene el puntaje del jugador.
	 *
	 * @returns {Score} - El puntaje del jugador.
	 */
	public getScore(): Score {
		return this.score;
	}

    public isBot(): boolean {
        return this.bot;
    }

}

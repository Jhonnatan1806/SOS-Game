import { Score } from "@/classes/models/Score";
import { GamePlayers } from "@/classes/enums/GamePlayers";

/**
 * @class Player
 * @classdesc Representa un jugador del juego SOS.
 */
export class Player {
	private readonly name: GamePlayers;
	private readonly score: Score;
    private readonly bot: boolean;

	/**
	 * Crea una instancia de la clase Player.
     * 
	 * @constructor
	 * @param {string} name - El nombre del jugador.
     * @param {boolean} bot - Si el jugador es un bot.
	 */
	constructor(name: GamePlayers, bot: boolean = false) {
		this.name = name;
		this.score = new Score();
        this.bot = bot;
	}

	/**
	 * Obtiene el nombre del jugador.
	 * @returns {GamePlayers} - El nombre del jugador.
	 */
	public getName(): GamePlayers {
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

    /**
     * Retorna si el jugador es un bot.
     * 
     * @returns {boolean} - Si el jugador es un bot.
     */
    public isBot(): boolean {
        return this.bot;
    }

}

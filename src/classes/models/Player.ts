import { Score } from "@/classes/models/Score";
import { GamePlayer } from "@/classes/enums/GamePlayers";

/**
 * @class Player
 * @classdesc Esta clase representa un jugador del juego SOS.
 */
export class Player {
	private readonly name: GamePlayer;
	private readonly score: Score;
    private readonly bot: boolean;

	/**
	 * Crea una instancia de la clase Player.
     * 
	 * @constructor
	 * @param {string} name - El nombre del jugador.
	 */
	constructor(name: GamePlayer, bot: boolean = false) {
		this.name = name;
		this.score = new Score();
        this.bot = bot;
	}

	/**
	 * Obtiene el nombre del jugador.
	 * @returns {GamePlayer} - El nombre del jugador.
	 */
	public getName(): GamePlayer {
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

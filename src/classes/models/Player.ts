import { Score } from "@/classes/models/Score";
import { GamePlayers } from "@/classes/constants/GamePlayers";

/**
 * Representa un jugador del juego SOS.
 */
export class Player {
	private readonly name: GamePlayers;
	private readonly score: Score;
    private readonly bot: boolean;

	/**
	 * Crea una instancia de la clase Player.
     * 
	 * @param name - El nombre del jugador.
     * @param bot - Si el jugador es un bot.
	 */
	constructor(name: GamePlayers, bot: boolean = false) {
		this.name = name;
		this.score = new Score();
        this.bot = bot;
	}

	/**
	 * Obtiene el nombre del jugador.
	 * @returns El nombre del jugador.
	 */
	public getName(): GamePlayers {
		return this.name;
	}

	/**
	 * Obtiene el puntaje del jugador.
	 *
	 * @returns El puntaje del jugador.
	 */
	public getScore(): Score {
		return this.score;
	}

    /**
     * Retorna si el jugador es un bot.
     * 
     * @returns Si el jugador es un bot.
     */
    public isBot(): boolean {
        return this.bot;
    }

}

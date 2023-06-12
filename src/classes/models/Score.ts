/**
 * @class Score
 * @classdesc Se encarga de manejar el puntaje del juego.
 */
export class Score {
	private points: number;

	/**
	 * Crea una instancia de la clase Score.
     * 
	 * @constructor
     * @param {number} points - Los puntos iniciales.
	 */
	constructor(points :number = 0) {
		this.points = points;
	}

	/**
	 * Añade puntos al puntaje actual.
     * 
	 * @param {number} points - Los puntos a añadir.
	 */
	public addPoints(points: number): void {
		this.points += points;
	}

	/**
	 * Establece el puntaje actual.
     * 
	 * @param {number} points - El puntaje a establecer.
	 */
	public setPoints(points: number): void {
		this.points = points;
	}

	/**
	 * Obtiene el puntaje actual.
     * 
	 * @returns {number} - El puntaje actual.
	 */
	public getPoints(): number {
		return this.points;
	}

    /**
     * Reinicia el puntaje.
     */
    public reset(): void {
        this.points = 0;
    }
}

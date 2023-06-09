import { Board } from "@/classes/models/Board";
import { Player } from "@/classes/models/Player";
import { Difficulty } from "@/classes/enums/Difficulty";
import { GameType } from "@/classes/enums/GameType";
import { GameMode } from "../enums/GameMode";


/**
 * @class Game
 * @classdesc Representa un juego de SOS.
 */
export class Game {
	private board: Board;
    private players: Player[];
    private difficulty: Difficulty;
	private gameType: GameType;
    private size: number;

	/**
	 * Crea un juego de SOS.
	 *
	 * @constructor
	 */
	constructor(
        size: number | undefined,
        type: string | undefined,
        mode: string | undefined,
        difficulty: string | undefined,
	) {
        this.size = size || 3;
		this.board = new Board(size,size);
        this.gameType = type === "General" ? GameType.GENERAL_GAME : GameType.SIMPLE_GAME;
        if(mode === GameMode.PVC) {
            this.players = [ new Player("ROJO"), new Player("AZUL",true)];
        }else if(mode === GameMode.CVC){
            this.players = [ new Player("ROJO",true), new Player("AZUL",true)];
        }
        else{
            this.players = [ new Player("ROJO"), new Player("AZUL")];
        }
        if(difficulty === "Intermedio"){
            this.difficulty = Difficulty.MEDIUM;
        }else if(difficulty === "Dificil"){
            this.difficulty = Difficulty.HARD;
        }
        else{
            this.difficulty = Difficulty.EASY;
        }

	}

	/**
	 * Retorna el tablero del juego.
	 *
	 * @returns {Board} El objeto que representa el tablero del juego.
	 */
	public getBoard(): Board {
		return this.board;
	}

	/**
	 * Retorna el modo del juego.
	 *
	 * @returns {Mode} El modo del juego.
	 */
	public getGameMode(): GameType {
		return this.gameType;
	}

	/**
	 * Retorna los jugadores del juego.
     * 
	 * @returns {Player[]} Un arreglo con los jugadores del juego.
	 */
	public getPlayers(): Player[] {
		return this.players;
	}

    /**
     * Retorna la dificultad del juego.
     * 
     * @returns {Difficulty} La dificultad del juego.
     */
    public getDifficulty(): Difficulty {
        return this.difficulty;
    }

    public getSize(): number {
        return this.size;
    }

}

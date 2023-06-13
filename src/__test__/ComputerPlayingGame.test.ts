import { GameType, GameState, Letter } from "@/classes/constants";
import { MakeMove, Movement } from "@/classes/interfaces";
import { GameController } from "@/classes/controllers";
import { Game } from "@/classes/models";

/**
 * Suite de pruebas para la historia de usuario 8.
 * @example <caption>Historia de usuario #8</caption>
 */ 
describe ("Computer Playing Game", (): void => {

    /**
     * Función para jugar un movimiento en el juego.
     * 
     * @param gameCtrl - Controlador del juego.
     * @param movement - Movimiento a realizar.
     */
    const play = (gameCtrl:GameController, movement: Movement): void => {
        gameCtrl.makeMove(movement.row, movement.column, movement.letter);
        gameCtrl.checkSOS(movement.row, movement.column, movement.letter);
        gameCtrl.changeCurrentPlayer();
    }


    /**
     * Función para simular un movimiento realizado por la CPU.
     * @param gameCtrl - Controlador del juego.
     * @param movement - Movimiento a simular.
     */
    const simulatePlay = (gameCtrl:GameController, movement: Movement): void => {
        const stubMoveGenetator: StubMoveGenerator = new StubMoveGenerator(movement);
        const [row, col, letter] =  gameCtrl.botMove(stubMoveGenetator);
        gameCtrl.makeMove(row, col, letter);
        gameCtrl.checkSOS(row, col, letter);
        gameCtrl.changeCurrentPlayer();
    }

    /**
     * Suite de pruebas para AC 8.1.
     */
    describe ("AC 8.1", (): void => {
        
        /**
         * Prueba para el caso Player vs CPU.
         */
        it("AC 8.1 Player vs CPU", (): void => {
            const game: Game = new Game(3, GameType.SIMPLE_GAME);
            const gameCtrl: GameController = new GameController(game);
            play(gameCtrl,{row:0, column:0, letter:Letter.S});
            simulatePlay(gameCtrl,{row:0, column:1, letter:Letter.O});
            play(gameCtrl,{row:2, column:2, letter:Letter.O});
            simulatePlay(gameCtrl,{row:0, column:2, letter:Letter.S});
            expect(gameCtrl.getGameState()).toBe(GameState.FINISHED);
        });
        
        /**
         * Prueba para el caso CPU vs CPU.
         */
        it("AC 8.1 CPU vs CPU", (): void => {
            const game: Game = new Game(3, GameType.SIMPLE_GAME);
            const gameCtrl: GameController = new GameController(game);
            simulatePlay(gameCtrl,{row:0, column:0, letter:Letter.S});
            simulatePlay(gameCtrl,{row:0, column:1, letter:Letter.O});
            simulatePlay(gameCtrl,{row:0, column:2, letter:Letter.S});
            expect(gameCtrl.getGameState()).toBe(GameState.FINISHED);
        });
    });

    /**
     * Suite de pruebas para AC 8.2.
     */
    describe ("AC 8.2", (): void => {
        /**
         * Prueba para el caso Player vs CPU.
         */
        it("AC 8.2 Player vs CPU", (): void => {
            const game: Game = new Game(3, GameType.GENERAL_GAME);
            const gameCtrl: GameController = new GameController(game);
            play(gameCtrl,{row:0, column:0, letter:Letter.S});
            simulatePlay(gameCtrl,{row:0, column:1, letter:Letter.O});
            play(gameCtrl,{row:0, column:2, letter:Letter.S});
            simulatePlay(gameCtrl,{row:1, column:0, letter:Letter.S});
            play(gameCtrl,{row:1, column:1, letter:Letter.O});
            simulatePlay(gameCtrl,{row:1, column:2, letter:Letter.S});
            play(gameCtrl,{row:2, column:0, letter:Letter.S});
            simulatePlay(gameCtrl,{row:2, column:1, letter:Letter.O});
            play(gameCtrl,{row:2, column:2, letter:Letter.S});
            expect(gameCtrl.getGameState()).toBe(GameState.FINISHED);
        });

        /**
         * Prueba para el caso CPU vs CPU.
         */
        it("AC 8.2 CPU vs CPU", (): void => {
            const game: Game = new Game(3, GameType.GENERAL_GAME);
            const gameCtrl: GameController = new GameController(game);
            simulatePlay(gameCtrl,{row:0, column:0, letter:Letter.S});
            simulatePlay(gameCtrl,{row:0, column:1, letter:Letter.O});
            simulatePlay(gameCtrl,{row:0, column:2, letter:Letter.S});
            simulatePlay(gameCtrl,{row:1, column:0, letter:Letter.S});
            simulatePlay(gameCtrl,{row:1, column:1, letter:Letter.O});
            simulatePlay(gameCtrl,{row:1, column:2, letter:Letter.S});
            simulatePlay(gameCtrl,{row:2, column:0, letter:Letter.S});
            simulatePlay(gameCtrl,{row:2, column:1, letter:Letter.O});
            simulatePlay(gameCtrl,{row:2, column:2, letter:Letter.S});
            expect(gameCtrl.getGameState()).toBe(GameState.FINISHED);
        });
    });
});

/**
 * Stub para generar movimientos.
 */
class StubMoveGenerator implements MakeMove {

    private movement: Movement;

    /**
     * Crea un stub para generar movimientos.
     * 
     * @param movement - Movimiento a realizar.
     */
    constructor(movement: Movement) {
        this.movement = movement;
    }
    
    /**
     * Devuelve el movimiento a realizar.
     * 
     * @returns Movimiento a realizar.
     */
    getMovement(): Movement {
        return { row: this.movement.row, column: this.movement.column, letter: this.movement.letter  };
    }

}
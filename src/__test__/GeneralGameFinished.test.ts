import { GameState, GameType, Letter } from "@/classes/constants";
import { GameController } from "@/classes/controllers";
import { Movement } from "@/classes/interfaces";
import { Game } from "@/classes/models";

describe ("General Game Finished", (): void => {

    const play = (gameCtrl:GameController, movement: Movement): void => {
        gameCtrl.makeMove(movement.row, movement.column, movement.letter);
        gameCtrl.checkSOS(movement.row, movement.column, movement.letter);
        gameCtrl.changeCurrentPlayer();
    }

    describe("7.1", (): void => {

        it("7.1 Horizontal", (): void => {
            const game: Game = new Game(3, GameType.GENERAL_GAME);
            const gameCtrl: GameController = new GameController(game);
            play(gameCtrl,{row:0, column:0, letter:Letter.S});
            play(gameCtrl,{row:0, column:1, letter:Letter.O});
            play(gameCtrl,{row:0, column:2, letter:Letter.S});
            play(gameCtrl,{row:1, column:0, letter:Letter.S});
            play(gameCtrl,{row:1, column:1, letter:Letter.O});
            play(gameCtrl,{row:1, column:2, letter:Letter.S});
            play(gameCtrl,{row:2, column:0, letter:Letter.S});
            play(gameCtrl,{row:2, column:1, letter:Letter.O});
            play(gameCtrl,{row:2, column:2, letter:Letter.S});
            expect(gameCtrl.getGameState()).toBe(GameState.FINISHED);
        });

        it("7.1 Vertical", (): void => {
            const game: Game = new Game(3, GameType.GENERAL_GAME);
            const gameCtrl: GameController = new GameController(game);
            play(gameCtrl,{row:0, column:0, letter:Letter.S});
            play(gameCtrl,{row:1, column:0, letter:Letter.O});
            play(gameCtrl,{row:2, column:0, letter:Letter.S});
            play(gameCtrl,{row:0, column:1, letter:Letter.S});
            play(gameCtrl,{row:1, column:1, letter:Letter.O});
            play(gameCtrl,{row:2, column:1, letter:Letter.S});
            play(gameCtrl,{row:0, column:2, letter:Letter.S});
            play(gameCtrl,{row:1, column:2, letter:Letter.O});
            play(gameCtrl,{row:2, column:2, letter:Letter.S});
            expect(gameCtrl.getGameState()).toBe(GameState.FINISHED);
        });

        it("7.1 Diagonal", (): void => {
            const game: Game = new Game(3, GameType.GENERAL_GAME);
            const gameCtrl: GameController = new GameController(game);
            play(gameCtrl,{row:0, column:0, letter:Letter.S});
            play(gameCtrl,{row:1, column:1, letter:Letter.O});
            play(gameCtrl,{row:2, column:2, letter:Letter.S});
            play(gameCtrl,{row:1, column:0, letter:Letter.S});
            play(gameCtrl,{row:0, column:1, letter:Letter.O});
            play(gameCtrl,{row:1, column:2, letter:Letter.S});
            play(gameCtrl,{row:2, column:0, letter:Letter.S});
            play(gameCtrl,{row:2, column:1, letter:Letter.O});
            play(gameCtrl,{row:0, column:2, letter:Letter.S});
            expect(gameCtrl.getGameState()).toBe(GameState.FINISHED);
        });

        it("5.1 Diagonal Inverse", (): void => {
            const game: Game = new Game(3, GameType.GENERAL_GAME);
            const gameCtrl: GameController = new GameController(game);
            play(gameCtrl,{row:0, column:2, letter:Letter.S});
            play(gameCtrl,{row:1, column:1, letter:Letter.O});
            play(gameCtrl,{row:2, column:0, letter:Letter.S});
            play(gameCtrl,{row:1, column:0, letter:Letter.S});
            play(gameCtrl,{row:0, column:1, letter:Letter.O});
            play(gameCtrl,{row:1, column:2, letter:Letter.S});
            play(gameCtrl,{row:0, column:0, letter:Letter.S});
            play(gameCtrl,{row:2, column:1, letter:Letter.O});
            play(gameCtrl,{row:2, column:2, letter:Letter.S});
            expect(gameCtrl.getGameState()).toBe(GameState.FINISHED);
        });

    });

    it("7.2", (): void => {
        const game: Game = new Game(3, GameType.GENERAL_GAME);
        const gameCtrl: GameController = new GameController(game);
        play(gameCtrl,{row:0, column:0, letter:Letter.S});
        play(gameCtrl,{row:0, column:1, letter:Letter.S});
        play(gameCtrl,{row:0, column:2, letter:Letter.S});
        play(gameCtrl,{row:1, column:0, letter:Letter.S});
        play(gameCtrl,{row:1, column:1, letter:Letter.S});
        play(gameCtrl,{row:1, column:2, letter:Letter.S});
        play(gameCtrl,{row:2, column:0, letter:Letter.S});
        play(gameCtrl,{row:2, column:1, letter:Letter.S});
        play(gameCtrl,{row:2, column:2, letter:Letter.S});
        expect(gameCtrl.getGameState()).toBe(GameState.FINISHED);
    });
});
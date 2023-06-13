import { GameType, Letter } from "@/classes/constants";
import { GameController } from "@/classes/controllers";
import { Game } from "@/classes/models";

describe("Record Game", (): void => {
    it("AC 9.1", (): void => {
        const game: Game = new Game(3, GameType.GENERAL_GAME);
        const gameCtrl: GameController = new GameController(game);
        gameCtrl.makeMove(0, 0, Letter.S);
        gameCtrl.makeMove(0, 1, Letter.O);
        gameCtrl.makeMove(0, 2, Letter.S);
        const movements = gameCtrl.getRecord().getMovements();
        expect(movements[0].letter).toBe(Letter.S);
        expect(movements[1].letter).toBe(Letter.O);
        expect(movements[2].letter).toBe(Letter.S);
    });

    it("AC 9.2", (): void => {
        const game: Game = new Game(3, GameType.GENERAL_GAME);
        const gameCtrl: GameController = new GameController(game);
        gameCtrl.makeMove(0, 0, Letter.S);
        gameCtrl.makeMove(0, 1, Letter.O);
        gameCtrl.makeMove(0, 1, Letter.S);
        const movements = gameCtrl.getRecord().getMovements();
        expect(movements[0].letter).toBe(Letter.S);
        expect(movements[1].letter).toBe(Letter.O);
        expect(movements.length).toBe(2);

    });
});


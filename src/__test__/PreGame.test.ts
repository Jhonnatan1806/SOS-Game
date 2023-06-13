import { GameType } from "@/classes/constants";
import { Game } from "@/classes/models";

describe("Pre Game", (): void => {
    it("AC 1.1", (): void => {
        const game: Game = new Game(5);
        expect(game.getBoard().getRows()).toBe(5);
        expect(game.getBoard().getColumns()).toBe(5);
    });

    it("AC 1.2", (): void => {
        const game: Game = new Game();
        expect(game.getBoard().getRows()).toBe(3);
        expect(game.getBoard().getColumns()).toBe(3);
    });

    it("AC 2.1", (): void => {
        const game: Game = new Game(3, GameType.GENERAL_GAME);
        expect(game.getGameMode()).toBe(GameType.GENERAL_GAME);
    });

    it("AC 2.2", (): void => {
        const game: Game = new Game(3);
        expect(game.getGameMode()).toBe(GameType.SIMPLE_GAME);
    });

    it("AC 3.1", (): void => {
        const game: Game = new Game(3, GameType.GENERAL_GAME);
        expect(game.getBoard().getRows()).toBe(3);
        expect(game.getBoard().getColumns()).toBe(3);
        expect(game.getGameMode()).toBe(GameType.GENERAL_GAME);
    });
});

import { BowlingGame } from "./bowlingGame";

describe("When playing bowling", () => {
  it("Should return 0 score if no pins are knocked down in any of the 10 game rolls", async () => {
    const game = new BowlingGame();

    const gameRolls = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];

    game.processGameRolls(gameRolls);

    const score = game.score;
    expect(score).toBe(0);
  });

  it("Should return 20 score if one pin is knocked down in each one of the 10 game rolls", async () => {
    const game = new BowlingGame();

    const gameRolls = [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ];

    game.processGameRolls(gameRolls);

    const score = game.score;
    expect(score).toBe(20);
  });

  it("Should return 20 score if you get an spare and then knock down 5 + 0 pins in the following roll", async () => {
    const game = new BowlingGame();

    const gameRolls = [
      [5, 5],
      [5, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];

    game.processGameRolls(gameRolls);

    const score = game.score;
    expect(score).toBe(20);
  });

  it("Should return 20 score if you get an strike and then knock down 2 + 3 pins in the following roll", async () => {
    const game = new BowlingGame();

    const gameRolls = [
      [10],
      [2, 3],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];

    game.processGameRolls(gameRolls);

    const score = game.score;
    expect(score).toBe(20);
  });

  it("Should return 300 score if you get 10 strikes plus 2 extra strikes", async () => {
    const game = new BowlingGame();

    const gameRolls = [
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10, 10],
    ];

    game.processGameRolls(gameRolls);

    const score = game.score;
    expect(score).toBe(300);
  });
});

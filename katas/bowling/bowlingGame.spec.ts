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
});

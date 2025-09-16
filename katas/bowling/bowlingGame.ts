class BowlingGame {
  constructor() {}

  get score() {
    return 0;
  }

  processGameRolls(gameRolls: number[][]) {
    let score = 0;
    gameRolls.forEach(([shotOne, shotTwo]) => {
      score += shotOne + shotTwo;
    });
  }
}

export { BowlingGame };

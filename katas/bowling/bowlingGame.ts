class BowlingGame {
  _score: number = 0;

  constructor() {}

  get score() {
    return this._score;
  }

  set score(score: number) {
    this._score = score;
  }

  processGameRolls(gameRolls: number[][]) {
    let score = 0;
    gameRolls.forEach(([shotOne, shotTwo]) => {
      score += shotOne + shotTwo;
    });

    this._score = score;
  }
}

export { BowlingGame };

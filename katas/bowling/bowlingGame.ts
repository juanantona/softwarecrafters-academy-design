class BowlingGame {
  _score: number = 0;
  _isSpare: boolean = false;

  constructor() {}

  get score() {
    return this._score;
  }

  processGameRolls(gameRolls: number[][]) {
    gameRolls.forEach(([shotOne, shotTwo]) => {
      if (this._isSpare) {
        this._score += shotOne;
        this._isSpare = false;
      }
      this._score += shotOne + shotTwo;
      this._isSpare = shotOne + shotTwo === 10;
    });
  }
}

export { BowlingGame };

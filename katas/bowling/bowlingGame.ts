class BowlingGame {
  _score: number = 0;
  _isSpare: boolean = false;
  _isStrike: boolean = false;

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
      if (this._isStrike) {
        this._score += shotOne + shotTwo;
        this._isStrike = false;
      }
      this._score += shotOne + shotTwo;
      this._isStrike = shotOne === 10;
      this._isSpare = shotOne + shotTwo === 10 && shotTwo !== 0;
    });
  }
}

export { BowlingGame };

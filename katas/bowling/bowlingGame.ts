class BowlingGame {
  _score: number = 0;
  _isSpare: boolean = false;
  _isStrike: boolean = false;

  constructor() {}

  get score() {
    return this._score;
  }

  processGameRolls(gameRolls: number[][]) {
    gameRolls.forEach((gameRoll) => {
      this.processGameRoll(gameRoll);
    });
  }

  private processGameRoll(gameRoll: number[]) {
    const [shotOne, shotTwo] = gameRoll;
    if (this._isSpare) {
      this._score += shotOne;
      this._isSpare = false;
    }
    if (this._isStrike) {
      this._score += shotOne + shotTwo;
      this._isStrike = false;
    }
    this._score += shotOne + shotTwo;
    this._isStrike = this.isStrike(shotOne);
    this._isSpare = this.isSpare(shotOne, shotTwo);
  }

  private isStrike(shotOne: number): boolean {
    return shotOne === 10;
  }

  private isSpare(shotOne: number, shotTwo: number): boolean {
    return shotOne + shotTwo === 10 && shotTwo !== 0;
  }
}

export { BowlingGame };

class BowlingGame {
  _score: number = 0;
  _isSpare: boolean = false;
  _isStrike: boolean = false;
  _isDoubleStrike: boolean = false;

  constructor() {}

  get score() {
    return this._score;
  }

  processGameRolls(gameRolls: number[][]) {
    gameRolls.forEach((gameRoll, gameRollIndex) => {
      this.processGameRoll(gameRoll, gameRollIndex);
    });
  }

  private processGameRoll(gameRoll: number[], gameRollIndex: number) {
    if (gameRollIndex !== 9) {
      const [shotOne, shotTwo] = gameRoll;
      const isCurrentStrike = this.isStrike(shotOne, shotTwo);
      const isCurrentSpare = this.isSpare(shotOne, shotTwo);
      if (this._isSpare) {
        this._score += shotOne;
        this._isSpare = false;
      }
      if (this._isStrike) {
        this._score += isCurrentStrike ? shotOne : shotOne + shotTwo;
      }
      if (this._isDoubleStrike) {
        this._score += isCurrentStrike ? shotOne : shotOne + shotTwo;
      }
      this._score += isCurrentStrike ? shotOne : shotOne + shotTwo;

      this._isDoubleStrike = this._isStrike && isCurrentStrike;
      this._isStrike = isCurrentStrike;
      this._isSpare = isCurrentSpare;
    } else {
      const [shotOne, shotTwo = 0, shotThree = 0] = gameRoll;
      if (this._isStrike) {
        this._score += shotOne;
      }
      if (this._isDoubleStrike) {
        this._score += shotOne + shotTwo;
      }
      this._score += shotOne + shotTwo + shotThree;
      this._isDoubleStrike = false;
      this._isStrike = false;
      this._isSpare = false;
    }
  }

  private isStrike(shotOne: number, shotTwo: number): boolean {
    return shotOne === 10 && shotTwo === undefined;
  }

  private isSpare(shotOne: number, shotTwo: number): boolean {
    return shotOne + shotTwo === 10 && shotTwo !== 0;
  }
}

export { BowlingGame };

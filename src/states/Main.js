import NumberGen from '../objects/NumberGen';

class Main extends Phaser.State {
    preload() {
        this._spriteNumber = null;
        this.numberGen = new NumberGen();
        this._workingButtons = true;
        this._higher = true;
        this._score = 0;
        this._currentNum = null;
    }

    create() {
        this.game.stage.backgroundColor = '#ff0';
        this._currentNum = this.numberGen.generate();

        this._spriteNumber = this.game.add.sprite(160, 240, "numbers");
        this._spriteNumber.anchor.setTo(0.5, 0.5);
        this._spriteNumber.frame = this._currentNum;
        this._addButtons();
    }


    clickedHigher() {
        this._higher = true;
        this.tweenNumber(true);
    }

    clickedLower() {
        this._higher = false;
        this.tweenNumber(false);
    }

    tweenNumber() {
        if (this._workingButtons) {
            this._workingButtons = false;
            let exitTween = this.game.add.tween(this._spriteNumber);
            exitTween.to({x: 420}, 500);
            exitTween.onComplete.add(this.exitNumber, this);
            exitTween.start();
        }
    }

    exitNumber() {
        console.log(this._spriteNumber);
        this._spriteNumber.x = -180;
        this._spriteNumber.frame = Math.floor(Math.random() * 10);
        let enterTween = this.game.add.tween(this._spriteNumber);
        enterTween.to({x: 160}, 500);
        enterTween.onComplete.add(this.enterNumber, this);
        enterTween.start();

    }

    enterNumber() {
        this._workingButtons = true;
        if ((this._higher && this._spriteNumber.frame < this._currentNum) ||
            (!this._higher && this._spriteNumber.frame > this._currentNum)) {
            console.log("Game over");
            //this.game.state.start("GameOver", true, false, this._score);
        } else {
            this._score++;
            this._currentNum = this._spriteNumber.frame;
        }
    }

    update() {

    }

    _addButtons() {
        let higherButton = this.game.add.button(160, 100, "higher", this.clickedHigher, this);
        higherButton.anchor.setTo(0.5, 0.5);
        let lowerButton = this.game.add.button(160, 380, "lower", this.clickedLower, this);
        lowerButton.anchor.setTo(0.5, 0.5);
    }

}

export default Main

class Preload extends Phaser.State {
    preload() {
        this.load.image('newgame', 'assets/newgame-top.png');
        this.game.load.spritesheet("numbers","assets/numbers.png",100,100); // Width in pixels of a single frame in the sprite sheet.
        this.game.load.image("higher","assets/higher.png");
        this.game.load.image("lower","assets/lower.png");
    }

    create() {
        this.add.button(this.world.centerX-400, 300, 'newgame', this._onNewGame, this);
    }

    _onNewGame() {
        console.log("Starting new game");
        this.state.start("Main");
    }
}

export default Preload;

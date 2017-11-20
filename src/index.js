import Boot from 'states/Boot';
import Preload from "./states/Preload";
import Main from "./states/Main";

class Game extends Phaser.Game {
    constructor() {
        super(500, 500, Phaser.AUTO, 'content', "game");
        this.state.add('Boot', Boot);
        this.state.add('Preload', Preload);
        this.state.add('Main', Main);
        this.state.start('Boot');
    }

}

new Game();

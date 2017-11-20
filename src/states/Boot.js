class Boot extends Phaser.State {
    preload() {
        this.load.image("loading","../../assets/loading.png");
    }
    create() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        console.log("Loading preload");
        this.game.state.start("Preload");
    }
}

export default Boot;

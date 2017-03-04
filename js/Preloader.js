Game.Preloader = function (game) {
    this.preloadBar = null;
}

Game.Preloader.prototype = {

    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX,
                                            this.world.centerY,
                                            "preloaderBar");

        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.time.advanceTiming = true;
        this.load.setPreloadSprite(this.preloadBar);;
    },

    create: function () {
        this.state.start("Level1");
    }

}
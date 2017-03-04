"use strict"

Game.Preloader = function (game) {
    this.logo = null;
};

Game.Preloader.prototype = {

    preload: function () {
        this.logo = this.add.sprite(this.world.centerX,
                                            this.world.centerY,
                                            "logo");

        this.logo.anchor.setTo(0.5, 0.5);
        this.time.advanceTiming = true;
        this.load.setPreloadSprite(this.logo);

        this.load.tilemap("map", _Paths.tilemaps + "Level1.csv");
        this.load.image("tileset", _Paths.tilesets + "spritesheet.png");

        this.load.spritesheet("player", _Paths.tilesets + "tutorial.png", 24, 25);
    },

    create: function () {
        this.state.start("Level1");
    }

};
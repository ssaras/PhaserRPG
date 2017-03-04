var Game = {};

Game.Boot = function (game) {

};

Game.Boot.prototype = {

    init: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
    },

    preload: function () {
        // this.load.image('logo', 'assets/preloader.png');
        this.load.image('logo', _Paths.images + 'phaser.png');
    },

    create: function () {
        this.state.start("Preloader");
    },
};
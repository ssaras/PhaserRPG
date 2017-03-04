Game.Level1 = function (game) { };

var map;
var layer;

var player;
var controls = {};
var playerSpeed = 150;
var jumpTimer = 0;

var music;

Game.Level1.prototype = {
    create: function () {

        this.stage.backgroundColor = "#0000ff";

        this.physics.arcade.gravity.y = 0; // 1400

        map = this.add.tilemap("map", 32, 32);
        
        map.addTilesetImage("tileset");
        
        layer = map.createLayer(0);
        
        layer.resizeWorld();

        map.setCollisionBetween(2,2);

        music = this.add.audio("worldmap");

        music.play();

        player = this.add.sprite(0, 200, "player");
        player.anchor.setTo(0.5, 0.5);

        // player.animations.add("idle", [1], 1, true);
        // player.animations.add("runUp", [35], 1, true);
        // player.animations.add("runDown", [1], 1, true);
        // player.animations.add("runRight", [24], 1, true);
        // player.animations.add("runLeft", [13], 7, true);

        player.animations.add("idle", [0,1], 1, true);
        player.animations.add("jump", [2], 1, true);
        player.animations.add("run", [3,4,5,6,7,8], 7, true);

        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;

        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            left: this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            up: this.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: this.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        }
    },

    update: function () {
        this.physics.arcade.collide(player, layer);

        player.body.velocity.x = 0;
        player.body.velocity.y = 0;

        if (controls.up.isDown) {
            player.animations.play("run");
            player.scale.setTo(1,1);
            player.body.velocity.y -= playerSpeed;
        }

        if (controls.down.isDown) {
            player.animations.play("run");
            player.scale.setTo(1,1);
            player.body.velocity.y += playerSpeed;
        }

        if (controls.right.isDown) {
            player.animations.play("run");
            player.scale.setTo(1,1);
            player.body.velocity.x += playerSpeed;
        }

        if (controls.left.isDown) {
            player.animations.play("run");
            player.scale.setTo(-1,1);
            player.body.velocity.x -= playerSpeed;
        }

        player.animations.play("idle");

    }
};
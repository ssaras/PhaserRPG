Game.Level1 = function (game) { 
    this.map;
    this.layer;
    this.player;
    this.controls = {};
    this.playerSpeed = 175;
    this.music;
};

Game.Level1.prototype = {
    create: function () {

        this.map = this.add.tilemap("map", 32, 32);        
        this.map.addTilesetImage("tileset");
        this.map.setCollisionBetween(2,2);
        
        this.layer = this.map.createLayer(0);
        this.layer.resizeWorld();       

        this.music = this.add.audio("worldmap");
        this.music.loopFull();

        this.player = this.add.sprite(0, 200, "player");
        this.player.frame = 58;
        this.player.anchor.setTo(0.5, 0.5);

        this.player.animations.add("idle", [58], 7, true);
        this.player.animations.add("runDown", [57,58,59], 7, true);
        this.player.animations.add("runLeft", [69,70,71], 7, true);
        this.player.animations.add("runRight", [81, 82, 83], 7, true);
        this.player.animations.add("runUp", [93,94,95], 7, true);

        this.camera.follow(this.player);
        this.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;

        this.controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            left: this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            up: this.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: this.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        }
    },

    update: function () {
        this.physics.arcade.collide(this.player, this.layer);

        // this.player.animations.play("idle");
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.controls.up.isDown) {
            this.player.animations.play("runUp");
            this.player.scale.setTo(1,1);
            this.player.body.velocity.y -= this.playerSpeed;
        }

        if (this.controls.down.isDown) {
            this.player.animations.play("runDown");
            this.player.scale.setTo(1,1);
            this.player.body.velocity.y += this.playerSpeed;
        }

        if (this.controls.right.isDown) {
            this.player.animations.play("runRight");
            this.player.scale.setTo(1,1);
            this.player.body.velocity.x += this.playerSpeed;
        }

        if (this.controls.left.isDown) {
            this.player.animations.play("runLeft");
            this.player.scale.setTo(1,1);
            this.player.body.velocity.x -= this.playerSpeed;
        }        

    }
};
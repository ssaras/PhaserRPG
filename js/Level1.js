Game.Level1 = function (game) { };

var map;
var layer;

Game.Level1.prototype = {
    create: function () {

        this.stage.backgroundColor = "#0000ff";
        
        map = this.add.tilemap("map", 32, 32);
        
        map.addTilesetImage("tileset");
        
        layer = map.createLayer(0);
        
        layer.resizeWorld();
    },

    update: function () {
        
    }
};
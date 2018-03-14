
define(['Tile'],function(Tile){
	
	var WallPaper = Tile.extend({
		init:function(_id){
			this._super(Tile.assets.wallpaper,_id);
		}
	});
	return WallPaper;
	
});
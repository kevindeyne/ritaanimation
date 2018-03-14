
define(['Tile'],function(Tile){
	
	var FloorMat = Tile.extend({
		init:function(_id){
			this._super(Tile.assets.floormat,_id);
		}
	});
	return FloorMat;
	
});
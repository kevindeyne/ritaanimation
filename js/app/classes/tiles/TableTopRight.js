
define(['Tile'],function(Tile){
	
	var TableTopRight = Tile.extend({
		init:function(_id){
			this._super(Tile.assets.tabletopright,_id);
		},
		isSolid:function(){
			return true;
		}
	});
	return TableTopRight;
	
});
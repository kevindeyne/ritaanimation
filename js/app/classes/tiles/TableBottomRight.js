
define(['Tile'],function(Tile){
	
	var TableBottomRight = Tile.extend({
		init:function(_id){
			this._super(Tile.assets.tablebottomright,_id);
		},
		isSolid:function(){
			return true;
		}
	});
	return TableBottomRight;
	
});
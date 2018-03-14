
define(['Tile'],function(Tile){
	
	var TableBottomLeft = Tile.extend({
		init:function(_id){
			this._super(Tile.assets.tablebottomleft,_id);
		},
        isSolid:function(){
            return true;
        }
	});
	return TableBottomLeft;
	
});
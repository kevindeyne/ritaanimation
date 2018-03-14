
define(['Tile'],function(Tile){
	
	var TableTopLeft = Tile.extend({
		init:function(_id){
			this._super(Tile.assets.tabletopleft,_id);
		},
        isSolid:function(){
            return true;
        }
	});
	return TableTopLeft;
	
});
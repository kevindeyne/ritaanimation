
define(['Class','Tile'],function(Class,Tile){
	var xOffset,yOffset,handler;
	var GameCamera = Class.extend({
		init:function(_handler,_xOffset,_yOffset){
			xOffset = _xOffset;
			yOffset = _yOffset;
			handler = _handler;
		},
		centerOnEntity:function(e){
			xOffset = e.getX() - handler.getWidth()/2 + e.getWidth()/2;
			yOffset = e.getY() - handler.getHeight()/2 + e.getHeight()/2;
			this.checkBlankSpace();
		},
		move:function(_xAmt,_yAmt){
			xOffset += _xAmt;
			yOffset += _yAmt;
			this.checkBlankSpace();
		},
		//Getters
		getxOffset:function(){
			return parseInt(xOffset);
		},
		getyOffset:function(){
			return parseInt(yOffset);
		},
		//Setters
		setxOffset:function(_offset){
			xOffset = _offset;
		},
		setyOffset:function(_offset){
			yOffset = _offset;
		},
		checkBlankSpace:function(){
			if(xOffset<0){
				xOffset = 0;
			}else if (xOffset > handler.getWorld().getWidth() * TILE.TILEWIDTH - handler.getWidth()){
				xOffset = handler.getWorld().getWidth() * TILE.TILEWIDTH - handler.getWidth();
			}
			if(yOffset<0){
				yOffset = 0;
			}else if (yOffset > handler.getWorld().getHeight() * Tile.TILEHEIGHT - handler.getHeight()){
				yOffset = handler.getWorld().getHeight() * Tile.TILEHEIGHT - handler.getHeight();
			}
		}
	});
	
	return GameCamera;
});
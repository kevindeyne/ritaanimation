
define(['Class'],function(Class){
	
	var game, world;
	
	var Handler = Class.extend({
		init:function(_game){
			game = _game;
		},
		
		getKeyManager:function() {
			return game.getKeyManager();
		},
	
		getWidth:function() {
			return game.getWidth();
		},
	
		getHeight:function() {
			return game.getHeight();
		},
		
		getGameCamera:function(){
			return game.getGameCamera();
		},
		getWorld:function(){
			return world;
		},
		setWorld:function(_world){
			world = _world;
		}
		
	});
	
	return Handler;
});
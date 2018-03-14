
define(['Entity'], function(Entity){
	
	var DEFAULT_CHARACTER_WIDTH = 600,
		DEFAULT_CHARACTER_HEIGHT = 1000;
	
	var Character = Entity.extend({
		init:function(_handler,_x,_y,_width,_height){
			this._super(_handler,_x,_y,_width,_height);
		}
	});
	
	//Static Variables
	Character.DEFAULT_CHARACTER_WIDTH = DEFAULT_CHARACTER_WIDTH;
	Character.DEFAULT_CHARACTER_HEIGHT = DEFAULT_CHARACTER_HEIGHT;
	
	return Character;
});
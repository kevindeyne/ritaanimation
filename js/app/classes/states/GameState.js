
define(['State','Player','World','Rita'],function(State,Player,World,Rita){
	var x = 0;
	var y = 0;
	var GameState = State.extend({
		init:function(_handler){
			this._super(_handler);
			this.player = new Player(_handler,20,20);
			this.world = new World("res/worlds/world1.txt",_handler);
			this.rita = new Rita(_handler,800,20);
		},
		
		tick:function(_dt){
			this.world.tick(_dt);
			this.player.tick(_dt);
			this.rita.tick(_dt);
		},
	
		render:function(_g){
			this.world.render(_g);
			this.player.render(_g);
			this.rita.render(_g);

		}			
	});

	return GameState;
});

	
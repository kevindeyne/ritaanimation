
define(['Character','Assets','Player'],function(Character,Assets,Player){
	var Rita = Character.extend({
		init:function(_handler,_x,_y){
			this._super(_handler,_x,_y,Character.DEFAULT_WIDTH,Character.DEFAULT_HEIGHT);
			this.assets = Assets.getAssets('rita');
			this.assets1 = Assets.getAssets('rita2');
		},
		
		tick:function(_dt){
		this.assets.animations.idlerita.tick();
		},
		
		render:function(_g){
			_g.myDrawImage(this.getCurrentAnimationFrameRita(),this.x,this.y,this.assets.width,this.assets.height);
			
		},
		getCurrentAnimationFrameRita:function(){
				return this.assets.animations.idlerita.getCurrentFrame();
		}
		
	});
	return Rita;
});
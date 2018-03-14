
define(['Character','Assets','Player'],function(Character,Assets,Player){
	var Rita = Character.extend({
		init:function(_handler,_x,_y){
			this._super(_handler,_x,_y,Character.DEFAULT_WIDTH,Character.DEFAULT_HEIGHT);
			this.assets = Assets.getAssets('rita');
			this.assets1 = Assets.getAssets('rita2');
			this.walk = Player.moving;
			this.charactersprite = Assets.getAssets('rita');
		},
		
		changeanimation:function(){
			if(this.walk=0){
				this.charactersprite = this.assets;
			}else{
				this.charactersprite = this.assets1;
			}
		},
		
		tick:function(_dt){
		this.charactersprite.animations.walkrita.tick();
		},
		
		render:function(_g){
			_g.myDrawImage(this.getCurrentAnimationFrameRita(),this.x,this.y,this.charactersprite.width,this.charactersprite.height);
			
		},
		getCurrentAnimationFrameRita:function(){
				return this.charactersprite.animations.walkrita.getCurrentFrame();
		}
		
	});
	return Rita;
});

define(['Character','Assets','Player','GameState'],function(Character,Assets,Player,GameState){
	var Rita = Character.extend({
		init:function(_handler,_x,_y,_gamestate){
			this._super(_handler,_x,_y,Character.DEFAULT_WIDTH,Character.DEFAULT_HEIGHT);
			this.gamestate = _gamestate;
			this.assets = Assets.getAssets('rita');
			this.assets1 = Assets.getAssets('rita2');
			this.ritaSpritesheet;
			this.ritaAnimation;
			this.changeAnimation();
		},
		
		changeAnimation:function(){
			if(this.gamestate.player.isMoving()){
				this.ritaSpritesheet = this.assets1;
				this.ritaAnimation = this.assets1.animations.walkrita;
			} else {
				this.ritaSpritesheet = this.assets;
				this.ritaAnimation = this.assets.animations.idlerita;
			}
		},
		
		tick:function(_dt){
			this.changeAnimation();
			this.ritaAnimation.tick();			
		},
		
		render:function(_g){
			_g.myDrawImage(this.getCurrentAnimationFrameRita(),this.x,this.y,this.ritaSpritesheet.width,this.ritaSpritesheet.height);
			
		},
		
		getCurrentAnimationFrameRita:function(){
			return this.ritaAnimation.getCurrentFrame();
		}
		
	});
	return Rita;
});
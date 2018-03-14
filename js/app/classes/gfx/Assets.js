
define(['Class','ImageLoader','SpriteSheet','Animation'],function(Class,ImageLoader,SpriteSheet,Animation){
	var DEFAULT_WIDTH = 64, DEFAULT_HEIGHT = 64;
	var assets = {};
	
	var Assets = Class.extend({
		init:function(_name,_path,_width,_height){
			assets[_name] = this;
			this.name = _name;
			this.path = _path;
			this.width = _width;
			this.height = _height;
			this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
			this.animations = {};
		},
		addAnimation:function(_name,_animation){
			this.animations[_name] = _animation;
		}
	});
	Assets.DEFAULT_WIDTH = DEFAULT_WIDTH;
	Assets.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
	Assets.getAssets = function(_name){
		return assets[_name];
	};
	
	//Create Player Assets
	var player = new Assets("player","res/textures/player.png",DEFAULT_WIDTH,DEFAULT_HEIGHT);
	
	//Build Frames
	var framespeed = 125,
	walkrightframes = [],
	walkleftframes = [],
	walkupframes = [],
	walkdownframes = [],
	walkrightrow = 3,
	walkleftrow = 2,
	walkuprow = 1,
	walkdownrow = 0;
	for(var i = 0;i<2;i++){
		walkrightframes.push({
			frame:player.sheet.crop(player.width * i,player.height * walkrightrow,player.width,player.height),
			speed:framespeed
		});
		walkleftframes.push({
			frame:player.sheet.crop(player.width * i,player.height * walkleftrow,player.width,player.height),
			speed:framespeed
		});
		walkupframes.push({
			frame:player.sheet.crop(player.width * i,player.height * walkuprow,player.width,player.height),
			speed:framespeed
		});
		walkdownframes.push({
			frame:player.sheet.crop(player.width * i,player.height * walkdownrow,player.width,player.height),
			speed:framespeed
		});
		
	}
	
	var idleframes = [
	{frame:player.sheet.crop(0,0,player.width,player.height),speed:framespeed*80},
	{frame:player.sheet.crop(player.width,0,player.width,player.height),speed:framespeed},
	{frame:player.sheet.crop(player.width * 2,0,player.width,player.height),speed:framespeed},
	];
	
	//Create Animations
	player.addAnimation("walk_right",new Animation(walkrightframes));
	player.addAnimation("walk_left",new Animation(walkleftframes));
	player.addAnimation("walk_up",new Animation(walkupframes));
	player.addAnimation("walk_down",new Animation(walkdownframes));
	player.addAnimation("idle",new Animation(idleframes));
	
	
	//rita asset
	var rita = new Assets("rita","res/textures/idlerita.png",600, 900);
	
	//Build Frames
	var framespeedrita = 400;
	
	var idleframesrita = [
	{frame:rita.sheet.crop(0,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(600,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(1200,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(1800,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(2400,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(3000,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(3600,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(4200,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(4800,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(5400,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(6000,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(6600,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita.sheet.crop(7200,0,rita.width,rita.height),speed:framespeedrita},

	];
	
	rita.addAnimation("idlerita",new Animation(idleframesrita));

		//rita asset
	var rita2 = new Assets("rita2","res/textures/ritawalk.png",600, 900);
	
	var walkframesrita = [
	{frame:rita2.sheet.crop(0,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(600,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(1200,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(1800,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(2400,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(3000,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(3600,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(4200,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(4800,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(5400,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(6000,0,rita.width,rita.height),speed:framespeedrita},
	{frame:rita2.sheet.crop(6600,0,rita.width,rita.height),speed:framespeedrita},

	];
	
	rita2.addAnimation("walkrita",new Animation(walkframesrita));
	
	//Tile Asset
	var tiles = new Assets("tiles","res/textures/indoors.png",64,64);
	tiles.grass = tiles.sheet.crop(128,64,64,64);
	tiles.dirt = tiles.sheet.crop(64,0,64,64);
	tiles.stone = tiles.sheet.crop(64,0,64,64);
	tiles.floormat = tiles.sheet.crop(64,64,64,64);
	tiles.wallpaper = tiles.sheet.crop(128,0,64,64);
	
	tiles.tabletopleft = tiles.sheet.crop(256,0,64,64);
	tiles.tabletopright = tiles.sheet.crop(320,0,64,64);
	tiles.tablebottomleft = tiles.sheet.crop(256,64,64,64);
	tiles.tablebottomright = tiles.sheet.crop(320,64,64,64);
	
	return Assets;
});
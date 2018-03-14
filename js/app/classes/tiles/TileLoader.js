
define(['Tile','GrassTile','StoneTile','DirtTile','FloorMat','WallPaper','TableTopLeft','TableTopRight','TableBottomLeft','TableBottomRight'],function(Tile,GrassTile,StoneTile,DirtTile,FloorMat,WallPaper,TableTopLeft,TableTopRight,TableBottomLeft,TableBottomRight){
	Tile.grassTile = new GrassTile(0);
	Tile.dirtTile = new DirtTile(1);
	Tile.stoneTile = new StoneTile(2);
	Tile.floorMat = new FloorMat(3);
	Tile.wallPaper = new WallPaper(4);
	Tile.tableTopLeft = new TableTopLeft(5);
	Tile.tableTopRight = new TableTopRight(6);
	Tile.tableBottomLeft = new TableBottomLeft(7);
	Tile.tableBottomRight = new TableBottomRight(8);
	return Tile;

});
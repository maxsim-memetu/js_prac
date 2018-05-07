console.log("hw");
var canvas = document.getElementById('game');
var ctx = canvas.getContext && canvas.getContext('2d');

if(!ctx) {
	alert('please upgrade browser');
} else {
	startGame();
}
function startGame() {
	ctx.fillStyle = "#FFFF00";
	ctx.fillRect(50, 100, 380, 400);
	//semi-transparent blue rectangle
	ctx.fillStype = "rgba(0,0,128,0.5);";
	ctx.fillRect(50, 100, 380, 400);
	//draw image
	var img = new Image();
	img.onload = function() {
		ctx.drawImage(img, 100, 100);
	}
	img.src = 'images/sprites.png'
}
var SpriteSheet = new function() {
	this.map = {};
	this.load = function(spriteData, callback) {
		this.map = spriteData,
		this.image = new Image();
		this.image.onload = callback;
		this.image.src = 'images/sprites.png';
	};
	this.draw = function(ctx, sprites, x, y, frame) {
		var s = this.map[sprites];
		if(!frame) frame=0;
		ctx.drawImage(this.image, s.sx+frame*s.w,
			s.sy,
			s.w,s.h,
			x,y,
			s.w,s.h);
	};
}
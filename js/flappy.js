// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score;
score = -1;

var player;

var backround;

var labelScore;

var pipeInterval;

var pipeBlock;

var pipes = [];

var changeScore;

var width = 790;

var height = 400;

var gameSpeed = 200;

var gameGravity = 200;

var jumpPower = 200;

var gapSize = 150;

var gapMargin = 200;

var blockHeight = 50;

var pipeEndExtraWidth = 10;

var pipeEndHeight = 10;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {

game.load.image("playerImg", "../assets/BarryC.png");

game.load.audio("krabs", "../assets/mr krabs.mp3");

game.load.audio("score", "../assets/Point2.wav");

game.load.image("pipeBlock","../assets/pipe.png");

game.load.image("pipeEnd","../assets/pipe-end.png");

game.load.image("Backround","../assets/Backround.png");

game.load.audio("flap", "../assets/flap.wav");

}
/*
 * Initialises the game. This function is only called once.
 */
function create() {

game.stage.setBackgroundColor("#F56AB6");

backround = game.add.sprite(0, 0, "Backround");

player = game.add.sprite(100, 100, "playerImg");
player.anchor.setTo(0.5, 0.5);

game.add.text(20, 20, "Bazjob Stimulator", {font: "30px Comic Sans MS", fill: "#FDEA21"});

labelScore = game.add.text(650, 100, "0");

game.physics.startSystem(Phaser.Physics.ARCADE);

game.physics.arcade.enable(player);

player.body.gravity.y = 300;

game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
										.onDown.add(moveRight);

game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
										.onDown.add(moveLeft);

game.input.keyboard.addKey(Phaser.Keyboard.UP)
										.onDown.add(moveUp);

game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
										.onDown.add(moveDown);

game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
										.onDown.add(spaceHandler);

game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
.onDown.add(playerJump);

game.input.onDown.add(clickHandler);

var pipeInterval = 1.75 * Phaser.Timer.SECOND;
game.time.events.loop(
    pipeInterval,
    generatePipe
);


}


function spaceHandler() {
		game.sound.play("flap");
    player.body.velocity.y = -150;
}
function moveRight() {
	player.body.velocity.x = 100;
}

function moveLeft() {
	player.body.velocity.x = -100;
}

function moveUp() {
	player.body.velocity.y = -150;
}

function moveDown() {
	player.body.velocity.y = 100;
}

function playerJump() {
		player.body.velocity.y = -150;
}
function clickHandler(event) {
    game.add.sprite(event.x, event.y, "playerImg");
	}

function addPipeEnd(x, y) {
	var pipeEnd = game.add.sprite(x,y,"pipeEnd");
	game.physics.arcade.enable(pipeEnd);
	pipes.push(pipeEnd);
	pipeEnd.body.velocity.x = -200;
}



function addPipeBlock(x, y) {
      var pipeBlock = game.add.sprite(x,y,"pipeBlock");
  game.physics.arcade.enable(pipeBlock);
      pipes.push(pipeBlock);

      pipeBlock.body.velocity.x = -200;
  }

	function generatePipe() {
	    var gapStart = game.rnd.integerInRange(gapMargin, height - gapSize - gapMargin);

	    addPipeEnd(width - (pipeEndExtraWidth / 2), gapStart - pipeEndHeight);
	    for(var y = gapStart - pipeEndHeight; y > 0; y -= blockHeight) {
	        addPipeBlock(width, y - blockHeight);
	    }

	    addPipeEnd(width - (pipeEndExtraWidth / 2), gapStart + gapSize);
	    for(var y = gapStart + gapSize + pipeEndHeight; y < height; y += blockHeight) {
	        addPipeBlock(width, y);
	    }

	    changeScore();
	}
  function changeScore() {
	score = score + 1;
  game.sound.play("score");
  labelScore.setText(score.toString());
}
function Fall() {
game.input.disabled = true;
}



/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
game.physics.arcade.overlap(
    player,
  pipes,
  gameOver
);

if(player.body.y < 0 || player.body.y > 400){
    gameOver();
}

function gameOver(){
game.input.disabled = false;
	score = -2;
game.state.restart();

}
player.rotation = Math.atan(player.body.velocity.y / 200);

}

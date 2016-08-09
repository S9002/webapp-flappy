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

var player;

var labelScore;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {

game.load.image("playerImg", "../assets/BarryB.png");

game.load.audio("score", "../assets/mr krabs.mp3");

game.load.image("pipeBlock","../assets/pipe.png");

}
/*
 * Initialises the game. This function is only called once.
 */
function create() {

game.stage.setBackgroundColor("#F56AB6");

player = game.add.sprite(395, 10, "playerImg");

game.add.text(20, 20, "Bazjob Stimulator", {font: "30px Comic Sans MS", fill: "#FDEA21"});

labelScore = game.add.text(650, 100, "0");

game.physics.startSystem(Phaser.Physics.ARCADE);

game.physics.arcade.enable(player);

player.body.gravity.y = 200;

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
}

function spaceHandler() {
		game.sound.play("score");
    player.body.velocity.y = -200;
}
function moveRight() {
	player.body.velocity.x = 100;
}

function moveLeft() {
	player.body.velocity.x = -100;
}

function moveUp() {
	player.body.velocity.y = -200;
}

function moveDown() {
	player.body.velocity.y = 100;
}

function playerJump() {
		player.body.velocity.y = -200;
}
function clickHandler(event) {
    game.add.sprite(event.x, event.y, "playerImg");
}
/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {


}

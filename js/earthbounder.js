// Earthbounder v0.1
// Written by Kevin Pageau
// ...with moderate help from resources all over the internets

// Graphics from Earthbound (SNES)

// Music / Sound effects from :
// Earthbound (SNES)
// Ducktales (NES)
// Legend of Zelda : Link's Awakening (GB)
// Legend of Zelda : Oracle of Ages/Seasons (GBC)

// Optimised for use with Google Chrome


if (!Object.prototype.debug) {
			Object.prototype.debug = function() {
				var text = "Object {\n";
				
				for (var i in this) {
					if (i !== "debug") {
						text += " [ " + i + "] ¬ " + this[i] + "\n";
					}
				}
				alert(text + "}");
			};
		}

// requestAnimationFrame function, used to animate game
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();








/*** CONSOLE ***/

// This part is used to create a console 
// that shows some variables value onscreen during gameplay


// Grab html div element
var console = document.getElementById("debug");
// Set display to none by default
console.style.display = "none";




// LEFT CONSOLE SIDE //
// Contains labels

// Create ul element for list of items & append to debug console div
var consoleItemsList = document.createElement("ul");

// Style for ul
consoleItemsList.style.cssText = "position:absolute;left:0;top:-17px;height:200px;width:100px;text-align:left;list-style-type:none;";

// Append it
console.appendChild(consoleItemsList);


// Create left list LI elements & append
var consoleItems = [];

for ( var i = 0 ; i < 9 ; i++ ) {
	consoleItems[i] = document.createElement("li");
}

consoleItems[0].innerHTML = "X";
consoleItems[1].innerHTML = "Y";
consoleItems[2].innerHTML = "Center";
consoleItems[3].innerHTML = "X Velocity";
consoleItems[4].innerHTML = "Y Velocity";
consoleItems[5].innerHTML = "Tick Count";
consoleItems[6].innerHTML = "Airborne";
consoleItems[7].innerHTML = "Y Offset";
consoleItems[8].innerHTML = "X Offset";

for ( var j = 0 ; j < 9 ; j++ ) {
	consoleItemsList.appendChild(consoleItems[j]);
}


// RIGHT CONSOLE SIDE //
// Contains data

// Create ul element for list of data & append to debug console div
var consoleDataList = document.createElement("ul");

// Style for ul
consoleDataList.style.cssText = "position:absolute;right:0;top:-17px;height:300px;width:100px;text-align:left;list-style-type:none;";

// Append it
console.appendChild(consoleDataList);


// Create right list li elements & append
var consoleData = [];

for (i = 0; i < 9 ; i++) {
	consoleData[i] = document.createElement("li");
	consoleData[i].id = "consoleData" + i;
}

for (j = 0 ; j < 9 ; j++) {
	consoleDataList.appendChild(consoleData[j]);
}












	
	
	
	
	
	
/*** IMAGES ***/

// Object to contain all images used by the game
var imageRepository = new function() {

	/* Define images */
	
	// Player standing still
	this.player = new Image();
	
	// Player walking left
	this.playerLeft1 = new Image();
	this.playerLeft2 = new Image();
	// Player walking right
	this.playerRight1 = new Image();
	this.playerRight2 = new Image();
	
	
	// Background
	this.bgDallam = new Image();
	this.bgOnett = new Image();
	this.bgOnettStars = new Image();
	
	// Obstacles
	
	this.regularObstacle = new Image();
	this.smallObstacle = new Image();
	this.largeObstacle = new Image();
	this.largerObstacle = new Image();
	this.bouncyObstacle = new Image();
	
	// Misc
	
	this.present = new Image();
	
	/* Set images SRC */
	
	this.player.src = "images/hero.png";
	
	this.playerLeft1.src = "images/heroleft1.png";
	this.playerLeft2.src = "images/heroleft2.png";
	this.playerRight1.src = "images/heroright1.png";
	this.playerRight2.src = "images/heroright2.png";
	
	this.bgDallam.src = "images/bg_dallam.png";
	this.bgOnett.src = "images/bg_onetta.png";
	this.bgOnettStars.src = "images/bg_onett_stars.png";
	
	this.regularObstacle.src = "images/regular_obstacle1.png";
	this.smallObstacle.src = "images/small_obstacle.png";
	this.largeObstacle.src = "images/large_obstacle.png";
	this.largerObstacle.src = "images/larger_obstacle.png";
	this.bouncyObstacle.src = "images/bouncy_obstacle.png";
	
	this.present.src = "images/present.png";
	
	
	/* Verify that all images are loaded */
	/* Then loads the game               */
	
	var numImages = 14;
	var numLoaded = 0;
	
	function imageLoaded() {
		numLoaded++;
		if (numLoaded === numImages) {
			update();
		}
	}
	
	
	
	
	
	this.player.onload = function() {
		imageLoaded();
	};
	this.playerLeft1.onload = function() {
		imageLoaded();
	};
	this.playerLeft2.onload = function() {
		imageLoaded();
	};
	this.playerRight1.onload = function() {
		imageLoaded();
	};
	this.playerRight2.onload = function() {
		imageLoaded();
	};
	
	
	this.bgDallam.onload = function() {
		imageLoaded();
	};	
	this.bgOnett.onload = function() {
		imageLoaded();
	};
	this.bgOnettStars.onload = function() {
		imageLoaded();
	};
	
	
	this.regularObstacle.onload = function() {
		imageLoaded();
	};	
	this.smallObstacle.onload = function() {
		imageLoaded();
	};		
	this.largeObstacle.onload = function() {
		imageLoaded();
	};		
	this.largerObstacle.onload = function() {
		imageLoaded();
	};		
	this.bouncyObstacle.onload = function() {
		imageLoaded();
	};	
	
	this.present.onload = function() {
		imageLoaded();
	};	

	
};
	
	
	
	

/*** SOUNDS ***/
	
	
var Sounds =  {
	
	// Music
	moon : new Audio("audio/_moon.wav"),
	
	// Sound effects
	hit : new Audio("audio/hit.wav"),
	yell : new Audio("audio/yell.wav"),
	itemGet1 : new Audio("audio/itemget1.wav"),
	itemGet2 : new Audio("audio/itemget2.wav"),
	jump : new Audio("audio/jump.wav"),
	bounce : new Audio("audio/bounce.wav"),
	
	
	
};

// Change all sound effects and music volume

Sounds.moon.volume = 0.4;
Sounds.hit.volume = 0.5;
Sounds.yell.volume = 0.5;
Sounds.itemGet1.volume = 0.3;
Sounds.itemGet2.volume = 0.3;
Sounds.jump.volume = 0.6;
Sounds.bounce.volume = 0.6;
	
Sounds.moon.loop = true;
//Sounds.moon.play();


	
	
	
	
	
/*** GENERAL VARIABLES ***/

// Get canvas elements, contexts & dimensions

// Main canvas (character, obstacles, foreground)
var canvas = document.getElementById("main"),
	ctx = canvas.getContext("2d"),
	canvasWidth = canvas.width,
	canvasHeight = canvas.height;

// Background canvas (starry background)
var bgCanvas = document.getElementById("background"),
	bgctx = bgCanvas.getContext("2d");
	
// Text canvas (any text)
var textCanvas = document.getElementById("text"),
	textctx = textCanvas.getContext("2d");
	
	
// Array under which user pressed keys are stored
// with a value of either true or false
var keys = [];


// Will contain anything the player can collide with
var boxes = [];


// Variable that increments everytime the game updates
// currently only used to animate player walking cycle
var tickCount = 0;


// Player friction to the ground
var friction = 0.8;

// Player attraction to the ground
var gravity = 0.3;
	
	
	
// Stores how far the X and Y offsets are
// these are used to calculate how the camera should follow
// the player around
var offsetX = 0;
var offsetY = 0;

	
// Variable with starry pattern for drawing repeated background across map
var pattern;
	
// Variable that can be toggled with keys 3 & 4
// When set to true, invisible obstacles will be rendered
var renderInvisible = false;
	
	
// How many presents the player needs to collect left
// before the level is complete
var presentsToCollect = 4;
	
// Game over variable
// When set to true, the endGame function is executed
var gameOver = false;
	
	
// Variable with small textbox html div, used to display
// restart text when game is over

var textBox = document.getElementById("textBox");
	
	

// Variable with player name

var pName;
	
	
	
/*** GAME OBJECTS ***/
	
/*/ Abstract object /*/
// can be used to make other objects inherit basic properties



function Drawable() {
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	
	this.speed = 0;
	
	this.init = function(x,y) {
		this.x = x;
		this.y = y;
	};

	this.draw = function() {
	
	};
}






/*/ Player object /*/



function Player() {

	this.width = 16;
	this.height = 24;
	
	this.speed = 4;
	this.velX = 0;
	this.velY = 0;
	
	// Health and lives
	// when lives reach 0, game over
	// when health reaches 0, -1 lives
	// player can lose health from long falls
	this.lives = 3;
	this.health = 3;
	
	this.jumping = false;
	this.doubleJumping = false;
	this.grounded = false;
	this.airborne = false;
	
	// Defines how high the player can jump
	this.jumpForce = 2;
	
	// Define if the player has the ability to double jump 
	//*implemented but currently disabled
	this.canDoubleJump = false;
	
	
	// Checkpoint property is where the player respawns
	this.checkpoint = [-25,546];
	
	// Changes value of the current checkpoint property
	this.changeCheckpoint = function(x,y) {
		this.checkpoint = [x,y];
	}
	
	this.initCheckpoint = function(x,y) {
		this.x = this.checkpoint[0];
		this.y = this.checkpoint[1];
	}
	
	
	// Player draw function
	this.draw = function() {
	
	
		// If player is airborne
		if (this.airborne) {
		
		
			// & Walking left
			if (this.velX < -0.5) {
				ctx.drawImage(imageRepository.playerLeft1, this.x, this.y);
				
			// & Walking right
			} else if (this.velX > 0.5) {
				ctx.drawImage(imageRepository.playerRight1, this.x, this.y);
				
			// Standing still
			} else {
				ctx.drawImage(imageRepository.player, this.x, this.y);
			}
			
			
		// If player is on the ground
		}else{
		
		
			// Walking left
			if (this.velX < -0.5) {
			
				if(tickCount < 30) {
					ctx.drawImage(imageRepository.playerLeft1, this.x, this.y);
				}else{
					ctx.drawImage(imageRepository.playerLeft2, this.x, this.y);
				}
				
				
			// Walking right
			}else if (this.velX > 0.5) {
			
				if(tickCount < 30) {
					ctx.drawImage(imageRepository.playerRight1, this.x, this.y);
				}else{
					ctx.drawImage(imageRepository.playerRight2, this.x, this.y);
				}
				
			// Standing still
			}else{
				ctx.drawImage(imageRepository.player, this.x, this.y);
			}
		
		}
	}



}



// Makes the Player object inherit properties from Drawable
Player.prototype = new Drawable();

// Instantiates player object and places it on map with init() method
var player = new Player();

player.initCheckpoint();

// Positions : 
// -25, 546 : outside cave on the left







/*/ Obstacles Objects /*/
// Any object the player can collide with


// Boundary object used only for boundary obstacles (invisible)

function Boundary(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;

	this.type = "boundary";
	this.bouncy = false;
}





// Regular obstacle object
function RegularObstacle(x,y,b) {
	this.x = x;
	this.y = y;
	this.width = 32;
	this.height = 29;
	
	// Sets whether the obstacle is bouncy or not
	this.bouncy = b;
	
	// Sets the obstacle's image so the render function
	// can draw the appropriate obstacle
	this.img = imageRepository.regularObstacle;
}




// Small obstacle object
function SmallObstacle(x,y,b) {
	this.x = x;
	this.y = y;
	this.width = 15;
	this.height = 15;
	
	this.bouncy = b;
	this.img = imageRepository.smallObstacle;
}




// Large obstacle object
function LargeObstacle(x,y,b) {
	this.x = x;
	this.y = y;
	this.width = 60;
	this.height = 29;
	
	this.bouncy = b;
	this.img = imageRepository.largeObstacle;
}



// Larger obstacle object
function LargerObstacle(x,y,b) {
	this.x = x;
	this.y = y;
	this.width = 112;
	this.height = 54;
	
	this.bouncy = b;
	this.img = imageRepository.largerObstacle;
}


// Bouncy obstacle object
function BouncyObstacle(x,y) {
	this.x = x;
	this.y = y;
	this.width = 36;
	this.height = 21;
	
	this.bouncy = true;
	
	// The obstacle's bounce force. The higher,
	// the farther the player will bounce on it
	this.bounceForce = 3.5;
	this.img = imageRepository.bouncyObstacle;
}


// Present obstacle object
// Collectable item that can be picked up by the player
function Present(x,y) {
	this.x = x;
	this.y = y;
	this.width = 16;
	this.height = 16;
	
	// Signifies whether this obstacle can be picked up or not
	this.collectible = true;
	this.img = imageRepository.present;

}




// Function which initializes all of the game obstacles


function initializeObstacles() {


	// BOUNDARIES (invisible obstacles)
	// Starts from left of cave
	
	
	boxes.push ( new Boundary(-225, canvasHeight - 50, 185, 8) ); // Horizontal
	boxes.push( new Boundary(-40,canvasHeight - 50, 3, 50) ); // Vertical

	// Initial Floor
	boxes.push( new Boundary(-50,canvasHeight - 10, 200, 8) ); // H

	
	// Right floating island platform
	
	boxes.push( new Boundary(540,540, 300, 8) ); // H
	
	boxes.push( new Boundary(750,440, 8,100 ) ); // V
	
	boxes.push( new Boundary(760,440, 180, 8) ); // H
	
	
	
	
	
	// PLATFORMS (visible obstacles)


	// Left stage part

	boxes.push ( new LargeObstacle(-300, 500, false) );
	boxes.push ( new RegularObstacle(-350, 700, false) );
	boxes.push ( new BouncyObstacle(-395, 780) );
	
	boxes.push ( new LargeObstacle(-500, 500, false) );
	boxes.push ( new LargeObstacle(-750, 500, false) );

	
	// Farther left
	
	boxes.push ( new RegularObstacle(-850, 400, false) );
	boxes.push ( new BouncyObstacle(-900, 400, false) );
	
	boxes.push ( new RegularObstacle(-980, 90, false) );
	
	boxes.push ( new RegularObstacle(-1100, 200, false) );
	boxes.push ( new RegularObstacle(-1050, 320, false) );
	
	boxes.push ( new LargerObstacle(-1350, 120, false) );
	boxes.push ( new Present(-1300, 110) );
	

	// Going under mainland platform & right
	
	boxes.push ( new SmallObstacle(-250, 800, false) );
	boxes.push ( new SmallObstacle(-125, 900, false) );
	boxes.push ( new SmallObstacle(75, 900, false) );
	boxes.push ( new RegularObstacle(125, 1100, false) );
	boxes.push ( new BouncyObstacle(200, 1100, false) );
	boxes.push ( new BouncyObstacle(500, 1100, false) );
	boxes.push ( new BouncyObstacle(500, 850, false) );
	
	boxes.push ( new Present(350, 780, false) );
	

	//player.initCheckpoint();
	//player.init(463,476);
	
	
	// Right stage part over platforms

	boxes.push( new LargeObstacle(215, 500, false) );
	
	boxes.push( new BouncyObstacle(315, 600, false) );
	boxes.push( new BouncyObstacle(315, 240, false) );
	
	boxes.push( new LargeObstacle(415, 500, false) );

	
	boxes.push( new Present(835, 425, false) );
	
	
	// Going up then left
	
	boxes.push( new LargerObstacle(190, -80, false) );
	
	boxes.push( new RegularObstacle(0, -100, false) );
	
	boxes.push( new SmallObstacle(-100, -200, false) );
	boxes.push( new Present(-100, -215, false) );




}




/*** UPDATE GAME OBJECTS ***/
// All main game functions that update the game
// and render it


// Function that updates the debugging console
// with important variables
function updateConsole() {

	var cdata0 = document.getElementById("consoleData0");
	var cdata1 = document.getElementById("consoleData1");
	var cdata2 = document.getElementById("consoleData2");
	var cdata3 = document.getElementById("consoleData3");
	var cdata4 = document.getElementById("consoleData4");
	var cdata5 = document.getElementById("consoleData5");
	var cdata6 = document.getElementById("consoleData6");
	var cdata7 = document.getElementById("consoleData7");
	var cdata8 = document.getElementById("consoleData8");
	
	
	cdata0.innerHTML = Math.floor(player.x);
	cdata1.innerHTML = Math.floor(player.y);
	cdata2.innerHTML = Math.floor( player.x + ( player.width / 2 ) ) + " , " + Math.floor( player.y + (player.height / 2) );
	cdata3.innerHTML = Math.round( player.velX );
	cdata4.innerHTML = Math.round( player.velY );
	cdata5.innerHTML = tickCount;
	cdata6.innerHTML = player.airborne;
	cdata7.innerHTML = Math.round(offsetY);
	cdata8.innerHTML = Math.round(offsetX);
	
}



// Function that checks if player is colliding with something

function colCheck (shapeA, shapeB) {

	// Get the vectors to check against
	// Vector X : Horizontal distance between center of shapeA and center of shapeB
	// Vector Y : Vertical distance between center of shapeA and center of shapeB
	var vX = ( shapeA.x + (shapeA.width / 2) ) - ( shapeB.x + (shapeB.width / 2) );
	var vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2));
	
	//  Add the half widths and half heights of the objects
	var hWidths = (shapeA.width / 2) + (shapeB.width / 2);
	var hHeights = (shapeA.height / 2) + (shapeB.height / 2);
		
	// Variable under which the collision direction is stored
	var colDir = null;
		
	// If x and y vector are less than the half width or half height,
	// then the objects must be colliding
	if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
	
		// If the shape collided with has a collectible property
		if (shapeB.collectible) {
			colDir = "c";
			return colDir;
		}
		// Figures out which side the collision is from
		// Offset X - Y : This figures out how far into the object
		// we currently are
		var oX = hWidths - Math.abs(vX);
		var oY = hHeights - Math.abs(vY);
			
		// If the X offset is larger than the Y offset, we can assume the collision
		// is either from the top or the bottom. The greater penetration cannot be *in* the
		// object, because it would have been caught much sooner
		
		if (oX >= oY) {
			if (vY > 0) {
			
				// If the shape collided with has a bouncy property
				if (shapeB.bouncy) {
					// Bounce up with the obstacle's bounce force property
					shapeA.velY = -shapeA.speed * shapeB.bounceForce;
					colDir = "bb";
				}else{
					colDir = "t";
					shapeA.y += oY;
				}
			}else{
				
				if (shapeB.bouncy) {
					shapeA.velY = -shapeA.speed * shapeB.bounceForce;
					colDir = "bb";
				}else{
					colDir = "b";
					if (shapeA.velY < 13) {
						shapeA.y -= oY;
					}
				}
			}
			
		}else{
			if (vX > 0) {
				colDir = "l";
				shapeA.x += oX;
			}else{
				colDir = "r";
				shapeA.x -= oX;
			}
		}
	}
	return colDir;	
}



// Function that takes the results from the colision check function, 
// and then applies further appropriate changes in consequence
function applyCol() {

	for (var i = 0; i < boxes.length; i++) {
		
			var dir = colCheck(player,boxes[i]);
			
			// If player collision is at the left or right
			if (dir === "l" || dir === "r") {
				player.velX = 0;
				player.jumping = false;
				
				if (dir === "l") {
					offsetX-=2;
				}
				
				if (dir === "r") {
					offsetX+=2;
				}
				
			// If player collision is at the bottom
			}else if (dir === "b") {
				player.grounded = true;
				player.airborne = false;
				player.jumping = false;
				player.doubleJumping = false;
				
				
				// If player collides against a floor at a high speed,
				// deduct his health, play a sound and randomly stagger
				// him left or right
				
				if (player.velY > 13) {
					
					player.health--;
					Sounds.hit.play();
					player.velY = -10;
					
					if (tickCount < 30) {
						player.velX += 5;
						
					}else{
						player.velX -=5;
					}
				}
				
				
			// If player collision is at the top
			}else if (dir === "t") {
				player.velY *= -0.5;
				
			// If player collision is on a bouncy obstable
			}else if (dir === "bb") {
				
				// Set the src, and then play to allow the audio to play
				// many times repeatedly
				Sounds.bounce.src = "audio/bounce.wav";
				Sounds.bounce.play();
				
			// If the player collision is with a collectible object
			}else if (dir === "c") {
				boxes.splice(i,1);
				presentsToCollect--;
				Sounds.itemGet1.play();
				
			}
			
			
			
	}
}


// Function that checks the player's condition
// It checks if the player has fallen through the stage,
// his health and his life count
function checkPlayerCondition() {

	if (player.health < 1) {
		player.lives--;
		player.initCheckpoint();
	}

	if (player.y > 1350) {
		
		Sounds.yell.play();
		player.lives--;
		player.grounded = true;
		player.airborne = false;
		player.jumping = false;
		player.velY = 0;
		player.health = 3;
		
		if (player.lives > 0) {
			player.init(-25, 546);
		}

	
	}
	
	if (player.lives < 1) {
		player.init(-200,-200);
		gameOver = true;
	}

}


// Function that executes when the player has no lives left
function endGame() {

	// Moves the player out of the way
	player.init(1100,1000);
	
	//Sets gravity to 0 so player does not fall
	gravity = 0;
	
	// Clears drawing of the player
	ctx.clearRect(player.x,player.y,player.width,player.height);
	
	// Write GameOver text
	textctx.font = "25px pixelmixregular";
	textctx.fillText("GAME OVER", 290,210);
	
	// Display the textbox with "restart" prompt
	
	textBox.style.display = "block";
}


// Function that executes when the player collects all the presents
function winGame() {

	// Clear the entire screen text
	textctx.clearRect(0,0,1000,1000);
	
	
	textctx.font = "25px pixelmixregular";
	textctx.fillText(pName + " EST LE BEST!", 200,210);
	textBox.style.display = "block";

}


// Function that adds event listeners to the game

// The event listeners place user pressed keys
// in the keys array with a true value, then with
// a false value when the user lets go of the key

// Also directly handles console display
// and invisible obstacles rendering
function addControls() {
	document.body.addEventListener("keydown", function(e) {
		
		// When a key is pressed down, it's stored in the keys array
		// with a true value
		keys[e.keyCode] = true;
		
		
		// Keys 1 and 2 : toggles console display on and off
		if (e.keyCode == 50) {
			console.style.display = "none";
		}
		
		if (e.keyCode == 49) {
			console.style.display = "block";
		}
		
		
		// Keys 3 and 4 : toggles invisible obstacles rendering on and off
		if (e.keyCode == 51) {
			renderInvisible = true;
		}
		
		if (e.keyCode == 52) {
			renderInvisible = false;
		}
		
	});
		
		
	document.body.addEventListener("keyup", function(e) {
		// When a key is let go of, its value becomes false
		keys[e.keyCode] = false;
	});

}


// Function that handles the user controls and
// changes game variables in consequence
function handleControls() {

	var doubleJumpReady = false;
	
	// up arrow
	if (keys[38]) {
		if (!player.jumping && player.grounded) {
		
			// Player sound effect when player jumps
			Sounds.jump.play();
			
			player.jumping = true;
			player.grounded = false;
			player.velY = -player.speed * player.jumpForce;
			
			// When player jumps, an important amount is added to the Y velocity,
			// propulsing the player upwards. The player then comes back down
			// due to gravity.

		}
		
		// If the double jumping ability is ready, the double jump activates
		if (doubleJumpReady) {
		
			// The audio source is replaced and then played again
			// this makes it so the sound can play in quick repetition
			// following the jump sound
			Sounds.jump.src = "audio/jump.wav";
			Sounds.jump.play();
			
			doubleJumpReady = false;
			player.doubleJumping = true;
			player.velY = -player.speed * player.jumpForce * 0.8;
		}

	}

	// If the player is airborne, isn't currently pressing the up key and
	// isn't currently double jumping, the double jump is ready
	if (keys[38] == false && !player.doubleJumping && player.airborne && player.canDoubleJump) {
		doubleJumpReady = true;
	}
	
	
	// right arrow
	if (keys[39]) {
		if (player.velX < player.speed) {
			player.velX++;
		}
	}	
	
	
	// left arrow
	if (keys[37]) {
		if (player.velX > -player.speed) {
			player.velX--;
		}
		
	}
}





// UPDATING
// Main game function that updates game objects
function update() {

	// If the gameOver variable is set to true, the game is over and
	// the gameOver function is executed
	if (gameOver) {
		endGame();
	}
	
	if (presentsToCollect < 1) {
		winGame();
	}

	// Handle the user controls (only if the game isn't over)
	
	if (!gameOver) {
		handleControls();
	}

	
	// Apply friction to horizontal velocity
	player.velX *= friction;
	
	// Apply gravity to vertical velocity,
	// constantly pushing player down
	player.velY += gravity;
	
	// Set player grounded to false so it can
	// fall off ledges
	player.grounded = false;
	
	// If the player Y velocity is higher than 0.5, or lower than -0.5,
	// the player airborne property is set to true. This property will then only
	// be set to false when the player collides with the ground
	if (player.velY > 0.5 || player.velY < -0.5) {
		player.airborne = true;
	}
	
	
	
	// Check collision with character & all box obstacles
	applyCol();
	
	
	
	
	
	// If player is grounded, his Y velocity is 0
	if (player.grounded) {
		player.velY = 0;
	}
	
	
	// Calculates jumping momentum so player does not stop in midair
	// when he lets go of the left or right arrows
	if (player.airborne && player.velX > 0) {
		player.velX *= 1.1;
	}
	
	if (player.airborne && player.velX < 0) {
		player.velX *= 1.1;
	}
	
	player.x += player.velX;
	player.y += player.velY;
	
	
	// Checks the player's condition
	checkPlayerCondition();
	
	
	
	// Call function that updates the console
	updateConsole();


	render();


	// Call function that animates update
	requestAnimationFrame(update);
	
}




// Function that handles most of the text to be written onscreen
function writeMsg() {

	// Clear the previous frame of the bottom left corner text
	textctx.clearRect(10,540,500,30);
	// Clear the previous frame of the top left corner text
	textctx.clearRect(10,25,200,50);
	
	
	textctx.fillStyle = "rgb(250, 250, 250)";
	textctx.font = "15px pixelmixregular";
	textctx.textAlign = "left";
	textctx.textBaseline = "top";

	
	

	// Only write if the game isn't over
	if (!gameOver){
	
		textctx.fillText("Nb Vies : " + player.lives, 18, 25);
		textctx.fillText("Sante : " + player.health, 18, 50);
		
		if (presentsToCollect <= 5) {
			textctx.fillText("Nombre de cadeaux restants : " + presentsToCollect, 18, 540);
		}else{
			//textctx.fillText("Tous les cadeaux sont recueillis! Retournez au début.");
		}
		
	}
	
	
}




// RENDERING //
// This function renders the game objects on the screen

function render() {
	writeMsg();
	
	// CAMERA
	// This part is used to move the camera around
	// along with the player
	
	// Y offset - used to translate camera vertically
	// The camera locks at 350 pixels under the player
	offsetY =  player.y - 350;
	
	if (offsetY < 0) {
		offsetY = Math.abs(offsetY);
	}else if (offsetY > 0) {
		offsetY = offsetY *= -1;
	}
	
	
	// X offset - used to translate camera vertically
	// The camera locks at half the canvas width
	offsetX =  player.x - (canvasWidth / 2);
	
	if (offsetX < 0) {
		offsetX = Math.abs(offsetX);
	}else if (offsetX > 0) {
		offsetX = offsetX *= -1;
	}
	
	
	// Clear previous frame drawing
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	bgctx.clearRect(0,0,canvasWidth,canvasHeight);
	
	ctx.save();
	bgctx.save();
	
	// Canvas context moves around along with the X and Y offsets
    ctx.translate(offsetX, offsetY);
	//bgctx.translate(offsetX*0.5, offsetY*0.5);
	
	

	
	
	// DRAW BACKGROUND //
	
	// First background
	ctx.drawImage(imageRepository.bgOnett, -320, 0);
	
	
	// Second background (Starry sky)
	pattern = bgctx.createPattern(imageRepository.bgOnettStars, "repeat");
	
	bgctx.beginPath();
	bgctx.fillStyle = pattern;
	bgctx.rect(0,0,800,800);
	bgctx.fill();
	
	
	
	
	// Ticks used for animating player walk cycle
	// The higher the incrementation, the faster the animations
	tickCount+= 3;
	
	if (tickCount >= 60) {
		tickCount = 0;
	}
	
	// DRAW PLAYER //
	// Uses different image depending on 
	// player's walking direction & airborne status
	// doesn't draw if the game is over
	
	if (!gameOver) {
		player.draw();
	}
	
	
	
	ctx.beginPath();
 
	// DRAW OBSTACLES
	
	// For loop that draws all of the obstacles in the boxes array
	// It checks the type property of the object in order to draw the correct image

	for (var j = 0; j < boxes.length; j++) {
	

		
		// If the box is set to bouncy, its appearance will be a bit different, with
		// an added overlay
		if (boxes[j].type != "boundary") {
			ctx.drawImage(boxes[j].img, boxes[j].x, boxes[j].y);
		}
		
		
		// Boundary obstacles. Only drawn if renderInvisible variable is set to true
		if (boxes[j].type == "boundary" && renderInvisible) {
			ctx.fillStyle = "black";
			ctx.rect(boxes[j].x, boxes[j].y, boxes[j].width, boxes[j].height);
			ctx.fill();
		}
		
		
		
	}
	
	ctx.fill();
	ctx.restore();
	bgctx.restore();

}



// This function is used to start the game for the first time
function startGame() {

	var playerName = document.getElementById("playername").value;
	
	if (playerName == "") {
		return false;
	}else{
	
		// Store player name in pName variable
		pName = playerName;
		// Remove display of the intro screen
		document.getElementById("intro").style.display = "none";
		// Add event listeners controls
		addControls();
		//Sounds.moon.play();
	}


}





// This function resets everything to its original value
// and restarts the game
function restartGame() {

	player.lives = 3;
	player.health = 3;
	
	// Resets gameOver variable, gravity and the presents to collect count
	gameOver = false;
	gravity = 0.3;
	presentsToCollect = 4;
	
	// Clear "Game Over" text
	textctx.clearRect(0,0, canvasWidth,canvasHeight);
	
	// Reset player position on the screen
	player.init(-25, 546);
	
	
	// Hide the restart textBox display
	textBox.style.display = "none";
	
	// Remove everything from the boxes array, then re-initialize it
	boxes = [];
	initializeObstacles();
	
}


// Initialize all obstacles
initializeObstacles();


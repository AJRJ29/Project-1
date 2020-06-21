var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var startButton = document.querySelector(".start");
var brickOffsetTop = 30;
var brickOffsetLeft = 60;
var brickRow = 3;
var brickColumn = 5;
var brickWidth = 60;
var brickHeight = 20;
var brickPadding = 15;
var score = 0

var bricks = [
  [ { x: 60, y: 50, status: 1 }, { x: 135, y: 50, status: 1 }, { x: 210, y: 50, status: 1 },{ x: 285, y: 50, status: 1 }, { x: 360, y: 50, status: 1 } ],
  [ { x: 60, y: 95, status: 1 }, { x: 135, y: 95, status: 1 }, { x: 210, y: 95, status: 1 },{ x: 285, y: 95, status: 1 }, { x:  360, y: 95, status: 1 } ],
  [ { x: 60, y: 140, status: 1 }, { x: 135, y: 140, status: 1 }, { x: 210, y: 140, status: 1 },{ x: 285, y: 140, status: 1 }, { x: 360, y: 140, status: 1 } ],
];


var paddle = {
  x: 202,
  y: 310,
  width: 75,
  height: 10,
} 

var ball = {
  x: 240,
  y: 290, 
  radius: 10,
  width: 10,
  height: 0,
  arc: Math.PI * 2,
  speedX: 2,
  speedY: -2
}
//ball will have a random number of an x range lenght
//the width of the canvas 450 
//range of the 2 y value 
//height of the canvas 290-200 

function randomizeBall() {
  //randomize x and y value
  ball.y = Math.round(Math.random() * 90) + 200;
  ball.x = Math.round(Math.random() * 440) + 20;
}

function drawPaddle() {
  ctx.beginPath()
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height)
  ctx.fillStyle = "lightblue"
  ctx.fill()
  ctx.closePath()
}

function drawBall() {
  ctx.beginPath()
  ctx.arc(ball.x, ball.y, ball.radius, ball.width, ball.height, ball.arc, ball.speedX, ball.speedY)
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.closePath()
}

function drawBricks() {
  for(var c = 0; c < brickColumn; c++) {
    for(var r = 0; r < brickRow; r++) {
      if(bricks[r][c].status == 1) {
        ctx.beginPath();
        ctx.rect(bricks[r][c].x, bricks[r][c].y, brickWidth, brickHeight);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function brickBallCollision() {
  for(var c = 0; c < brickColumn; c++) {
    for(var r = 0; r < brickRow; r++) {
      if(bricks[r][c].status == 1) {   
        if(ball.x + ball.radius >= bricks[r][c].x && ball.x - ball.radius <= bricks[r][c].x + brickWidth && ball.y + ball.radius >= bricks[r][c].y && ball.y - ball.radius <= bricks[r][c].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[r][c].status = 0
          score = score + 1
          if(score == 15) {
            alert ("Congrats 😎")
          }
        }  
      }
    }
  }  
}

function drawFunction() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()
  drawPaddle()
  drawBricks()
  brickBallCollision()
  
  if(ball.x + ball.radius >= canvas.width || ball.x < 0) {
    ball.speedX = -ball.speedX
  }
  if(ball.x > paddle.x && ball.x < paddle.x + paddle.width && ball.y + ball.radius >= paddle.y) {
    ball.speedY = -ball.speedY; 
  } 
  if(ball.y + ball.radius >= canvas.height) {
    alert("Loser")
    clearInterval(interval)
    }
  if(ball.y < 0) {
    ball.speedY = -ball.speedY;
  }

  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY;
}

function movementHandler(e) {
  switch(e.key) {
    case "a":
     paddle.x = paddle.x - 30
     break;
    case "d":
      paddle.x = paddle.x + 30
      break;
  }

}

document.addEventListener("keydown", movementHandler);
startButton.addEventListener("click", startGame);

function startGame() {
  randomizeBall();
  //will start game
  //things that starts when the game load
    //Ball (is visible on page load but not moving)
    //paddle (canot move when page load)

  interval = setInterval(drawFunction, 10)
}

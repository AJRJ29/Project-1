var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var brickOffsetTop = 30;
var brickOffsetLeft = 60;
var brickRow = 2;
var brickColumn = 5;
var brickWidth = 60;
var brickHeight = 20;
var brickPadding = 15;
var score = 0


var bricks = [
  [ { x: 60, y: 50, status: 1 }, { x: 135, y: 50, status: 1 }, { x: 210, y: 50, status: 1 },{ x: 285, y: 50, status: 1 }, { x: 360, y: 50, status: 1 } ],
  [ { x: 60, y: 95, status: 1 }, { x: 135, y: 95, status: 1 }, { x: 210, y: 95, status: 1 },{ x: 285, y: 95, status: 1 }, { x: 360, y: 95, status: 1 } ],
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
  speedY: 2
}

function drawBricks() { 
  if(bricks[0][0].status == 1) {
    ctx.beginPath();
    ctx.rect(bricks[0][0].x, bricks[0][0].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  } 
  if(bricks[0][1].status == 1) {
    ctx.beginPath();
    ctx.rect(bricks[0][1].x, bricks[0][1].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }
  if(bricks[0][2].status == 1) { 
    ctx.beginPath();
    ctx.rect(bricks[0][2].x, bricks[0][2].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  } 
  if(bricks[0][3].status == 1) {  
    ctx.beginPath();
    ctx.rect(bricks[0][3].x, bricks[0][3].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  } 
  if(bricks[0][4].status == 1) { 
    ctx.beginPath();
    ctx.rect(bricks[0][4].x, bricks[0][4].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  } 
  if(bricks[1][0].status == 1) {  
    ctx.beginPath();
    ctx.rect(bricks[1][0].x, bricks[1][0].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }  
  if(bricks[1][1].status == 1) { 
    ctx.beginPath();
    ctx.rect(bricks[1][1].x, bricks[1][1].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }    
  if(bricks[1][2].status == 1) {
    ctx.beginPath();
    ctx.rect(bricks[1][2].x, bricks[1][2].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }  
  if(bricks[1][3].status == 1) {
    ctx.beginPath();
    ctx.rect(bricks[1][3].x, bricks[1][3].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }
  if(bricks[1][4].status == 1) {
    ctx.beginPath();
    ctx.rect(bricks[1][4].x, bricks[1][4].y, brickWidth, brickHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }
}

function brickBallCollision() {
  if(bricks[0][0].status == 1) {   
    if(ball.x + ball.radius > bricks[0][0].x && ball.x + ball.radius < bricks[0][0].x + brickWidth && ball.y + ball.radius > bricks[0][0].y && ball.y + ball.radius < bricks[0][0].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[0][0].status = 0
          score = score + 1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
  if(bricks[0][1].status == 1) {  
    if(ball.x + ball.radius > bricks[0][1].x && ball.x + ball.radius < bricks[0][1].x + brickWidth && ball.y + ball.radius > bricks[0][1].y && ball.y + ball.radius < bricks[0][1].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[0][1].status = 0
          score = score + 1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
  if(bricks[0][2].status == 1) {  
    if(ball.x + ball.radius > bricks[0][2].x && ball.x + ball.radius < bricks[0][2].x + brickWidth && ball.y + ball.radius > bricks[0][2].y && ball.y + ball.radius < bricks[0][2].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[0][2].status = 0
          score = score + 1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
  if(bricks[0][3].status == 1) {  
    if(ball.x + ball.radius > bricks[0][3].x && ball.x + ball.radius < bricks[0][3].x + brickWidth && ball.y + ball.radius > bricks[0][3].y && ball.y + ball.radius < bricks[0][3].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[0][3].status = 0
          score = score + 1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
  if(bricks[0][4].status == 1) {  
    if(ball.x + ball.radius > bricks[0][4].x && ball.x + ball.radius < bricks[0][4].x + brickWidth && ball.y + ball.radius > bricks[0][4].y && ball.y + ball.radius < bricks[0][4].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[0][4].status = 0
          score = score + 1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
  if(bricks[1][0].status == 1) {  
    if(ball.x + ball.radius > bricks[1][0].x && ball.x + ball.radius < bricks[1][0].x + brickWidth && ball.y + ball.radius > bricks[1][0].y && ball.y + ball.radius < bricks[1][0].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[1][0].status = 0
          score = score + 1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
  if(bricks[1][1].status == 1) {  
    if(ball.x + ball.radius > bricks[1][1].x && ball.x + ball.radius < bricks[1][1].x + brickWidth && ball.y + ball.radius > bricks[1][1].y && ball.y + ball.radius < bricks[1][1].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[1][1].status = 0
          score = score +1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
  if(bricks[1][2].status == 1) {  
    if(ball.x + ball.radius > bricks[1][2].x && ball.x + ball.radius < bricks[1][2].x + brickWidth && ball.y + ball.radius > bricks[1][2].y && ball.y + ball.radius < bricks[1][2].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[1][2].status = 0
          score = score +1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
  if(bricks[1][3].status == 1) {  
    if(ball.x + ball.radius > bricks[1][3].x && ball.x + ball.radius < bricks[1][3].x + brickWidth && ball.y + ball.radius > bricks[1][3].y && ball.y + ball.radius < bricks[1][3].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[1][3].status = 0
          score = score +1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
  if(bricks[1][4].status == 1) {  
    if(ball.x + ball.radius > bricks[1][4].x && ball.x + ball.radius < bricks[1][4].x + brickWidth && ball.y + ball.radius > bricks[1][4].y && ball.y + ball.radius < bricks[1][4].y + brickHeight) { 
          ball.speedY = -ball.speedY
          bricks[1][4].status = 0
          score = score +1
          if(score == 10) {
            alert ("U Won Bitch")
          }
    }
  }
}

function drawPaddle() {
  ctx.beginPath()
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height)
  ctx.fillStyle = "blue"
  ctx.fill()
  ctx.closePath()
}

function drawBall() {
  ctx.beginPath()
  ctx.arc(ball.x, ball.y, ball.radius, ball.width, ball.height, ball.arc, ball.speedX, ball.speedY)
  ctx.fillStyle = "blue"
  ctx.fill()
  ctx.closePath()
}

function drawFunction() {
  ctx.clearRect(0 , 0, canvas.width, canvas.height)
  drawBall()
  drawPaddle()
  drawBricks()
  brickBallCollision()
  
  if(ball.x + ball.radius == canvas.width || ball.x == ball.radius) {
    ball.speedX = -ball.speedX
  }
  else if(ball.y + ball.radius == canvas.height) {
    if(ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.speedY = -ball.speedY; 
    } else {
      alert("Loser 🤣")
      clearInterval(interval)
    }
  }
  if(ball.y == ball.radius) {
    ball.speedY = -ball.speedY;
  }

  ball.x = ball.x + ball.speedX
  ball.y = ball.y + ball.speedY
}
var interval = setInterval(drawFunction, 10)

function movementHandler(e) {
  switch(e.key) {
    case "a":
     paddle.x = paddle.x - 20
     break;
    case "d":
      paddle.x = paddle.x + 20
      break;
  }

}

document.addEventListener("keydown", movementHandler)




// var canvas = document.getElementById("canvas")
// var ctx = canvas.getContext("2d")

// var brickColumn = 5
// var brickRow = 2
// var brickWidth = 60 
// var brickHeight = 20
// var brickMarginLeft = 59
// var brickMarginTop = 30
// var brickPadding = 15

// var bricks = []
//   for(var c = 0; c < brickColumn; c++) {
//     bricks[c] = []
//     for(var r = 0; r < brickRow; r++) {
//       bricks[c][r] = { x: 0, y: 0, status: 1 }
//     }
//   }

// var paddle = {
//   x: 202,
//   y: 310,
//   width: 75,
//   height: 15
// }

// var ball = {
//   x: 240,
//   y: 290,
//   radius: 12,
//   width: 10,
//   height: 0,
//   arc: Math.PI * 2,
//   speedX: 2,
//   speedY: -2
// }

// function drawBricks() {
//   for(var c = 0; c < brickColumn; c++) {
//     for(var r = 0; r < brickRow; r++) {
//       if(bricks[c][r].status == 1) {
//         var brickX = ([c] * (brickWidth + brickPadding)) + brickMarginLeft
//         var brickY = ([r] * (brickHeight + brickPadding)) + brickMarginTop 
//         bricks[c][r].x = brickX
//         bricks[c][r].y = brickY
//         ctx.beginPath()
//         ctx.rect(brickX, brickY, brickWidth, brickHeight)
//         ctx.fillStyle = "blue"
//         ctx.fill()
//         ctx.closePath()
//       }
//     }
//   }
// }

// function drawPaddle() {
//   ctx.beginPath()
//   ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height)
//   ctx.fillStyle = "blue"
//   ctx.fill()
//   ctx.closePath()
// }


// function drawBall() {
//   ctx.beginPath()
//   ctx.arc(ball.x, ball.y, ball.radius, ball.width, ball.height, ball.arc, ball.speedX, ball.speedY)
//   ctx.fillStyle = "blue"
//   ctx.fill()
//   ctx.closePath()
// }

// function brickBallCollision() {
//   for(var c = 0; c < brickColumn; c++) {
//     for(var r = 0; r < brickRow; r++) {
//       var brick = bricks[c][r] 
//       if(brick.status == 1) { 
//         if(ball.x > brick.x && ball.x < brick.x + brickWidth && ball.y > brick.y && ball.y < brick.y + brickHeight) {
//           ball.speedY = -ball.speedY
//           brick.status = 0
//         }   
//       }
//     }
//   }    
// }

// function drawFunction() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   drawBall()
//   drawPaddle()
//   drawBricks()
//   brickBallCollision()

//   if(ball.x + ball.radius + ball.speedX == canvas.width || ball.x + ball.speedX == ball.radius) {
//     ball.speedX = -ball.speedX
//   }
//   if(ball.y == ball.radius) {
//     ball.speedY = -ball.speedY
//   }
//     else if(ball.y + ball.radius + ball.speedY == canvas.height) {
//       if(ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
//         ball.speedY = -ball.speedY
//       }
//       else {
//       alert("Game Over")
//       }
//     }
  
//   ball.x = ball.x + ball.speedX
//   ball.y = ball.y + ball.speedY

// }
// setInterval(drawFunction, 10)

// document.addEventListener("keydown", movementHandler)

// function movementHandler(e) {
//   switch(e.key) {
//     case "a":
//       paddle.x = paddle.x -15
//       break;
//     case "d":
//       paddle.x = paddle.x +15
//       break;
//   }
// }
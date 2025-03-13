const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Ball properties
const ball = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    radius: 20,
    speed: 4,
    dx: 0,
    dy: 0,
    color: 'rgb(255, 87, 51)' // Ball color (gradient style can be added)
};

// Game properties
let isJumping = false;
let gravity = 0.2;
let jumpPower = 8;
let speed = 2; // Ball speed increases over time
let slopeAngle = Math.PI / 6; // 30 degrees slope (approx.)
let groundHeight = canvas.height - 40; // Ground level

// Key control variables
let rightPressed = false;
let leftPressed = false;

// Event listeners for user input
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

// Handle key down event
function keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true;
    }
}

// Handle key up event
function keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false;
    }
}

// Ball movement
function moveBall() {
    if (rightPressed) {
        ball.dx = speed;
    } else if (leftPressed) {
        ball.dx = -speed;
    } else {
        ball.dx = 0;
    }

    // Apply gravity when not jumping
    if (!isJumping) {
        ball.dy += gravity;
    } else {
        ball.dy = -jumpPower; // Jump speed
    }

    // Apply slope: increasing speed over time to simulate downhill movement
    ball.dy += Math.sin(slopeAngle) * 0.5; // Simulate downhill movement

    ball.x += ball.dx;
    ball.y += ball.dy;

    // Collision with ground (bottom of the canvas)
    if (ball.y + ball.radius > groundHeight) {
        ball.y = groundHeight - ball.radius;
        ball.dy = 0;
        isJumping = false;
    }

    // Prevent the ball from going out of bounds
    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;
    } else if (ball.x - ball.radius < 0) {
        ball.x = ball.radius;
    }
}

// Jump logic
function jump() {
    if (!isJumping) {
        isJumping = true;
    }
}

// Draw the ball with a gradient effect
function drawBall() {
    const gradient = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.radius);
    gradient.addColorStop(0, '#ff5733');
    gradient.addColorStop(1, '#ff0000');

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();
}

// Draw the ground and simulate slope
function drawGround() {
    ctx.beginPath();
    ctx.moveTo(0, groundHeight);
    ctx.lineTo(canvas.width, groundHeight + Math.sin(slopeAngle) * 100); // Simulate slight slope
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = '#2c3e50';
    ctx.fill();
}

// Update the game every frame
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    drawGround(); // Draw the ground with a slope
    drawBall();   // Draw the ball
    moveBall();   // Update the ball position

    // Increase the ball speed as the game progresses (to simulate increased difficulty)
    speed += 0.01;

    requestAnimationFrame(update);
}

// Start the game
update();

// Make the ball jump when the spacebar is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
        jump();
    }
});

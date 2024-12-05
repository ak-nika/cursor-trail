// Create cursor elements
const cursorTrail = document.getElementById("cursor-trail");
const dot = document.createElement("div");
dot.className = "dot"; // Yellow dot as the cursor
const trail = document.createElement("div");
trail.className = "trail"; // Brown trail
cursorTrail.appendChild(trail);
cursorTrail.appendChild(dot);

// Variables for trail animation
let trailX = 0,
  trailY = 0; // Current trail position
let mouseX = 0,
  mouseY = 0; // Current mouse position

// Update the cursor dot position instantly
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Move the dot (cursor) immediately
  dot.style.top = `${mouseY}px`;
  dot.style.left = `${mouseX}px`;
});

// Animate the trail to follow the cursor with a delay
function animateTrail() {
  // Gradually move the trail toward the mouse position
  trailX += (mouseX - trailX) * 0.5; // Adjust the 0.5 value for smoothness
  trailY += (mouseY - trailY) * 0.5;

  // Update the trail position
  trail.style.top = `${trailY}px`;
  trail.style.left = `${trailX}px`;

  // Request the next animation frame
  requestAnimationFrame(animateTrail);
}

// Start the trail animation
animateTrail();

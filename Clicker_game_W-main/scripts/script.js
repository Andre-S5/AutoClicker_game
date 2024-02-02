const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

// Buildings are made from classes here.
let cursor = new Building();

// Manual click function, add one point to score per click
function scorePlusPlus() {
    score++;
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    document.getElementById('Score').innerHTML = score;
}
setInterval(updatePage, tickRate);
// function to increment the score
function IncrementScore() {
    const
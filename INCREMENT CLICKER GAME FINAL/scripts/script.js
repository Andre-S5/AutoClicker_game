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
    document.getElementById('score').innerHTML = score;
}
setInterval(updatePage, tickRate);

// Function to increment the score
function incrementScore() {
    const scoreElement = document.getElementById('score');
    score++;
    scoreElement.textContent = score;
}

// Function to start the score increment every second
let intervalId;
function startScoreIncrement() {
    intervalId = setInterval(incrementScore, 10000); // increment score every 1000 milliseconds (1 second)
}

// Function to purchase cursor
function purchaseCursor() {
    // Perform any necessary actions to purchase the cursor
    if (score >= 10) {
        score -= 10; // Decrease score by ten
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = score;
        startScoreIncrement(); // Start the score increment when cursor is purchased
    } else {
        alert('Not enough score to purchase a star shower!');
    }
}

// Event listener for the buy cursor button
const buyCursorButton = document.getElementById('buySingleCursor');
buyCursorButton.addEventListener('click', purchaseCursor);

// Function to start the score increment every second for the second cursor
function startScoreIncrement2() {
    // Increment score by 1 every second
    intervalId2 = setInterval(() => {
        score += 1;
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = score;
    }, 1000);
}

// Function to purchase second cursor
function purchaseSecondCursor() {
    // Perform any necessary actions to purchase the second cursor
    if (score >= 100) {
        score -= 100; // Decrease score by 100
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = score;
        startScoreIncrement2(); // Start the score increment when second cursor is purchased
    } else {
        alert('Not enough score to purchase a second cursor!');
    }
}

// Event listener for the second buy cursor button
const buySecondCursorButton = document.getElementById('buySecondCursor');
buySecondCursorButton.addEventListener('click', purchaseSecondCursor);

// Function to start the score increment every second for the second cursor
function startScoreIncrement2() {
    // Increment score by 1 every second
    intervalId3 = setInterval(() => {
        score += 1;
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = score;
    }, 100);
}

// Function to purchase second cursor
function purchaseThirdCursor() {
    // Perform any necessary actions to purchase the second cursor
    if (score >= 1000) {
        score -= 1000; // Decrease score by 100
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = score;
        startScoreIncrement2(); // Start the score increment when second cursor is purchased
    } else {
        alert('Not enough score to purchase a Third cursor!');
    }
}

// Event listener for the second buy cursor button
const buyThirdCursorButton = document.getElementById('buyThirdCursor');
buyThirdCursorButton.addEventListener('click', purchaseThirdCursor);

// Function to start the score increment every second for the second cursor
function startScoreIncrement2() {
    // Increment score by 1 every second
    intervalId4 = setInterval(() => {
        score += 1;
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = score;
    }, 10);
}

// Function to purchase second cursor
function purchaseFourthCursor() {
    // Perform any necessary actions to purchase the second cursor
    if (score >= 10000) {
        score -= 10000; // Decrease score by 100
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = score;
        startScoreIncrement2(); // Start the score increment when second cursor is purchased
    } else {
        alert('Not enough score to purchase a Fourth cursor!');
    }
}

// Event listener for the second buy cursor button
const buyFourthCursorButton = document.getElementById('buyFourthCursor');
buyFourthCursorButton.addEventListener('click', purchaseFourthCursor);

const startBtn = document.getElementById("startBtn");
const speedDisplay = document.getElementById("speed");
const statusDisplay = document.getElementById("status");

startBtn.addEventListener("click", speedTest);

async function speedTest() {
    statusDisplay.textContent = "Testing...";
    speedDisplay.textContent = "0";

    try {
        const imageUrl =
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg?cache=" +
            Math.random();

        const startTime = performance.now();

        const response = await fetch(imageUrl);

        const blob = await response.blob();

        const endTime = performance.now();

        const duration = (endTime - startTime) / 1000;

        const bitsLoaded = blob.size * 8;

        const speedMbps =
            (bitsLoaded / duration / 1024 / 1024).toFixed(2);

        speedDisplay.textContent = speedMbps;
        statusDisplay.textContent = "Test Completed";
    } catch (error) {
        statusDisplay.textContent = "Error running test";
        console.error(error);
    }
}

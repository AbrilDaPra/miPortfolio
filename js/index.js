let countElement = document.getElementById("count");
let projectsCompleted = 4;
let isVisible = false;
let counterStarted = false;

function updateCounter(count) {
    countElement.textContent = count;
}

function startCounter() {
    if (!counterStarted) {
        counterStarted = true;
        let currentCount = 0;
        let interval = setInterval(() => {
            updateCounter(currentCount);
            currentCount++;
            if (currentCount > projectsCompleted) {
                clearInterval(interval);
            }
        }, 300);
    }
}

function checkVisibility() {
    let rect = countElement.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        isVisible = true;
    } else {
        isVisible = false;
        counterStarted = false;
    }
}

window.addEventListener("scroll", () => {
    checkVisibility();
    if (isVisible) {
        startCounter();
    }
});

checkVisibility();
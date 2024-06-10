let check = document.querySelector(".check");

let countElement = document.getElementById("count");
let projectsCompleted = 10;
let isVisible = false;
let counterStarted = false;

check.addEventListener('click', language);

function language(){
    let id = check.checked;

    if(id == true){
        location.href = "/index-en.html";
    }else{
        location.href = "/index.html";
    }
}

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
        }, 100);
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


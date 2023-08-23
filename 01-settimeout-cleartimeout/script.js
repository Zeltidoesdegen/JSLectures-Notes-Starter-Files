//setTimeout - takes a callback and a time to wait until that callback is executed

let showCodeAfter3Secs = () => {
    document.querySelector("h1").innerHTML = "I am executed after 5seconds"
};

let timer = setTimeout(showCodeAfter3Secs, 3000);

let stopTime = () => {
    clearTimeout(timer);
};

document.querySelector("button").addEventListener("click", stopTime);

console.log("I am executed agad");
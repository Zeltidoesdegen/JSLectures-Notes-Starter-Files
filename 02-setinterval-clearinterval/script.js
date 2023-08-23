// setInterval(() => {
//     console.log("Hell");
// }, 2000);

var changeColor = () => {
    setInterval(() => {
        console.log("Hello");
    }, 2000)
}

document.querySelector("#start").addEventListener("click", changeColor)
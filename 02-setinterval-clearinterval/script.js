// setInterval(() => {
//     console.log("Hell");
// }, 2000);

var interval;

var changeColor = () => {
// 1st approach
// if(interval) {


// }else{
//     interval = setInterval(() => {
//         const color = Math.floor(Math.random()* 16777215).toString(16);
//         document.body.style.backgroundColor = `#${color}`
//     }, 1000)
// }
// }

// 2nd approach
    if(!interval){
        interval = setInterval(() => {
            const color = Math.floor(Math.random()* 16777215).toString(16);
            document.body.style.backgroundColor = `#${color}`
            console.log(color);
        }, 1000)
    }

}

let stopColor = () => {
    clearInterval(interval);
}

document.querySelector("#start").addEventListener("click", changeColor);
document.querySelector("#stop").addEventListener("click", stopColor);
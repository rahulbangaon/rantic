

const startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click",()=>{
    const firstPlayer = document.querySelector("#firstPlayer").value;
    const secondPlayer = document.querySelector("#secondPlayer").value;
    localStorage.setItem("first-player",firstPlayer);
    localStorage.setItem("second-player",secondPlayer);
    console.log("start button pressed");
});


const firstLabel = document.querySelector("#firstLabel");
const secondLabel = document.querySelector("#secondLabel");

firstPlayer.addEventListener("focus" ,()=>{
    firstLabel.classList.add("afterHover");
});
secondPlayer.addEventListener("focus" ,()=>{
    secondLabel.classList.add("afterHover");
});
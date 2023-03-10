// plyar name setting
const firstPlayer = localStorage.getItem("first-player");
const secondPlayer = localStorage.getItem("second-player");

const nameFirstPlayer = document.querySelector("#nameFirstPlayer");
const nameSecondPlayer = document.querySelector("#nameSecondPlayer");

if(firstPlayer===""){
    nameFirstPlayer.textContent = "Player 1";
}else{
nameFirstPlayer.textContent = firstPlayer;
}

if(secondPlayer===""){
    nameSecondPlayer.textContent = "Player 2";
}else{
    nameSecondPlayer.textContent = secondPlayer;
}


// game logic

// score section
let score1 = 0;
let score2 = 0;
// getting score element from DOM
const scoreEl1 = document.querySelector("#score1");
const scoreEl2 = document.querySelector("#score2");

// setting intial player turn
let turn = "1";

// function to change turn off player
function changeTurn(){
    const indicators = document.querySelectorAll(".turn-indicator");
    Array.from(indicators).forEach(indicator =>{
        if(indicator.hasAttribute("hidden")){
            indicator.removeAttribute("hidden");
        }
        else{
            indicator.hidden="true"
        }
    });
    return turn==="1"?"2":"1";

}


let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(box =>{
    let boxText = box.querySelector(".boxText");
    box.addEventListener("click",()=>{
        if(boxText.textContent===""){
            let num = randomNum();
            const imagePlayer1 = box.querySelector("#player1-image");
            const imagePlayer2 = box.querySelector("#player2-image");
            if(num%2!==0){
                imagePlayer1.removeAttribute("hidden");
                boxText.textContent="1";
            }
            else if(num%2==0){
                imagePlayer2.removeAttribute("hidden");
                boxText.textContent="2";
            }
            winCheck();
            turn = changeTurn();
        }
    });
})


function randomNum(){
    let rand = Math.random()*9;
    return Math.floor(rand);
}


function winCheck(){
    let boxText = document.querySelectorAll(".boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        if( (boxText[e[0]].innerText)===(boxText[e[1]].innerText) && (boxText[e[1]].innerText)===(boxText[e[2]].innerText) && (boxText[e[0]].innerText)!==""){
            if(turn==="1"){
                score1++;
                scoreEl1.textContent = score1;
            }
            else if(turn==="2"){
                score2++;
                scoreEl2.textContent = score2;
            }
            resetBtn.textContent = "Play Again!";
            stop();
        }
    })
}

function stop(){
    Array.from(boxes).forEach(box =>{
        let boxText = box.querySelector(".boxText");
        if(boxText.innerText===""){
            boxText.textContent = "-";
        }
    });
}

// play again

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click",reset);

function reset(){
    Array.from(boxes).forEach(box =>{
        let boxText = box.querySelector(".boxText");
        const imagePlayer1 = box.querySelector("#player1-image");
        const imagePlayer2 = box.querySelector("#player2-image");
        if(boxText.textContent==="1"){
            imagePlayer1.hidden="true";
        }
        else if(boxText.textContent==="2"){
            imagePlayer2.hidden = "true";
        }
        else if(boxText.textContent==="-"){
            imagePlayer1.hidden="true";
            imagePlayer2.hidden="true";
        }
        boxText.textContent = "";
    });
    // changing play again to reset 
    resetBtn.textContent= "Reset";
}
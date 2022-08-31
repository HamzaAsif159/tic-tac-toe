import {renderBoard, gameWinner} from './utils.js';

document.getElementById("container").innerHTML = renderBoard();

const box1 = document.getElementById("box-1"); 
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const box5 = document.getElementById("box-5");
const box6 = document.getElementById("box-6");
const box7 = document.getElementById("box-7");
const box8 = document.getElementById("box-8");
const box9 = document.getElementById("box-9");

let player1 = true;
document.querySelector(".restart-btn").addEventListener("click", restart)


function restart(){

        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";

        box1.disabled = false;
        box2.disabled = false;
        box3.disabled = false;
        box4.disabled = false;
        box5.disabled = false;
        box6.disabled = false;
        box7.disabled = false;
        box8.disabled = false;
        box9.disabled = false;

        player1 = true;
        playerTurn.textContent = "Player 1 turn"
}



const playerTurn = document.getElementById("turn");

box1.addEventListener("click", () => {
    if(!box1.disabled){
        if(player1){
            box1.textContent = "X";
            playerTurn.textContent = "Player 2 turn"
            player1 = false;
        } else {
            box1.textContent = "o";
            playerTurn.textContent = "Player 1 turn"
            player1 = true;
        }
        box1.disabled = true;
        checkStatus();
    }
})


box2.addEventListener("click", () => {
    if(!box2.disabled){
        if(player1){
            box2.textContent = "X";
            playerTurn.textContent = "Player 2 turn"
            player1 = false;
        } else {
            box2.textContent = "o";
            playerTurn.textContent = "Player 1 turn"
            player1 = true;
        }
        box2.disabled = true;
        checkStatus();
    }
})


box3.addEventListener("click", () => {
    if(!box3.disabled){
        if(player1){
            box3.textContent = "X";
            playerTurn.textContent = "Player 2 turn"
            player1 = false;
        } else {
            box3.textContent = "o";
            playerTurn.textContent = "Player 1 turn"
            player1 = true;
        }
        box3.disabled = true;
        checkStatus();
    }
})


box4.addEventListener("click", () => {
    if(!box4.disabled){
        if(player1){
            box4.textContent = "X";
            playerTurn.textContent = "Player 2 turn";
            player1 = false;
        } else {
            box4.textContent = "o";
            playerTurn.textContent = "Player 1 turn";
            player1 = true;
        }
        box4.disabled = true;
        checkStatus();
       
    }

})

box5.addEventListener("click", () => {
    if(!box5.disabled){
        if(player1){
            box5.textContent = "X";
            playerTurn.textContent = "Player 2 turn"
            player1 = false;
        } else {
            box5.textContent = "o";
            playerTurn.textContent = "Player 1 turn"
            player1 = true;
        }
        box5.disabled = true;
        checkStatus();
      
    }

})


box6.addEventListener("click", () => {
    if(!box6.disabled){
        if(player1){
            box6.textContent = "X";
            playerTurn.textContent = "Player 2 turn"
            player1 = false;
        } else {
            box6.textContent = "o";
            playerTurn.textContent = "Player 1 turn"
            player1 = true;
        }
        box6.disabled = true;
        checkStatus();
    }
})


box7.addEventListener("click", () => {
    if(!box7.disabled){
        if(player1){
            box7.textContent = "X";
            playerTurn.textContent = "Player 2 turn"
            player1 = false;
        } else {
            box7.textContent = "o";
            playerTurn.textContent = "Player 1 turn"
            player1 = true;
        }
        box7.disabled = true;
        checkStatus();
    }
})


box8.addEventListener("click", () => {
    if(!box8.disabled){
        if(player1){
            box8.textContent = "X";
            playerTurn.textContent = "Player 2 turn"
            player1 = false;
        } else {
            box8.textContent = "o";
            playerTurn.textContent = "Player 1 turn"
            player1 = true;
        }
        box8.disabled = true;
        checkStatus();
    }
})


box9.addEventListener("click", () => {
    console.log("clicked")
    if(!box9.disabled){
        if(player1){
            box9.textContent = "X";
            playerTurn.textContent = "Player 2 turn"
            player1 = false;
        } else {
            box9.textContent = "o";
            playerTurn.textContent = "Player 1 turn"
            player1 = true;
        }
        box9.disabled = true;
        checkStatus();
    }
})


function checkStatus() {
    if (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") {
        return gameWinner("X");
    }
    else if (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") {
        return gameWinner("X");
    }
    else if (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") {
        return gameWinner("X");
    }
    else if (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") {
        return gameWinner("X");
    }
    else if (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") {
        return gameWinner("X");
    }
    else if (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") {
        return gameWinner("X");
    }
    else if (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") {
        return gameWinner("X");
    }
    else if (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X") {
      return gameWinner("X");
    }



    else if (box1.textContent === "o" && box2.textContent === "o" && box3.textContent === "o") {
        return gameWinner("O");
    }
    else if (box4.textContent === "o" && box5.textContent === "o" && box6.textContent === "o") {
        return gameWinner("O");
    }
    else if (box7.textContent === "o" && box8.textContent === "o" && box9.textContent === "o") {
        return gameWinner("O");
    }
    else if (box1.textContent === "o" && box4.textContent === "o" && box7.textContent === "o") {
        return gameWinner("O");
    }
    else if (box2.textContent === "o" && box5.textContent === "o" && box8.textContent === "o") {
        return gameWinner("O");
    }
    else if (box3.textContent === "o" && box6.textContent === "o" && box9.textContent === "o") {
        return gameWinner("O");
    }
    else if (box1.textContent === "o" && box5.textContent === "o" && box9.textContent === "o") {
        return gameWinner("O");
    }
    else if (box3.textContent === "o" && box5.textContent === "o" && box7.textContent === "o") {
        return gameWinner("O");
    }
}


export default restart
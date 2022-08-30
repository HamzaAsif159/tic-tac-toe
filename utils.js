import restart from "./main.js";


function renderBoard() {
    return `
    <div class="board-logo">Tic Tac Toe</div>
    <div id="turn">Player 1 turn</div>
                <div class="board">
                    <div id="box-1" class="box"></div>
                    <div id="box-2" class="box"></div>
                    <div id="box-3" class="box"></div>
                    <div id="box-4" class="box"></div>
                    <div id="box-5" class="box"></div>
                    <div id="box-6" class="box"></div>
                    <div id="box-7" class="box"></div>
                    <div id="box-8" class="box"></div>
                    <div id="box-9" class="box"></div>
                </div>
                <button class="restart-btn">Restart</button>
    `;
}



function gameWinner(winner){
    const overLay = document.getElementById("overlay");
    overLay.style.display = "block";
    overLay.innerHTML = `
    <div id="modal">
    <h2> ${winner} Wins!🥳</h2>
    <button id="close-btn">Close</button> 
    </div> 
    `
    document.getElementById("close-btn").addEventListener("click", () => {
        overLay.style.display = "none";
        console.log("clicked");
        restart();
        })
}








export {renderBoard, gameWinner}

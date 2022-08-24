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
                <button id="restart-btn">Restart</button>
    `;
}

export default renderBoard
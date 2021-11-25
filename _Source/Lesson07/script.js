/*ゲームステータス要素をここに保存します*/
const statusDisplay = document.querySelector('.game--status');


/*終了の場合、gameActiveを使用してゲームを一時停止します */
let gameActive = true;
/*プレーヤーをここに保存するので、誰の番かわかります */
let currentPlayer = "X";
/*ゲームの状態、つまり空の文字列の形式を配列に格納します*/
let gameState = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];


/*ゲーム中にユーザーに表示するいくつかのメッセージを宣言しました。*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

/*プレイヤーに誰の番かを知らせます */
statusDisplay.innerHTML = currentPlayerTurn();


/*内部のゲーム状態を更新し、UIを更新します*/ 
function handleCellPlayed(clickedCell, clickedCellIndex) {
    /*ゲームの状態を動きに合わせて更新し、動きに合わせるようにUIを更新します*/
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
}

/*現在のプレーヤーを変更し、メッセージを更新します。 */  
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log(clickedCellIndex)
    statusDisplay.innerHTML = currentPlayerTurn();

}

const winningConditions = [
    [0, 1, 2, 3],
    [4 , 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
];
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 15; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        let d = gameState[winCondition[3]];

        if (a === '' || b === '' || c === '' || d === '') {
            continue;
        }
        if (a === b && b === c && c === d) {
            roundWon = true;
            break; 
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    
        const clickedCell = clickedCellEvent.target;
    
        const clickedCellIndex = parseInt(
          clickedCell.getAttribute('data-cell-index')
        );
    console.log(clickedCellIndex)
    
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }
    /* 
   
    */    
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
}
    

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}
/*

*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));

document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
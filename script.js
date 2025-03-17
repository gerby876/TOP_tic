const board = (function () {
    let gameboard = [[0,0,0], [0,0,0], [0,0,0]];
    
    const change = (a, b) => {
        gameboard[a][b] = 1
    }

    return {gameboard, change};
})();

console.log(board.gameboard)
console.log(board.gameboard[2])
console.log(board.gameboard[2][1])

board.change(2, 1)

console.log(board.gameboard)
console.log(board.gameboard[2])
console.log(board.gameboard[2][1])

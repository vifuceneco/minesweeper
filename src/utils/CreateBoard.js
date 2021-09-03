export default function CreateBoard(row, col, bombs){
// Declaro variables
    let board = [];
    let mineLocation = [];

// Creo el tablero
    for (let x = 0; x < row; x++){
        let subCol = [];
        for (let y = 0; y < col; y++){
            subCol.push({
                value: 0,
                revealed: false,
                x: x,
                y: y,
                flagged: false,
            });
        }
    // Lo pusheo dentro del array de board
    board.push(subCol);    
    }

    // Bombas random
    let bombsCount = 0;
    while (bombsCount < bombs) {
        // Funciones bombas random
        let x = random(0, row - 1);
        let y = random(0, col - 1);

        // Ubicar las bombas
        if (board[x][y].value === 0){
            board[x][y].value = "X";
            mineLocation.push([x, y]);
            bombsCount++;
        }
    }

    
}
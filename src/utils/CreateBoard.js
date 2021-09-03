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
}
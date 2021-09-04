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

    // Incremento el valor de las celdas, si tiene bomba agrego los numeros alrededor
    for (let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if (board[i][j].value === "X"){
                continue;
            }
            // Arriba (posicion 0,1)
            if (i > 0 && board[i - 1][j].value === "X"){
                board[i][j].value++;
            }

            // Arriba a la derecha (posicion 0,2)
            if (i > 0 && j < col - 1 && board[i - 1][j + 1].value === "X"){
                board[i][j].value++;
            }

            // Derecha (1,2)
            if (j < col - 1 && board[i][j + 1].value === "X"){
                board[i][j].value++;
            }

            // Abajo a la derecha(2,2)
            if (i < row - 1 && j < col - 1 && board[i + 1][j + 1].value === "X"){
                board[i][j].value++;
            }
            
            // Abajo (2,1)
            if (i < row - 1 && board[i + 1][j].value === "X") {
                board[i][j].value++;
            }
    
            // Abajo a la izquierda (2,0)
            if (i < row - 1 && j > 0 && board[i + 1][j - 1].value === "X") {
                board[i][j].value++;
            }
        
            // Izquierda (1,0)
            if (j > 0 && board[i][j - 1].value === "X") {
                board[i][j].value++;
            }
        
            // Arriba a la izquierda (0,0)
            if (i > 0 && j > 0 && board[i - 1][j - 1].value === "X") {
                board[i][j].value++;
            }
        }
        return {board, mineLocation};
    };


    // Generar valores random de x e y
    function random(min = 0, max) {
        // Minimo y maximo
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
}
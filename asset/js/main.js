// costanti
const generatorGridButton = document.querySelector('#generatorGrid');
const container = document.querySelector('#container');
const gridSize = 10; 
const totalCells = gridSize * gridSize;
const mushroomCount = 16; 
// array per memorizzare numeri dei funghi
let mushroomArray = [];
let clickedCells = 0;

// Funzione per generare la griglia
function generateGrid() {
     container.innerHTML = '';
     clickedCells = 0;
     // genero numeri casuali
     mushroomArray = generateRandomNumbers(mushroomCount, 1, totalCells)

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.textContent = i + 1; 
        cell.classList.add('cell');
        cell.addEventListener('click', function() {
            cellClickHandler(cell, i + 1);
        });

        container.appendChild(cell);
    }
}
// genero numeri casuali non ripetuti all'interno di un range
function generateRandomNumbers(count, min, max){
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers
}

function cellClickHandler (cell, cellNumber){
    clickedCells ++;

    // Se il numero della cella è presente nell'array dei funghi
    if (mushroomArray.includes(cellNumber)) {
        cell.style.backgroundColor = 'red'; 
        console.log('Hai calpestato un fungo! Game Over.');
        endGame();
    } else {
        cell.style.backgroundColor = 'blue'; 
        // Controlla se il gioco è terminato
        if (clickedCells === totalCells - mushroomCount) {
            console.log('Hai vinto! Hai evitato tutti i funghi.');
            endGame();
        }
    }
}
// listener per il click sul bottone
generatorGridButton.addEventListener('click', generateGrid);



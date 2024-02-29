const generatorGridButton = document.querySelector('#generatorGrid');
const container = document.querySelector('#container');
const gridSize = 10; 
const totalCells = gridSize * gridSize;
const mushroomCount = 16; 
let mushroomArray = [];
let clickedCells = 0;

function generateGrid() {
    container.innerHTML = '';
    clickedCells = 0;
    mushroomArray = generateRandomNumbers(mushroomCount, 1, totalCells);

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

function generateRandomNumbers(count, min, max){
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function cellClickHandler (cell, cellNumber){
    clickedCells ++;

    if (mushroomArray.includes(cellNumber)) {
        // Aggiungi l'emoji per il fungo
        cell.innerHTML = '🍄';
        console.log('Hai calpestato un fungo! Game Over.');
        endGame();
    } else {
        cell.style.backgroundColor = 'purple'; 
        if (clickedCells === totalCells - mushroomCount) {
            console.log('Hai vinto! Hai evitato tutti i funghi.');
            endGame();
        }
    }
}

// Funzione per concludere il gioco
function endGame() {
    // Aggiungi qui le azioni da eseguire quando il gioco termina
    // Ad esempio, puoi resettare il gioco o visualizzare un messaggio di fine gioco.
    alert('Gioco terminato!');
}

generatorGridButton.addEventListener('click', generateGrid);
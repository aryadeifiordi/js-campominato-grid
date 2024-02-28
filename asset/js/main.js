// costanti
const generatorGridButton = document.querySelector('#generatorGrid');
const container = document.querySelector('#container');
const gridSize = 10; 
const totalCells = gridSize * gridSize;

// Funzione per generare la griglia
function generateGrid() {
     container.innerHTML = ''; 
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.textContent = i + 1; 
        cell.classList.add('cell');
        cell.addEventListener('click', function() {
            console.log('ho cliccato');
        });

        container.appendChild(cell);
    }
}

// listener per il click sul bottone
generatorGridButton.addEventListener('click', generateGrid);


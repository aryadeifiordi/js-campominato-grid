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


//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
//Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.
//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
//- abbiamo calpestato una fungo
//- la cella si colora di rosso e la partita termina.
//Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.




// create a random numbers function to generate a number between a min and max using the range 1à-100 /1-81/1-49
// create an empty array
// (while)loop over until the empty array has 16 elements(not repet)
///check if the generated random number is included in the mushroomarray 
/// if not push it inside the array 








// read the number of the clicked cell
//check if the clicked cell's number is included inside the mushroom array
// if true 
///paint the cell red
///end the game (console.log('end game'))
//else
/// paint the cell to blue





// 
//keep the count of the clicked cells
// end the game
///quando il numero di celle cliccate è uguale al numero totale di celle meno il numero di funghi hai vinto 
///prevent the user from clicking again after the game is over 


const words = ['rouge', 'bleu', 'jaune', 'vert', 'noir']; // French color words
const gridSize = 10;  // Size of the grid (10x10)

// Function to create the word search grid
function createGrid() {
    const gridContainer = document.getElementById('wordSearchGrid');
    gridContainer.innerHTML = '';  // Clear any existing grid

    // Create an empty grid (2D array filled with empty strings)
    const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(''));

    // Place the words in the grid
    words.forEach(word => placeWord(word, grid));

    // Fill remaining empty spaces with random letters
    fillEmptySpaces(grid);

    // Display the grid
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement('div');
            cell.textContent = grid[row][col];
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
        }
    }
}

// Function to place a word in the grid
function placeWord(word, grid) {
    const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    let placed = false;

    while (!placed) {
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);

        if (canPlaceWord(word, row, col, direction, grid)) {
            for (let i = 0; i < word.length; i++) {
                if (direction === 'horizontal') {
                    grid[row][col + i] = word[i];
                } else {
                    grid[row + i][col] = word[i];
                }
            }
            placed = true;
        }
    }
}

// Function to check if a word can be placed in a given location
function canPlaceWord(word, row, col, direction, grid) {
    if (direction === 'horizontal' && col + word.length > gridSize) return false;
    if (direction === 'vertical' && row + word.length > gridSize) return false;

    for (let i = 0; i < word.length; i++) {
        if (direction === 'horizontal' && grid[row][col + i] !== '') return false;
        if (direction === 'vertical' && grid[row + i][col] !== '') return false;
    }

    return true;
}

// Function to fill the remaining empty spaces with random letters
function fillEmptySpaces(grid) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (grid[row][col] === '') {
                grid[row][col] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

// Highlight cells when clicked
document.getElementById('wordSearchGrid').addEventListener('click', function(event) {
    const clickedCell = event.target;
    clickedCell.classList.toggle('highlight');
});

// Initialize the grid
createGrid();

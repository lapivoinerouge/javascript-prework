// computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// player move
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

// result
if (playerMove == computerMove) {
    printMessage('Remis!');
} else if (playerMove != 'nieznany ruch') {
    let userWon;
    if (playerMove == 'kamień') {
        if (computerMove == 'papier') {
            userWon = false;
        } else {
            userWon = true;
        }
    } else if (playerMove == 'papier') {
        if (computerMove == 'kamień') {
            userWon = true;
        } else {
            userWon = false;
        }
    } else {
        if (computerMove == 'papier') {
            userWon = true;
        } else {
            userWon = false;
        }
    }
    printMessage(userWon ? 'Wygrałeś!' : 'Przegrałeś');
} else {
    printMessage('Ruch ' + playerInput + ' nie istnieje. Dozwolone ruchy to: 1, 2, 3. Spróbuj jeszcze raz.')
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

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
        printMessage(userWon ? 'Wygrałeś!' : 'Przegrałeś!');
    } else {
        printMessage('Ruch ' + playerInput + ' nie istnieje. Dozwolone ruchy to: 1, 2, 3. Spróbuj jeszcze raz.')
    }
}

// computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);

// player move
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);

// result
displayResult(computerMove, playerMove);
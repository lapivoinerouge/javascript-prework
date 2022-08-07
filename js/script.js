function playGame(playerInput) {
    clearMessages();

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
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    
    // result
    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', () => playGame('1'));
document.getElementById('play-paper').addEventListener('click', () => playGame('2'));
document.getElementById('play-scissors').addEventListener('click', () => playGame('3'));
let playerPoints = 0;
let computerPoints = 0;

function playGame(playerInput) {
    clearMessages();
    clearBoard();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'rock';
        } else if (argMoveId == 2) {
            return 'paper';
        } else if (argMoveId == 3) {
            return 'scissors';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    
    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    
        if (playerMove == computerMove) {
            printMessage('Remis!');
            playerPoints++;
            computerPoints++;
        } else if (playerMove != 'nieznany ruch') {
            let userWon;
            if (playerMove == 'rock') {
                if (computerMove == 'paper') {
                    userWon = false;
                } else {
                    userWon = true;
                }
            } else if (playerMove == 'paper') {
                if (computerMove == 'rock') {
                    userWon = true;
                } else {
                    userWon = false;
                }
            } else {
                if (computerMove == 'paper') {
                    userWon = true;
                } else {
                    userWon = false;
                }
            }

            if (userWon) {
                playerPoints++;
                printMessage('Wygrałeś!');
            } else {
                computerPoints++;
                printMessage('Przegrałeś!');
            }
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
    showChoice(computerMove, playerMove);
    displayResult(computerMove, playerMove);
    updateScore();
}

function updateScore() {
    let playerScoreDiv = document.getElementById('player-score');
    let computerScoreDiv = document.getElementById('computer-score');

    playerScoreDiv.innerHTML = playerPoints;
    computerScoreDiv.innerHTML = computerPoints;
}

function showChoice(computerMove, playerMove) {
    document.getElementById('computer-choice-' + computerMove).style.display = 'block';
    document.getElementById('player-choice-' + playerMove).style.display = 'block';
}

function clearBoard() {
    const hands = document.querySelectorAll('[id*=-choice-]');
    
    hands.forEach(hand => hand.style.display = 'none');
}

updateScore();

document.getElementById('play-rock').addEventListener('click', () => playGame('1'));
document.getElementById('play-paper').addEventListener('click', () => playGame('2'));
document.getElementById('play-scissors').addEventListener('click', () => playGame('3'));


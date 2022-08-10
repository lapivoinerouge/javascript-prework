{
        let playerPoints = 0,
            computerPoints = 0;

        const rock = 'rock',
            paper = 'paper',
            scissors = 'scissors';

        const playGame = function(playerInput) {
            clearBoard();

            const getMoveName = function(argMoveId) {
            // function getMoveName(argMoveId) {
                if (argMoveId == 1) {
                    return rock;
                } else if (argMoveId == 2) {
                    return paper;
                } else if (argMoveId == 3) {
                    return scissors;
                }
                return 'unknown';
            }
            
            const displayResult = function(computerMove, playerMove) {
                if (playerMove == computerMove) {
                    playerPoints++;
                    computerPoints++;
                } else {
                    let userWon;
                    if (playerMove == rock) {
                        if (computerMove == paper) {
                            userWon = false;
                        } else {
                            userWon = true;
                        }
                    } else if (playerMove == paper) {
                        if (computerMove == rock) {
                            userWon = true;
                        } else {
                            userWon = false;
                        }
                    } else {
                        if (computerMove == paper) {
                            userWon = true;
                        } else {
                            userWon = false;
                        }
                    }

                    if (userWon) {
                        playerPoints++;
                    } else {
                        computerPoints++;
                    }
                }
            }
            
            let randomNumber = Math.floor(Math.random() * 3 + 1);
            
            let computerMove = getMoveName(randomNumber),
                playerMove = getMoveName(playerInput);
            
            showChoice(computerMove, playerMove);
            displayResult(computerMove, playerMove);
            updateScore(playerPoints, computerPoints);
        }

        updateScore(playerPoints, computerPoints);

        document.getElementById('play-rock').addEventListener('click', () => playGame('1'));
        document.getElementById('play-paper').addEventListener('click', () => playGame('2'));
        document.getElementById('play-scissors').addEventListener('click', () => playGame('3'));
}

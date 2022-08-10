function clearBoard() {
    const hands = document.querySelectorAll('[id*=-choice-]');
    hands.forEach(hand => hand.style.display = 'none');
}

function showChoice(computerMove, playerMove) {
    document.getElementById('computer-choice-' + computerMove).style.display = 'block';
    document.getElementById('player-choice-' + playerMove).style.display = 'block';
}

function updateScore(playerPoints, computerPoints) {
    const playerScorePoints = document.getElementById('player-score'),
        computerScorePoints = document.getElementById('computer-score'),
        playerScoreBar = document.getElementById('player-score-bar'),
        computerScoreBar = document.getElementById('computer-score-bar');

    playerScorePoints.innerHTML = playerPoints;
    computerScorePoints.innerHTML = computerPoints;

    const playerLifeLeft = 100 - (computerPoints * 10);
    const computerLifeLeft = 100 - (playerPoints * 10);

    playerScoreBar.style.background = 'linear-gradient(90deg, #018200 ' + playerLifeLeft + '%, #A80B06 ' + playerLifeLeft + '%)';
    computerScoreBar.style.background = 'linear-gradient(90deg, #018200 ' + computerLifeLeft + '%, #A80B06 ' + computerLifeLeft + '%)';

    checkGameOver(playerPoints, computerPoints);
}

function checkGameOver(playerPoints, computerPoints) {
    if (playerPoints >= 10 || computerPoints >= 10) {
        const buttons = document.querySelectorAll('[class=button]');
        buttons.forEach(button => button.style.display = 'none');
    }
}
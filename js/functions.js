function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function clearBoard() {
    const hands = document.querySelectorAll('[id*=-choice-]');
    
    hands.forEach(hand => hand.style.display = 'none');
}

function showChoice(computerMove, playerMove) {
    document.getElementById('computer-choice-' + computerMove).style.display = 'block';
    document.getElementById('player-choice-' + playerMove).style.display = 'block';
}

function updateScore() {
    let playerScorePoints = document.getElementById('player-score');
    let computerScorePoints = document.getElementById('computer-score');

    playerScorePoints.innerHTML = playerPoints;
    computerScorePoints.innerHTML = computerPoints;

    let playerScoreBar = document.getElementById('player-score-bar');
    let computerScoreBar = document.getElementById('computer-score-bar');

    let playerLifeLeft = 100 - (computerPoints * 10);
    let computerLifeLeft = 100 - (playerPoints * 10);

    playerScoreBar.style.background = 'linear-gradient(90deg, #018200 ' + playerLifeLeft + '%, #A80B06 ' + playerLifeLeft + '%)';
    computerScoreBar.style.background = 'linear-gradient(90deg, #018200 ' + computerLifeLeft + '%, #A80B06 ' + computerLifeLeft + '%)';

    checkGameOver();
}

function checkGameOver() {
    if (playerPoints >= 10 || computerPoints >= 10) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.style.display = 'none');
    }
}
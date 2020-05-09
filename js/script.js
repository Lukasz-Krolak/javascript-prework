function playGame() {
    clearMessages();
    
    let playerMove = document.getElementById('play-rock');
    let playerMove = document.getElementById('play-paper');
    let playerMove = document.getElementById('play-scissors');
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
    let argPlayerMove = getMoveName(playerMove);
    console.log(argPlayerMove, argComputerMove);


    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            printMessage('kamień')
            return 'kamień';
        } else if (argMoveId == 2) {
            printMessage('papier')
            return 'papier';
        } else if (argMoveId == 3) {
            printMessage('nożyce')
            return 'nożyce'
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }
    displayResult(argComputerMove, argPlayerMove);
}
function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    console.log('moves:', argComputerMove, argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Tym razem przegrywasz');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Tym razem przegrywasz');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Tym razem przegrywasz');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis');
    }
}

playerMove.getElementById('play-rock').addEventListener('click', function () {
    playGame(1); 
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2); 
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3); 
});
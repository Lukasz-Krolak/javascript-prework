{
    const playGame = function (playerMove) {
        clearMessages();

        const getMoveName = function (argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce'
            } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        const argComputerMove = getMoveName(randomNumber);
        const argPlayerMove = getMoveName(playerMove);
        console.log('Gracz wybrał: ' + playerMove);



        displayResult(argComputerMove, argPlayerMove);
    }
    const displayResult = function (argComputerMove, argPlayerMove) {
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



    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(playerMove = 1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(playerMove = 2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(playerMove = 3);
    });
}
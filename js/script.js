function playGame(){
    
    
    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
        console.log('Gracz wpisał: ' + playerInput); */
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
    let argPlayerMove = getMoveName(playerInput);
    
 
    function getMoveName(argMoveId){
        if(argMoveId == 1){
            printMessage('kamień')
        return 'kamień';
        } else if(argMoveId == 2){
            printMessage('papier')
            return 'papier';
        } else if(argMoveId == 3){
            printMessage('nożyce')
            return 'nożyce'
        } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }
/*printMessage('Mój ruch to: ' + argComputerMove);
printMessage('Twój ruch to: ' + argPlayerMove);*/

   
}
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        console.log('moves:', argComputerMove, argPlayerMove);

        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Tym razem przegrywasz');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Tym razem przegrywasz');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Tym razem przegrywasz');
        } else if(argComputerMove == argPlayerMove){
            printMessage('Remis');
        }
    } 
    let rockButton = document.getElementById('play-rock');
    let paperButton = document.getElementById('play-paper');
    
    console.log=dokument.getElementById('play-rock').addEventListener('click',function(){
        printMessage('Zagraleś Kamień');return 1;
      });
    dokument.getElementById('play-paper').addEventListener('click',function(){
        printMessage('Zagraleś papier'); return 2;
      });

      


        rockButton.addEventListener('click', buttonClicked);
        paperButton.addEventListener('click', playGame(2));
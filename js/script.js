let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
if(randomNumber == 2){
    computerMove = 'papier';
    
}
if(randomNumber == 3){
    computerMove = 'nożyce';
}
else(randomNumber > 3){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
}


printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput == '2'){
    playerMove = 'papier';
}
if(playerInput == '3'){
playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'papier' && playerMove == 'nożyczki'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'nożyczki' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'nożyczki'){
    printMessage('Komputer wygrywa!');
}
if( computerMove == 'nożyczki' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
}
if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
}
else( computerMove == playerMove)
    printMessage('Remis')
}
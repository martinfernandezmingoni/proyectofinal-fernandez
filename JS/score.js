const dataName = document.getElementById('names');
const dataCharacter = document.getElementById('characters');
const dataScore = document.getElementById('scores');

jugadorName();
jugadorCharacter();
jugadorScore();

function jugadorName(){

    dataName.innerHTML = localStorage.getItem('name');
};

function jugadorCharacter(){
    dataCharacter.innerHTML = localStorage.getItem('personaje');
};

function jugadorScore(){
    dataScore.innerHTML = localStorage.getItem('puntuacion');
}
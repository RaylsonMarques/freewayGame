//variaveis para o ator
let imgAtor1= document.querySelector('#img-ator-1');
let xAtor = 100;
let yAtor = 366;
let comprimentoAtor = 30;
let alturaAtor = 30;

let cima = 38;
let baixo = 40;
let taxa = 5;	

function desenhaAtor() {
	pincel.drawImage(imgAtor1, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(event) {
   if (event.keyCode == cima) {
       yAtor -= taxa;
   } else if (event.keyCode == baixo) {
       yAtor += taxa;
   }
}
document.onkeydown = movimentaAtor;


function colisaoAtor(x, y) {
	if(xAtor < x + comprimentoCarro && yAtor + alturaAtor > y + alturaCarro && yAtor + alturaAtor < y - alturaCarro) {
		yAtor = 366;
	}
}
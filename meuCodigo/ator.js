//variaveis para o ator
let imgAtor1= document.querySelector('#img-ator-1');
let xAtor = 60;
let yAtor = 366;
let comprimentoAtor = 30;
let alturaAtor = 30;
let cima = 38;
let baixo = 40;
let taxa = 7;	
let meusPontos = 0;
let tentativas = 3;
let gameOver = false;

function desenhaAtor() {
	pincel.drawImage(imgAtor1, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(event) {
	if (event.keyCode == cima) {
		yAtor -= taxa;
	} else if (event.keyCode == baixo) {
		if(yAtor < 366) {
			yAtor += taxa;   		
		}
	}
}
document.onkeydown = movimentaAtor;


function colisaoAtor(x, y) {
	if(xAtor < x+ comprimentoCarro && yAtor - alturaAtor > y + alturaCarro && yAtor + alturaAtor < y - alturaCarro) {
		yAtor = 366;
	}
}

function colisaoAtor(xAct, yAct, wAct, hAct, xCar, yCar, wCar, hCar) {
	if ((xAct >= xCar && xAct <= (xCar + wCar)) || (xAct + wAct >= xCar && xAct + wAct <= (xCar + wCar))) {
		if((yAct >= yCar && yAct <= (yCar + hCar)) || ((yAct + hAct) < (yCar && hCar) && (yAct + hAct) > (yCar))) {
			return true;
		}
	}else {
		return
	}
}

function desenhaPlacar(texto, x, y) {
	pincel.font = "18px Verdana";   
	pincel.fillStyle = 'Fuchsia';
	pincel.fillText('PONTOS ' + texto, x, y);
}

function desenhaTentativas(texto, x, y) {
	pincel.font = "18px Verdana";   
	pincel.fillStyle = 'Fuchsia';
	pincel.fillText('VIDAS ' + texto, x, y);
}

function marcaPonto() {
	if(yAtor < 5){
		meusPontos += 1;
		sons[1].play();
		yAtor = 366;
	}
}

function verificaJogo() {
	if(tentativas == 0) {
		gameEnd();
	}
}

function gameEnd() {
	gameOver = true;
	
	if(gameOver) {
		let endGame = clearInterval(playGame);
		alert("A vaquinha não se move mais.\nJaz morta na estrada.\nRecarregue a página para jogar de novo.\nSeu MONSTRO!");		
		pincel.fillStyle = "red";
		pincel.fillText("Seu IDIOTA! Matou a vaquinha!!!", 500 / 4, 400 / 3);
	}
}
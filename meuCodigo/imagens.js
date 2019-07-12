let imgFundo = document.querySelector('#img-fundo');
let sons = new Array();
sons[0] = new Audio('colidiu.mp3');
sons[1] = new Audio('pontos.wav');
sons[2] = new Audio('trilha.mp3');

function desenhaBg() {
	pincel.drawImage(imgFundo, 0, 0, 500, 400);
}

function preload() {
	desenhaBg();
	desenhaAtor();
	desenhaCarro();
	movimentaCarros();
	loopCarro();
	colisao();
	desenhaPlacar(meusPontos, 500/5, 25);
	marcaPonto();
	desenhaTentativas(tentativas, 500-150,25);
	sons[2].play();
}
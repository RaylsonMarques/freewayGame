let imgFundo = document.querySelector('#img-fundo');

function desenhaBg() {
	pincel.drawImage(imgFundo, 0, 0, 500, 400);	
}

function preload() {
	desenhaBg();
	desenhaAtor();
	desenhaCarro();
	//movimentaCarros();
	loopCarro();
	colisao();
}
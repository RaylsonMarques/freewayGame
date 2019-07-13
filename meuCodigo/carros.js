//variaveis dos carros
let imgCarros = [
	imgCarro1= document.querySelector('#img-carro-1'),
	imgCarro2 = document.querySelector('#img-carro-2'),
	imgCarro3 = document.querySelector('#img-carro-3'),
	imgCarro4 = document.querySelector('#img-carro-4'),
	imgCarro5 = document.querySelector('#img-carro-5'),
	imgCarro6 = document.querySelector('#img-carro-6')
];

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let comprimentoCarro = 50;
let alturaCarro = 40;
let velocidadeCarros = [1, 1.25, 1.7, 2.5, 1.65, 1.5];
let colidiu = false;

function criaCarro(img, x, y) {
	pincel.drawImage(img, x, y, comprimentoCarro, alturaCarro);
}

function desenhaCarro() {
	for(let i = 0; i < imgCarros.length; i++) {
		criaCarro(imgCarros[i], xCarros[i], yCarros[i]);
	}
}

function movimentaCarros() {
	for (let i = 0; i < imgCarros.length; i++) {
		xCarros[i] -= velocidadeCarros[i];		
	}
}

function loopCarro() {
	for(let i = 0; i < imgCarros.length; i++) {
		if(xCarros[i] < -50) {
			xCarros[i] = 600;
		}
	}
}

function colisao() {
	for(let i = 0; i < imgCarros.length; i++) {
		colidiu = colisaoAtor(xAtor, yAtor, comprimentoAtor, alturaAtor, xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
		if(colidiu) {
			sons[0].play();
			yAtor = 366;
			if(meusPontos == 0 && tentativas) {
				tentativas -= 1;
				verificaJogo();
			}
			if(meusPontos) {
				meusPontos -= 1;				
			}
		}
	}
}
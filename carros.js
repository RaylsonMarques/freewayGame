//variaveis dos carros
let imgCarros = [
	imgCarro1= document.querySelector('#img-carro-1'),
	imgCarro2 = document.querySelector('#img-carro-2'),
	imgCarro3 = document.querySelector('#img-carro-3')
];

let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let comprimentoCarro = 50;
let alturaCarro = 40;
let velocidadeCarros = [2, 2.5, 3.2];

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
		colisaoAtor(xCarros[i], yCarros[i]);
	}
}
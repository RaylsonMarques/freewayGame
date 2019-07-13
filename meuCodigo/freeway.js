let tela = document.querySelector("canvas"),
pincel = tela.getContext("2d");

function play() {
	preload();
}
playGame = setInterval(play, 5);
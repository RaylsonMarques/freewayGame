let tela = document.querySelector("canvas"),
	 pincel = tela.getContext("2d");

function play() {
	preload();
}
setInterval(play, 20);
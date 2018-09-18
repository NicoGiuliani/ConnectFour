const game = new Game();
const startBtn = document.getElementById("begin-game");

startBtn.addEventListener("click", () => {
	game.startGame();
	startBtn.style.display = "none";
	document.getElementById("play-area").style.opacity = "1";
});
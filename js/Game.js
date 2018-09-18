class Game {
	constructor() {
		this.board = new Board();
		this.players = [];
		this.ready = false;
	}

	createPlayers() {
		return [new Player("Player 1", "#e15258", 1, true),
						 new Player("Player 2", "#e59a13", 2)];
	}

	startGame() {

	}
}
(function () {
	var root = this;

	if (!root.Tetris) throw new Error('Need Tetris.js');

	var Clock = root.Clock = {};

	Clock[1] = function (opts) {
		new Tetris.L(_.clone(opts)).move(0, 13);
		new Tetris.L(_.clone(opts)).move(0, 7).rotate().rotate().move(-1, 5);
		new Tetris.O(_.clone(opts)).move(0, 10);
		new Tetris.L(_.clone(opts)).move(0, 7);
		new Tetris.L(_.clone(opts)).move(0, 4).rotate().rotate().move(-1, 2);
	};

	Clock[2] = function (opts) {
		new Tetris.I(_.clone(opts)).move(1, 10).rotate().move(0, 5);
		new Tetris.J(_.clone(opts)).move(3, 9).rotate().move(0, 4);
		new Tetris.I(_.clone(opts)).move(0, 12);
		new Tetris.L(_.clone(opts)).move(1, 12);
		new Tetris.I(_.clone(opts)).move(1, 6).rotate().move(0, 5);
		new Tetris.L(_.clone(opts)).move(0, 6).rotate().move(0, 1).rotate().move(0, 1).rotate().move(0, 2);
		new Tetris.J(_.clone(opts)).move(3, 5).rotate().move(0, 4);
		new Tetris.O(_.clone(opts)).move(4, 8);
		new Tetris.J(_.clone(opts)).move(3, 5).rotate();
		new Tetris.I(_.clone(opts)).rotate().move(-1, 7).move(2, 0);
		new Tetris.L(_.clone(opts)).rotate().rotate().rotate().move(0, 6);
	};

	Clock[3] = function (opts) {
		new Tetris.J(_.clone(opts)).move(0, 3).rotate().move(2, 3).rotate().move(0, 5).rotate().move(0, 3);
		new Tetris.O(_.clone(opts)).move(0, 14);
		new Tetris.J(_.clone(opts)).move(3, 12);
		new Tetris.I(_.clone(opts)).move(5, 12);
		new Tetris.I(_.clone(opts)).move(0, 4).rotate().move(1, 7);
		new Tetris.L(_.clone(opts)).move(0, 4).rotate().move(0, 2).rotate().rotate().move(0, 4);
		new Tetris.J(_.clone(opts)).move(0, 4).rotate().move(3, 5);
		new Tetris.O(_.clone(opts)).move(4, 8);
		new Tetris.I(_.clone(opts)).move(0, 2).rotate().move(1, 5);
		new Tetris.L(_.clone(opts)).move(0, 2).rotate().move(0, 2).rotate().rotate().move(0, 2);
		new Tetris.J(_.clone(opts)).move(0, 2).rotate().move(3, 3);
		
	};

	Clock[4] = function (opts) {
		new Tetris.O(_.clone(opts)).move(4, 14);
		new Tetris.O(_.clone(opts)).move(4, 12);
		new Tetris.I(_.clone(opts)).move(0, 4).rotate().move(1, 7);
		new Tetris.L(_.clone(opts)).move(0, 4).rotate().move(0, 2).rotate().rotate().move(0, 4);
		new Tetris.J(_.clone(opts)).move(0, 4).rotate().move(3, 5);
		new Tetris.I(_.clone(opts)).move(4, 6);
		new Tetris.J(_.clone(opts)).move(0, 7);
		new Tetris.I(_.clone(opts)).move(5, 6);
		new Tetris.J(_.clone(opts)).rotate().move(0, 1).rotate().move(-1, 5);
	};

	Clock[5] = function (opts) {
		new Tetris.J(_.clone(opts)).rotate().move(2, 2).rotate().move(0, 10).rotate().move(0, 2);
		new Tetris.O(_.clone(opts)).move(0, 14);
		new Tetris.I(_.clone(opts)).move(5, 12);
		new Tetris.J(_.clone(opts)).move(3, 12);
		new Tetris.I(_.clone(opts)).move(0, 4).rotate().move(1, 7);
		new Tetris.L(_.clone(opts)).move(0, 4).rotate().move(0, 2).rotate().rotate().move(0, 4);
		new Tetris.O(_.clone(opts)).move(0, 8);
		new Tetris.J(_.clone(opts)).move(0, 4).rotate().move(3, 5);
		new Tetris.I(_.clone(opts)).move(0, 2).rotate().move(1, 5);
		new Tetris.J(_.clone(opts)).move(0, 2).rotate().move(3, 3);
		new Tetris.L(_.clone(opts)).move(0, 2).rotate().move(0, 2).rotate().rotate().move(0, 2);
	};

	Clock[6] = function (opts) {
		new Tetris.J(_.clone(opts)).rotate().move(0, 2).rotate().move(0, 10).rotate().move(0, 2);
		new Tetris.T(_.clone(opts)).move(3, 14);
		new Tetris.S(_.clone(opts)).move(1, 1).rotate().move(3, 11);
		new Tetris.J(_.clone(opts)).rotate().move(1, 1).rotate(1).move(0, 12);
		new Tetris.T(_.clone(opts)).move(1, 1).rotate().move(3, 9);
		new Tetris.S(_.clone(opts)).move(2, 10);
		new Tetris.J(_.clone(opts)).rotate().move(0, 1).rotate().move(0, 9);
		new Tetris.I(_.clone(opts)).move(0, 10);
		new Tetris.L(_.clone(opts)).move(0, 7);
		new Tetris.L(_.clone(opts)).move(0, 2).rotate().rotate().move(-1, 4);
	};

})();
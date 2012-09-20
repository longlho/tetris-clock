(function () {
	var root = this;

	if (!root.Tetris) throw new Error('Need Tetris.js');

	var pad = function (num) {
		return (num < 10 ? '0' : '') + num; 
	}

	var Clock = root.Clock = [];

	Clock.Base = Class.extend({
		clear: function () {
			for (var i = 0; i < this.pieces.length; i++) {
				this.pieces[i].clear();
			}
		}
	});

	Clock[1] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.L(_.clone(opts)).move(2, 13),
				new Tetris.L(_.clone(opts)).move(0, 7).rotate(1).move(1, 5),
				new Tetris.O(_.clone(opts)).move(2, 10),
				new Tetris.L(_.clone(opts)).move(2, 7),
				new Tetris.L(_.clone(opts)).move(0, 4).rotate(1).move(1, 2)
			]
		}
	});

	Clock[2] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.I(_.clone(opts)).move(1, 10).rotate().move(0, 5),
				new Tetris.J(_.clone(opts)).move(3, 9).rotate().move(0, 4),
				new Tetris.I(_.clone(opts)).move(0, 12),
				new Tetris.L(_.clone(opts)).move(1, 12),
				new Tetris.I(_.clone(opts)).move(1, 6).rotate().move(0, 5),
				new Tetris.L(_.clone(opts)).move(0, 6).rotate().move(0, 1).rotate().move(0, 1).rotate().move(0, 2),
				new Tetris.J(_.clone(opts)).move(3, 5).rotate().move(0, 4),
				new Tetris.O(_.clone(opts)).move(4, 8),
				new Tetris.J(_.clone(opts)).move(3, 5).rotate(),
				new Tetris.I(_.clone(opts)).rotate().move(-1, 7).move(2, 0),
				new Tetris.L(_.clone(opts)).rotate(1).rotate().move(0, 6)
			];
		}
	});

	Clock[3] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.J(_.clone(opts)).move(0, 3).rotate().move(2, 3).rotate().move(0, 5).rotate().move(0, 3),
				new Tetris.O(_.clone(opts)).move(0, 14),
				new Tetris.J(_.clone(opts)).move(3, 12),
				new Tetris.I(_.clone(opts)).move(5, 12),
				new Tetris.I(_.clone(opts)).move(0, 4).rotate().move(1, 7),
				new Tetris.L(_.clone(opts)).move(0, 4).rotate().move(0, 2).rotate(1).move(0, 4),
				new Tetris.J(_.clone(opts)).move(0, 4).rotate().move(3, 5),
				new Tetris.O(_.clone(opts)).move(4, 8),
				new Tetris.I(_.clone(opts)).move(0, 2).rotate().move(1, 5),
				new Tetris.L(_.clone(opts)).move(0, 2).rotate().move(0, 2).rotate(1).move(0, 2),
				new Tetris.J(_.clone(opts)).move(0, 2).rotate().move(3, 3)
			];
		}
	});

	Clock[4] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.O(_.clone(opts)).move(4, 14),
				new Tetris.O(_.clone(opts)).move(4, 12),
				new Tetris.I(_.clone(opts)).move(0, 4).rotate().move(1, 7),
				new Tetris.L(_.clone(opts)).move(0, 4).rotate().move(0, 2).rotate(1).move(0, 4),
				new Tetris.J(_.clone(opts)).move(0, 4).rotate().move(3, 5),
				new Tetris.I(_.clone(opts)).move(4, 6),
				new Tetris.J(_.clone(opts)).move(0, 7),
				new Tetris.I(_.clone(opts)).move(5, 6),
				new Tetris.J(_.clone(opts)).rotate().move(0, 1).rotate().move(-1, 5)
			];
		}
	});

	Clock[5] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.J(_.clone(opts)).rotate().move(2, 2).rotate().move(0, 10).rotate().move(0, 2),
				new Tetris.O(_.clone(opts)).move(0, 14),
				new Tetris.I(_.clone(opts)).move(5, 12),
				new Tetris.J(_.clone(opts)).move(3, 12),
				new Tetris.I(_.clone(opts)).move(0, 4).rotate().move(1, 7),
				new Tetris.L(_.clone(opts)).move(0, 4).rotate().move(0, 2).rotate(1).move(0, 4),
				new Tetris.O(_.clone(opts)).move(0, 8),
				new Tetris.J(_.clone(opts)).move(0, 4).rotate().move(3, 5),
				new Tetris.I(_.clone(opts)).move(0, 2).rotate().move(1, 5),
				new Tetris.J(_.clone(opts)).move(0, 2).rotate().move(3, 3),
				new Tetris.L(_.clone(opts)).move(0, 2).rotate().move(0, 2).rotate(1).move(0, 2)
			];
		}
	});

	Clock[6] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.J(_.clone(opts)).rotate().move(0, 2).rotate().move(0, 10).rotate().move(0, 2),
				new Tetris.T(_.clone(opts)).move(3, 14),
				new Tetris.S(_.clone(opts)).move(1, 1).rotate().move(3, 11),
				new Tetris.J(_.clone(opts)).rotate().move(1, 1).rotate(1).move(0, 12),
				new Tetris.T(_.clone(opts)).move(1, 1).rotate().move(3, 9),
				new Tetris.S(_.clone(opts)).move(2, 10),
				new Tetris.J(_.clone(opts)).rotate().move(0, 1).rotate().move(0, 9),
				new Tetris.I(_.clone(opts)).move(0, 10),
				new Tetris.L(_.clone(opts)).move(0, 7),
				new Tetris.L(_.clone(opts)).move(0, 2).rotate(1).move(-1, 4)
			];
		}
	});

	Clock[7] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.O(_.clone(opts)).move(4, 14),
				new Tetris.L(_.clone(opts)).move(4, 11),
				new Tetris.L(_.clone(opts)).move(4, 7).rotate(1).move(-1, 3),
				new Tetris.O(_.clone(opts)).move(4, 8),
				new Tetris.I(_.clone(opts)).move(0, 2).rotate().move(1, 5),
				new Tetris.J(_.clone(opts)).move(0, 2).rotate().move(3, 3),
				new Tetris.L(_.clone(opts)).move(0, 1).rotate().move(0, 1).rotate(1).move(0, 4)
			];
		}
	});

	Clock[8] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.L(_.clone(opts)).move(3, 12).rotate().move(0, 1),
				new Tetris.J(_.clone(opts)).move(0, 9).rotate().move(0, 1).rotate(1).move(0, 4),
				new Tetris.S(_.clone(opts)).move(3, 13),
				new Tetris.Z(_.clone(opts)).move(0, 13),
				new Tetris.L(_.clone(opts)).move(0, 10),
				new Tetris.J(_.clone(opts)).move(4, 10),
				new Tetris.I(_.clone(opts)).move(0, 2).rotate().move(1, 9),
				new Tetris.L(_.clone(opts)).move(2, 6).rotate().move(0, 2),
				new Tetris.T(_.clone(opts)).move(0, 3).rotate().move(0, 5),
				new Tetris.T(_.clone(opts)).move(1, 6),
				new Tetris.J(_.clone(opts)).move(0, 3).rotate(1).move(-1, 3),
				new Tetris.I(_.clone(opts)).move(5, 6),
				new Tetris.L(_.clone(opts)).move(1, 1).rotate().move(1, 1).rotate().move(0, 4)
			];
		}
	});

	Clock[9] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.L(_.clone(opts)).move(4, 13),
				new Tetris.L(_.clone(opts)).move(4, 7).rotate(1).move(-1, 5),
				new Tetris.I(_.clone(opts)).move(1, 2).rotate().move(0, 9),
				new Tetris.T(_.clone(opts)).move(0, 3).rotate().move(0, 2).rotate(1).move(-1, 4),
				new Tetris.L(_.clone(opts)).move(0, 3).rotate().move(2, 5),
				new Tetris.S(_.clone(opts)).move(0, 3).rotate().move(0, 4),
				new Tetris.I(_.clone(opts)).move(5, 8),
				new Tetris.J(_.clone(opts)).move(0, 3).rotate().move(2, 3),
				new Tetris.J(_.clone(opts)).move(0, 3).rotate().move(3, 2),
				new Tetris.T(_.clone(opts)).move(0, 2).rotate().move(0, 1).rotate().move(0, 2)
			];
		}
	});

	Clock[0] = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.I(_.clone(opts)).move(0, 7).rotate().move(0, 8),
				new Tetris.I(_.clone(opts)).move(5, 12),
				new Tetris.T(_.clone(opts)).move(0, 13),
				new Tetris.Z(_.clone(opts)).move(0, 3).rotate().move(0, 8),
				new Tetris.T(_.clone(opts)).move(0, 3).rotate().move(3, 10),
				new Tetris.Z(_.clone(opts)).move(0, 3).rotate().move(0, 6),
				new Tetris.Z(_.clone(opts)).move(0, 3).rotate().move(4, 7),
				new Tetris.T(_.clone(opts)).move(0, 4).rotate().move(-1, 1).rotate(1).move(0, 2),
				new Tetris.Z(_.clone(opts)).move(0, 6),
				new Tetris.T(_.clone(opts)).move(0, 1).rotate().move(0, 1).rotate(1).move(3, 6),
				new Tetris.J(_.clone(opts)).move(1, 1).rotate().move(2, 5),
				new Tetris.I(_.clone(opts)).move(0, 1).rotate().move(2, 5)
			];
		}
	});

	Clock.D = Clock.Base.extend({
		init: function (opts) {
			this.pieces = [
				new Tetris.O(_.clone(opts)).move(2, 12),
				new Tetris.O(_.clone(opts)).move(2, 8)
			];
		}
	});

	Clock.current = {
		str: '',
		arr: []
	};

	Clock.refresh = function (string) {
		var date = new Date()
			, base = 5
			, hours = pad(date.getHours())
			,	mins = pad(date.getMinutes())
			, str = string || (hours + 'D' + mins)
			,	i = 0;

		for (; i < str.length; i++) {
			if (str[i] === Clock.current.str[i]) continue;
			Clock.current.arr[i] && Clock.current.arr[i].clear();
			Clock.current.arr[i] = new Clock[str[i]]({ x: base + 80*i, y: 0 });
		}

		Clock.current.str = str;
	}
})();
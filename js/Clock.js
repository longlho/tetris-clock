(function () {

	var Tetris = window.Tetris;
	var Shapes = window.Shapes;

	function pad (num) {
		return (num < 10 ? '0' : '') + num;
	}

	var Clock = window.Clock = {};

	function clear (pieces) {
		pieces.forEach(function (p) {
			p.clear();
		});
	};

	function getDigit (digit, opts) {
		switch (digit) {
			case 0:
				return [
					Shapes.getShape('I', opts).move(0, 7).rotate().move(0, 8),
					Shapes.getShape('I', opts).move(5, 12),
					Shapes.getShape('T', opts).move(0, 13),
					Shapes.getShape('Z', opts).move(0, 3).rotate().move(0, 8),
					Shapes.getShape('T', opts).move(0, 3).rotate().move(3, 10),
					Shapes.getShape('Z', opts).move(0, 3).rotate().move(0, 6),
					Shapes.getShape('Z', opts).move(0, 3).rotate().move(4, 7),
					Shapes.getShape('T', opts).move(0, 4).rotate().move(-1, 1).rotate(1).move(0, 2),
					Shapes.getShape('Z', opts).move(0, 6),
					Shapes.getShape('T', opts).move(0, 1).rotate().move(0, 1).rotate(1).move(3, 6),
					Shapes.getShape('J', opts).move(1, 1).rotate().move(2, 5),
					Shapes.getShape('I', opts).move(0, 1).rotate().move(2, 5)
				];
			case 1:
				return [
					Shapes.getShape('L', opts).move(2, 13),
					Shapes.getShape('L', opts).move(0, 7).rotate(1).move(1, 5),
					Shapes.getShape('O', opts).move(2, 10),
					Shapes.getShape('L', opts).move(2, 7),
					Shapes.getShape('L', opts).move(0, 4).rotate(1).move(1, 2)
				];
			case 2:
				return [
					Shapes.getShape('I', opts).move(1, 10).rotate().move(0, 5),
					Shapes.getShape('J', opts).move(3, 9).rotate().move(0, 4),
					Shapes.getShape('I', opts).move(0, 12),
					Shapes.getShape('L', opts).move(1, 12),
					Shapes.getShape('I', opts).move(1, 6).rotate().move(0, 5),
					Shapes.getShape('L', opts).move(0, 6).rotate().move(0, 1).rotate().move(0, 1).rotate().move(0, 2),
					Shapes.getShape('J', opts).move(3, 5).rotate().move(0, 4),
					Shapes.getShape('O', opts).move(4, 8),
					Shapes.getShape('J', opts).move(3, 5).rotate(),
					Shapes.getShape('I', opts).rotate().move(-1, 7).move(2, 0),
					Shapes.getShape('L', opts).rotate(1).rotate().move(0, 6)
				];
			case 3:
				return [
					Shapes.getShape('J', opts).move(0, 3).rotate().move(2, 3).rotate().move(0, 5).rotate().move(0, 3),
					Shapes.getShape('O', opts).move(0, 14),
					Shapes.getShape('J', opts).move(3, 12),
					Shapes.getShape('I', opts).move(5, 12),
					Shapes.getShape('I', opts).move(0, 4).rotate().move(1, 7),
					Shapes.getShape('L', opts).move(0, 4).rotate().move(0, 2).rotate(1).move(0, 4),
					Shapes.getShape('J', opts).move(0, 4).rotate().move(3, 5),
					Shapes.getShape('O', opts).move(4, 8),
					Shapes.getShape('I', opts).move(0, 2).rotate().move(1, 5),
					Shapes.getShape('L', opts).move(0, 2).rotate().move(0, 2).rotate(1).move(0, 2),
					Shapes.getShape('J', opts).move(0, 2).rotate().move(3, 3)
				];
			case 4:
				return [
					Shapes.getShape('O', opts).move(4, 14),
					Shapes.getShape('O', opts).move(4, 12),
					Shapes.getShape('I', opts).move(0, 4).rotate().move(1, 7),
					Shapes.getShape('L', opts).move(0, 4).rotate().move(0, 2).rotate(1).move(0, 4),
					Shapes.getShape('J', opts).move(0, 4).rotate().move(3, 5),
					Shapes.getShape('I', opts).move(4, 6),
					Shapes.getShape('J', opts).move(0, 7),
					Shapes.getShape('I', opts).move(5, 6),
					Shapes.getShape('J', opts).rotate().move(0, 1).rotate().move(-1, 5)
				];
			case 5:
				return [
					Shapes.getShape('J', opts).rotate().move(2, 2).rotate().move(0, 10).rotate().move(0, 2),
					Shapes.getShape('O', opts).move(0, 14),
					Shapes.getShape('I', opts).move(5, 12),
					Shapes.getShape('J', opts).move(3, 12),
					Shapes.getShape('I', opts).move(0, 4).rotate().move(1, 7),
					Shapes.getShape('L', opts).move(0, 4).rotate().move(0, 2).rotate(1).move(0, 4),
					Shapes.getShape('O', opts).move(0, 8),
					Shapes.getShape('J', opts).move(0, 4).rotate().move(3, 5),
					Shapes.getShape('I', opts).move(0, 2).rotate().move(1, 5),
					Shapes.getShape('J', opts).move(0, 2).rotate().move(3, 3),
					Shapes.getShape('L', opts).move(0, 2).rotate().move(0, 2).rotate(1).move(0, 2)
				];
			case 6:
				return [
					Shapes.getShape('J', opts).rotate().move(0, 2).rotate().move(0, 10).rotate().move(0, 2),
					Shapes.getShape('T', opts).move(3, 14),
					Shapes.getShape('S', opts).move(1, 1).rotate().move(3, 11),
					Shapes.getShape('J', opts).rotate().move(1, 1).rotate(1).move(0, 12),
					Shapes.getShape('T', opts).move(1, 1).rotate().move(3, 9),
					Shapes.getShape('S', opts).move(2, 10),
					Shapes.getShape('J', opts).rotate().move(0, 1).rotate().move(0, 9),
					Shapes.getShape('I', opts).move(0, 10),
					Shapes.getShape('L', opts).move(0, 7),
					Shapes.getShape('L', opts).move(0, 2).rotate(1).move(-1, 4)
				];
			case 7:
				return [
					Shapes.getShape('O', opts).move(4, 14),
					Shapes.getShape('L', opts).move(4, 11),
					Shapes.getShape('L', opts).move(4, 7).rotate(1).move(-1, 3),
					Shapes.getShape('O', opts).move(4, 8),
					Shapes.getShape('I', opts).move(0, 2).rotate().move(1, 5),
					Shapes.getShape('J', opts).move(0, 2).rotate().move(3, 3),
					Shapes.getShape('L', opts).move(0, 1).rotate().move(0, 1).rotate(1).move(0, 4)
				];
			case 8:
				return [
					Shapes.getShape('L', opts).move(3, 12).rotate().move(0, 1),
					Shapes.getShape('J', opts).move(0, 9).rotate().move(0, 1).rotate(1).move(0, 4),
					Shapes.getShape('S', opts).move(3, 13),
					Shapes.getShape('Z', opts).move(0, 13),
					Shapes.getShape('L', opts).move(0, 10),
					Shapes.getShape('J', opts).move(4, 10),
					Shapes.getShape('I', opts).move(0, 2).rotate().move(1, 9),
					Shapes.getShape('L', opts).move(2, 6).rotate().move(0, 2),
					Shapes.getShape('T', opts).move(0, 3).rotate().move(0, 5),
					Shapes.getShape('T', opts).move(1, 6),
					Shapes.getShape('J', opts).move(0, 3).rotate(1).move(-1, 3),
					Shapes.getShape('I', opts).move(5, 6),
					Shapes.getShape('L', opts).move(1, 1).rotate().move(1, 1).rotate().move(0, 4)
				];
			case 9:
				return [
					Shapes.getShape('L', opts).move(4, 13),
					Shapes.getShape('L', opts).move(4, 7).rotate(1).move(-1, 5),
					Shapes.getShape('I', opts).move(1, 2).rotate().move(0, 9),
					Shapes.getShape('T', opts).move(0, 3).rotate().move(0, 2).rotate(1).move(-1, 4),
					Shapes.getShape('L', opts).move(0, 3).rotate().move(2, 5),
					Shapes.getShape('S', opts).move(0, 3).rotate().move(0, 4),
					Shapes.getShape('I', opts).move(5, 8),
					Shapes.getShape('J', opts).move(0, 3).rotate().move(2, 3),
					Shapes.getShape('J', opts).move(0, 3).rotate().move(3, 2),
					Shapes.getShape('T', opts).move(0, 2).rotate().move(0, 1).rotate().move(0, 2)
				];
			default:
				return [
					Shapes.getShape('O', opts).move(2, 12),
					Shapes.getShape('O', opts).move(2, 8)
				];
		}
	};


	Clock.current = {
		str: '',
		arr: []
	};

	Clock.refresh = function (string) {
		var date = new Date();
		var base = 5;
		var hours = pad(date.getHours());
		var mins = pad(date.getMinutes());
		var str = string || (hours + 'D' + mins);

		str.split('').forEach(function (s, i) {
			if (s === Clock.current.str[i]) {
				return;
			}
			Clock.current.arr[i] && clear(Clock.current.arr[i]);
			Clock.current.arr[i] = getDigit(+s, { x: base + 80*i, y: 0 });
		});

		Clock.current.str = str;
	};
})();

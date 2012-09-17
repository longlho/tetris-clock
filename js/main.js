(function () {
	var root = this;

	if (!root.$) throw new Error('jQuery is required');

	var Tetris = root.Tetris = {
		context: {},
		LENGTH: 10,
		GAP: 1,
		populateSquare: function (opts) {
			var sqArr = []
				, opts = _.extend({
						length: Tetris.LENGTH,
						color: 'black'
					}, opts)
				,	coords = opts.coords;
			for (var i = 0; i < coords.length; i++) {
				sqArr.push(new Square(_.extend({}, opts, {
					x: opts.x + (opts.length + Tetris.GAP) * coords[i][0],
					y: opts.y + (opts.length + Tetris.GAP) * coords[i][1]
				})));
			}
			return sqArr;
		}
	};

	var Square = function (opts) {
		$.extend(this, opts);
		Tetris.context.fillStyle = (this.color || 'black');
		Tetris.context.fillRect(this.x, this.y, this.length, this.length);
		this.clear = function () {
			Tetris.context.clearRect(this.x, this.y, this.length, this.length);
		};
	};

	var Shape = Class.extend({
		init: function (coords, opts) {
			this.opts = opts = _.extend({
				coords: coords
			}, opts);
			this.arr = Tetris.populateSquare(this.opts);
		},
		clear: function () {
			_.each(this.arr, function (sq) {
				sq.clear();
			});
		},
		draw: function () {
			this.arr = Tetris.populateSquare(this.opts);
		},
		rotate: function () {
			this.clear();
			var coords = this.opts.coords
				, tmp;
			for (var i = 0; i < coords.length; i++) {
				tmp = coords[i][0];
				coords[i][0] = coords[i][1];
				coords[i][1] = tmp;
			}
			this.draw();
		}
	});

	Tetris.I = Shape.extend({
		init: function (opts) {
			this._super([[0, 0], [0, 1], [0, 2], [0, 3]], opts);
		}
	});

	Tetris.L = Shape.extend({
		init: function (opts) {
			this._super([[0, 0], [0, 1], [0, 2], [1, 2]], opts);
		}
	});
	
	Tetris.J = Shape.extend({
		init: function (opts) {
			this._super([[1, 0], [1, 1], [1, 2], [0, 2]], opts);
		}
	});

	Tetris.O = Shape.extend({
		init: function (opts) {
			this._super([[0, 0], [0, 1], [1, 0], [1, 1]], opts);
		},
		rotate: $.noop
	});

	Tetris.S = Shape.extend({
		init: function (opts) {
			this._super([[0, 1], [0, 2], [1, 0], [1, 1]], opts);
		}
	});

	Tetris.T = Shape.extend({
		init: function (opts) {
			this._super([[0, 0], [0, 1], [0, 2], [1, 1]], opts);
		}
	});

	Tetris.Z = Shape.extend({
		init: function (opts) {
			this._super([[0, 0], [0, 1], [1, 1], [1, 2]], opts);
		}
	});

})();
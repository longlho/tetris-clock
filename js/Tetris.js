(function () {
  var root = this;

  if (!root.$) throw new Error('jQuery is required');

  var Tetris = root.Tetris = {
    context: {},
    LENGTH: 10,
    GAP: 1,
    populateSquare: function (options) {
      var sqArr = []
        , opts = _.extend({
            length: Tetris.LENGTH,
            color: 'black'
          }, options)
        , coords = opts.coords;
      for (var i = 0; i < coords.length; i++) {
        sqArr.push(new Square(_.extend({}, opts, {
          x: opts.x + (opts.length + Tetris.GAP) * coords[i][0],
          y: opts.y + (opts.length + Tetris.GAP) * coords[i][1]
        })));
      }
      return sqArr;
    },
    //Hardcode it cause it's small enuf.
    rotate: function (coord) {
      if (_.isEqual(coord, [0, 0])) return [0, 2];
      if (_.isEqual(coord, [0, 1])) return [1, 2];
      if (_.isEqual(coord, [0, 2])) return [2, 2];
      if (_.isEqual(coord, [1, 0])) return [0, 1];
      if (_.isEqual(coord, [1, 1])) return [1, 1];
      if (_.isEqual(coord, [1, 2])) return [2, 1];
      if (_.isEqual(coord, [2, 0])) return [0, 0];
      if (_.isEqual(coord, [2, 1])) return [1, 0];
      if (_.isEqual(coord, [2, 2])) return [2, 0];
    },
    stack: 0,
    time: 0,
    queue: function (fn) {
      fn && Tetris.stack++;
      Tetris.time++;
      setTimeout(function () {
        fn();
        Tetris.stack--;
        if (!Tetris.stack) {
          Tetris.time = 0;
        }
      }, 25 * Tetris.time);
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
      this.opts = _.extend({
        coords: coords
      }, opts);
      Tetris.queue(_.bind(function () {
        this.arr = Tetris.populateSquare(this.opts);
      }, this));
    },
    clear: function () {
      _.each(this.arr, function (sq) {
        sq.clear();
      });
    },
    draw: function () {
      this.arr = Tetris.populateSquare(this.opts);
    },
    rotate: function (times) {
      Tetris.queue(_.bind(function () {
        this.clear();
        var coords = this.opts.coords
          , tmpX
          , tmpY;
        for (var i = 0; i < coords.length; i++) {
          coords[i] = Tetris.rotate(coords[i]);
        }
        this.draw();
      }, this));
      if (!times)
        return this;
      return this.rotate(times - 1);
    },
    move: function (xUnit, yUnit) {
      var i;
      if (xUnit > 0) {
        for (i = 0; i < xUnit; i++) {
          Tetris.queue(_.bind(function () {
            this.clear();
            this.opts.x += (Tetris.LENGTH + Tetris.GAP);
            this.draw();
          }, this));
        }
      } else {
        for (i = 0; i > xUnit; i--) {
          Tetris.queue(_.bind(function () {
            this.clear();
            this.opts.x -= (Tetris.LENGTH + Tetris.GAP);
            this.draw();
          }, this));
        }
      }
      for (i = 0; i < yUnit; i++) {
        Tetris.queue(_.bind(function () {
          this.clear();
          this.opts.y += (Tetris.LENGTH + Tetris.GAP);
          this.draw();
        }, this));
      }
      return this;
    }
  });

  Tetris.I = Shape.extend({
    init: function (opts) {
      this._super([[0, 0], [0, 1], [0, 2], [0, 3]], opts);
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
      Tetris.queue(_.bind(this.draw, this));
      return this;
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
      this._super([[1, 0], [2, 0], [1, 1], [0, 1]], opts);
    }
  });

  Tetris.T = Shape.extend({
    init: function (opts) {
      this._super([[0, 1], [1, 1], [2, 1], [1, 0]], opts);
    }
  });

  Tetris.Z = Shape.extend({
    init: function (opts) {
      this._super([[0, 0], [1, 0], [1, 1], [2, 1]], opts);
    }
  });

})();
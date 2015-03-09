(function () {
  var utils = window.utils;

  function Square (opts) {
    utils.extend(this, opts);
    Tetris.context.fillStyle = (this.color || 'black');
    Tetris.context.fillRect(this.x, this.y, this.length, this.length);
  }

  Square.prototype.clear = function () {
    Tetris.context.clearRect(this.x, this.y, this.length, this.length);
  };

  var Tetris = window.Tetris = {
    context: {},
    LENGTH: 10,
    GAP: 1,
    populateSquare: function (options) {
      var opts = utils.extend({
        length: Tetris.LENGTH,
        color: 'white'
      }, options);
      return opts.coords.map(function (coord) {
        return new Square({
          length: opts.length,
          x: opts.x + (opts.length + Tetris.GAP) * coord[0],
          y: opts.y + (opts.length + Tetris.GAP) * coord[1],
          color: opts.color
        });
      });
    },
    rotate: function (coord) {
      return [coord[1], 2 - coord[0]];
    },
    stack: 0,
    time: 0,
    msPerMove: 25,
    queue: function (fn) {
      fn && Tetris.stack++;
      Tetris.time++;
      setTimeout(function () {
        fn();
        Tetris.stack--;
        if (!Tetris.stack) {
          Tetris.time = 0;
        }
      }, Tetris.msPerMove * Tetris.time);
    }
  };
})();

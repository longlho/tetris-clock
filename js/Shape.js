(function () {
  'use strict';

  var Tetris = window.Tetris;
  var utils = window.utils;

  function Shape (coords, opts) {
    this.opts = utils.extend({}, opts);
    this.opts.coords || (this.opts.coords = coords);
    this.arr = [];
    utils.bindAll(this, ['_rotate', 'draw']);
    Tetris.queue(this.draw);

  }

  Shape.prototype.clear = function () {
    this.arr.forEach(function (sq) {
      sq.clear();
    });
  };

  Shape.prototype.draw = function () {
    this.arr = Tetris.populateSquare(this.opts);
  };

  Shape.prototype._rotate = function () {
    this.clear();
    this.opts.coords = this.opts.coords.map(function (c) {
      return Tetris.rotate(c);
    });
    this.draw();
  };

  Shape.prototype.rotate = function (times) {
    Tetris.queue(this._rotate);
    return times ? this.rotate(times - 1) : this;
  };

  Shape.prototype._moveAxis = function (xOrY, dir) {
    this.clear();
    this.opts[xOrY] += (Tetris.LENGTH + Tetris.GAP) * (dir || 1);
    this.draw();
  };

  Shape.prototype.move = function (xUnit, yUnit) {
    var i;
    for (i = 0; i < Math.abs(xUnit); i++) {
      Tetris.queue(this._moveAxis.bind(this, 'x', xUnit > 0 ? 1 : -1));
    }
    for (i = 0; i < yUnit; i++) {
      Tetris.queue(this._moveAxis.bind(this, 'y'));
    }
    return this;
  };

  /**
   * I is special one since its rotation is custom
   */
  function I (opts) {
    Shape.call(this, [[0, 0], [0, 1], [0, 2], [0, 3]], opts);
  }

  I.prototype = Object.create(Shape.prototype);
  I.prototype.constructor = I;

  I.prototype.rotate = function () {
    this.clear();
    var tmp;
    this.opts.coords.forEach(function (coord) {
      tmp = coord[0];
      coord[0] = coord[1];
      coord[1] = tmp;
    });
    Tetris.queue(this.draw);
    return this;
  };

  function getShape (type, opts) {
    switch (type) {
      default:
        throw new Error('Unsupported type ' + type);
      case 'I':
        return new I(opts);
      case 'L':
        return new Shape([[0, 0], [0, 1], [0, 2], [1, 2]], opts);
      case 'J':
        return new Shape([[1, 0], [1, 1], [1, 2], [0, 2]], opts);
      case 'O':
        return new Shape([[0, 0], [0, 1], [1, 0], [1, 1]], opts);
      case 'S':
        return new Shape([[1, 0], [2, 0], [1, 1], [0, 1]], opts);
      case 'T':
        return new Shape([[0, 1], [1, 1], [2, 1], [1, 0]], opts);
      case 'Z':
        return new Shape([[0, 0], [1, 0], [1, 1], [2, 1]], opts);
    }
  }

  window.Shapes = {
    getShape: getShape
  };

})();

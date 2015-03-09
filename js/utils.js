(function () {
  window.utils = {
    extend: function () {
      var args = Array.prototype.slice.call(arguments)
        , obj1 = args.shift();

      if (!args.length) {
        return obj1;
      }

      args.forEach(function (obj) {
        if (!obj) {
          return;
        }

        Object.keys(obj).forEach(function (k) {
          obj1[k] = obj[k];
        });
      });

      return obj1;
    },
    isArrEqual: function (arr1, arr2) {
      if (arr1 && arr2) {
        return arr1
          .map(function (el, i) {
            return el === arr2[i];
          })
          .reduce(function (eq1, eq2) {
            return eq1 && eq2;
          });
      }
      return false;
    },
    bindAll: function (context, funcs) {
      funcs.forEach(function (f) {
        context[f] && (context[f] = context[f].bind(context));
      });
    }
  };
})();

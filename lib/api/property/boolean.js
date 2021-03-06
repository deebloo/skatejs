(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.boolean = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  module.exports = {
    'default': false,
    deserialize: function deserialize(value) {
      return value === null ? false : true;
    },
    serialize: function serialize(value) {
      return value ? '' : undefined;
    },
    type: function type(value) {
      return !!value;
    }
  };
});
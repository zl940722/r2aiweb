// import includes from 'core-js/library/fn/string/virtual/includes'
// import startsWith from 'core-js/library/fn/string/virtual/startsWith'

// String.prototype.includes = includes
// String.prototype.startsWith = startsWith

if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value: function (search, pos) {
      pos = !pos || pos < 0 ? 0 : +pos;
      return this.substring(pos, pos + search.length) === search;
    }
  });
}

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

if (!Array.prototype.unshift) {
  Array.prototype.unshift = function () {
    ///定义一个数组保存当前数组的值和newUnShift方法传递进来的参数
    var newArr = [];
    //循环newUnShift方法传递进来的参数并保存到newArr中
    for (var i = 0; i < arguments.length; i++) {
      newArr[i] = arguments[i];
    }
    var len = newArr.length;
    //循环当前要添加数组 也保存在newArr中
    for (var j = 0; j < this.length; j++) {
      newArr[parseInt(len + j)] = this[j];
    }
    //重新给当前数组插入合并后的数组值
    for (var k = 0; k < newArr.length; k++) {
      this[k] = newArr[k];
    }
    return this.length;
  }
}

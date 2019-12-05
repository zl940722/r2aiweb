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

if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (valueToFind, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(valueToFind, elementK) is true, return true.
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

if (!Array.prototype.toLocaleString) {
  Object.defineProperty(Array.prototype, 'toLocaleString', {
    value: function(locales, options) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      
      var a = Object(this);
      
      // 2. Let len be ? ToLength(? Get(A, "length")).
      var len = a.length >>> 0;
      
      // 3. Let separator be the String value for the
      //    list-separator String appropriate for the
      //    host environment's current locale (this is
      //    derived in an implementation-defined way).
      // NOTE: In this case, we will use a comma
      var separator = ',';
      
      // 4. If len is zero, return the empty String.
      if (len === 0) {
        return '';
      }
      
      // 5. Let firstElement be ? Get(A, "0").
      var firstElement = a[0];
      // 6. If firstElement is undefined or null, then
      //  a.Let R be the empty String.
      // 7. Else,
      //  a. Let R be ?
      //     ToString(?
      //       Invoke(
      //        firstElement,
      //        "toLocaleString",
      //        « locales, options »
      //       )
      //     )
      var r = firstElement == null ?
        '' : firstElement.toLocaleString(locales, options);
      
      // 8. Let k be 1.
      var k = 1;
      
      // 9. Repeat, while k < len
      while (k < len) {
        // a. Let S be a String value produced by
        //   concatenating R and separator.
        var s = r + separator;
        
        // b. Let nextElement be ? Get(A, ToString(k)).
        var nextElement = a[k];
        
        // c. If nextElement is undefined or null, then
        //   i. Let R be the empty String.
        // d. Else,
        //   i. Let R be ?
        //     ToString(?
        //       Invoke(
        //        nextElement,
        //        "toLocaleString",
        //        « locales, options »
        //       )
        //     )
        r = nextElement == null ?
          '' : nextElement.toLocaleString(locales, options);
        
        // e. Let R be a String value produced by
        //   concatenating S and R.
        r = s + r;
        
        // f. Increase k by 1.
        k++;
      }
      
      // 10. Return R.
      return r;
    }
  });
}

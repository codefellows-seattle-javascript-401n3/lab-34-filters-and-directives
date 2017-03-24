'use strict';

module.exports = function() {
  return function(galleries, limit=Infinity) {
    return galleries.sort((a, b) => {
      return b.name < a.name;
    })
    .slice(0,limit);
  };
};

module.exports = function() {
  function genReg(str) {
    let pattern = '.*' + str.split('').join('.*') + '.*';
    return new RegExp(pattern);
  }
  console.log(genReg('this is my string'));
};

'use strict';

module.exports = function() {
  return function(galleries, str) {
    if(!str) return galleries;

    // let pattern = `.*${str.split('').join('.*')}.*`;
    let pattern = '.*' + str.split('').join('.*') + '.*';
    let regExp = new RegExp(pattern);
    return galleries.filter(gallery => {
      regExp.gallery.name
    });
  };
};

//the below code is duncan's from slugram, comparing notes here...
// module.exports = function(input){
//   debug(`creating fuzzy regex from ${input}`)
//   if (!input || typeof input !== 'string')
//     return new RegExp('.*')
//   let result = input.split('').join('.*')
//   return new RegExp(`.*${result}.*`)
// }









// module.exports = function() {
//   return function(galleries, limit=Infinity) {
//     return galleries.sort((a, b) => {
//       return b.name < a.name;
//     })
//     .slice(0,limit);
//   };
// };
//
// module.exports = function() {
//   function genReg(str) {
    // let pattern = '.*' + str.split('').join('.*') + '.*';
//     return new RegExp(pattern);
//   }
//   console.log(genReg('this is my string'));
// };

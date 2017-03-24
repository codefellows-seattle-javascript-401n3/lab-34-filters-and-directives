
'use strict'

module.exports = function(){
  return function(galleries, searchTerm){
    let fuzzySearch = makeFuzzySearch(searchTerm);

    return galleries.filter(gallery => {
      return fuzzySearch.test(gallery.name.toUpperCase());
    });
  };
};

function makeFuzzySearch(input){
  if (!input) return /.*/
  let fuzzyString = '.*' + input.toUpperCase().split('').join('.*') + '.*';
  return new RegExp(fuzzyString);
}

// 'use strict';
//
//
//
// module.exports = function() {
//   return function(galleries, str) {
//     if(!str) return galleries;
//
//     let pattern = '.*' + str.split('').join('.*') + '.*';
//     let regExp = new RegExp(pattern);
//
//     return galleries.filter(gallery => {
//
//     });
//   };
// };

'use strict';

require('./_thumbnail.scss');
//line 5 is attempting to explain to the linter where exactly gallery is being defined.
require('../create-gallery/create-gallery.js');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'picService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<',
  },
};

function ThumbnailController($log, picService) {
  $log.debug('ThumbnailController');

  this.deletePic = function() {
    $log.debug('thumbnailCtrl.deletePic');
    // picService.deletePic(this.gallery, this.gallery.pics);
    console.log('from inside thumbnailCtrl.deletePic(): this.pic', this.pic);
    console.log('from inside thumbnailCtrl.deletePic(): this.gallery',this.gallery);
    picService.deletePic(this.gallery.pics);
  };

}

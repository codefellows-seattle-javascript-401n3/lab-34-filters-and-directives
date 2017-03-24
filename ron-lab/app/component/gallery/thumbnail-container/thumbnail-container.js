'use strict';

require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  controller: ['$log', 'picService', ThumbnailContainerController],
  controllerAs: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '<',
    pic: '<',
  },
};

function ThumbnailContainerController($log, picService) {
  $log.debug('ThumbnailContainerController');
  this.gallery = null;
  this.pic = null;
  this.deletePic = function() {
    $log.debug('thumbnailContainerCtrl');
    console.log('inside of this.thumbnailContainerCtrl.deletePic()');
    // console.log('this.gallery', this.gallery);
    // console.log('this.gallery.pics', this.gallery.pics)
    picService.deletePic(this.gallery, this.gallery.pics);
  };
}

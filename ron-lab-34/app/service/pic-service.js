'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', picService];

function picService($q, $log, $http, Upload, authService) {
  $log.debug('picService');

  let service = {};

  service.uploadGalleryPic = function(galleryData, picData) {
    $log.debug('uploadGalleryPic');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/gallery/${galleryData._id}/pic`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };

      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: picData.name,
          desc: picData.desc,
          file: picData.file,
        },
      });
    })
    .then( res => {
      galleryData.pics.unshift(res.data);
      return res.data;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };



  service.deletePic = function(picData, galleryData) {

    $log.debug('thumbnailContainerCtrl.deletePic()');

    // console.log('this.gallery.picData._id inside deletePic', this.gallery.picData._id);
    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/gallery/${galleryData._id}/pic/${picData._id}`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };
      return $http.delete(url, headers);
    })
    .then( res => {
      galleryData.pics.unshift(res.data);
      $log.log('success\n', res.data);

      for(let i = 0; i < this.gallery.pics.length; i++) {
        // console.log('this.gallery.pics' ,this.gallery.pics);
        let current = this.gallery.pics[i];
        // console.log('current', current);
        if(current._id == this._id[i]) {
          this.gallery.pics.splice(i, 1);
        }
      }

      return res.data;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}

'use strict';

angular.module('shareApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });

require.config({
  paths: {
    'angular': '../lib/angular.min',
    'jquery': '../lib/jquery-3.2.1.min',
    'bootstrap': '../lib/bootstrap-3.3.7-dist/js/bootstrap.min'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'bootstrap': {
      deps: ['jquery']
    }
  }
});
require(['jquery', 'bootstrap']);

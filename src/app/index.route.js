(function() {
  'use strict';
  angular
    .module('angularProjekt')
    .config(routerConfig);
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.template', {
        url: '/main',
        template: '<main-template></main-template>'
      });
    $urlRouterProvider.otherwise('/home/main');
  }
})();
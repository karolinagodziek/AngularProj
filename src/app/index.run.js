(function() {
  'use strict';

  angular
    .module('angularProjekt')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

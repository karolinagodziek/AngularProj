(function() {
  'use strict';
  angular
    .module('angularProjekt')
    .directive('mainTemplate', mainTemplate);
  /** @ngInject */
  function mainTemplate() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/states/template/template.html',
      controller: mainTemplateController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
    /** @ngInject */
    function mainTemplateController(){
      var vm = this;
      vm.tekst = "Czeœæ, to jest wg best practise, nie u¿ywamy scope tylko vm - zobacz sobie w widoku czyli w mainTemplate.html, ¿e wyœwiêtlamy tylko t¹ zmienn¹";
      console.log("MAIN TEST ");
    }
  }
})();
angular.module('myApp').config(function($routeProvider) {

  $routeProvider
      .when('/sessions', {
        templateUrl:"templates/index.html",
        controller:'ListController'
      })
      .when('/',{
        templateUrl:"templates/form.html",
        controller:'ListController'

      })

    .otherwise({
        redirectTo: '/'

})
});

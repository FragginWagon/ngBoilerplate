angular.module('ngBoilerplate').config(function($routeProvider, $locationProvider) {
  //$locationProvider.html5Mode(true);
  $routeProvider.
  when("/", {
    // Can be changed to anything (webpage and controller)
    templateUrl: "app/components/login/login.html",
    controller: "loginController",
    title: 'ngBoilerplate - Login'
  }).
  otherwise({
    redirectTo: "/"
  });
});

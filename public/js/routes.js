(function() {
    
    var app = angular.module('speakup', ['ngRoute','ngResource']);
    
    app.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            .when('/', {
                controller: 'MainController"',
                templateUrl: 'views/firstpage.html'
            })
            .when('/hello', {
                controller: 'OrdersController',
                templateUrl: 'views/firstpage.html'
            })
            .otherwise( { redirectTo: '/' } );
        $locationProvider.html5Mode(true);
  }];
    
}());
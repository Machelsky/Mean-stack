(function() {
    
    var app = angular.module('speakup', ['ngRoute','ngResource']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController"',
                templateUrl: 'views/firstpage.html'
            })
            .when('/hello', {
                controller: 'OrdersController',
                templateUrl: 'views/test.ejs'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());
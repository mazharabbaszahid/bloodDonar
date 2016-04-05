// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase'])
.config(function($urlRouterProvider, $stateProvider, $httpProvider, $ionicConfigProvider) {
  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'templates/signin.html',
      controller: 'signinController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupController'
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    });

  $urlRouterProvider.otherwise('/signin');
  $httpProvider.interceptors.push('httpInterceptor');
})
  .run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      var firebaseLocalToken = localStorage.getItem('token');
      if (toState.loginCompulsory && !firebaseLocalToken) {
        event.preventDefault();
        $state.go('signin');
      }
    });
  })
  .factory('httpInterceptor', function() {
    return {
      request: function(config) {
        var token = localStorage.getItem('token');
        if (token) {
          config.url = config.url + "?token=" + token;
        }
        return config;
      }
    }
  });

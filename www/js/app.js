// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('demo', ['ionic'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'LoginController'
        })

    .state('app', {
            url: '/app',
            templateUrl: 'app-abstract.html',
            abstract: true,
            cache: true,
            controller: 'AppAbstractController'
        })
        .state('app.informations', {
            url: '/informations',
            views: {
                'app': {
                    templateUrl: 'app-informations.html',
                    controller: 'InformationsController'
                }
            }
        })

    .state('app.works', {
        url: '/works',
        views: {
            'app': {
                templateUrl: 'app-works.html',
                controller: 'WorksController'
            }
        }
    })

    .state('app.contacts', {
            url: '/contacts',
            views: {
                'app': {
                    templateUrl: 'app-contacts.html',
                    controller: 'ContactsController'
                }
            }
        })
        .state('app.me', {
            url: '/me',
            views: {
                'app': {
                    templateUrl: 'app-me.html',
                    controller: 'MeController'
                }
            }
        })
        .state('app.logout', {
            url: '/logout',
            views: {
                'app': {
                    templateUrl: 'app-logout.html',
                    controller: 'LogoutController'
                }
            }
        })
        //判断是否登录
        //var wsCache=new WebStorageCache();
        //var UserLoginId=wsCache.get('UserLoginId');
        //if (UserLoginId==null || UserLoginId=="") {
    if (true) {
        $urlRouterProvider.otherwise('/login');
    } else {
        $urlRouterProvider.otherwise('/app/me');
    };
}])

.controller('LoginController', function($scope, $ionicSideMenuDelegate) {})

.controller('NavController', function($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })
    .controller('AppAbstractController', function($scope, $ionicSideMenuDelegate) {})
    .controller('InformationsController', function($scope, $ionicSideMenuDelegate, $timeout) {
        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.doRefresh = function() {

            console.log('Refreshing!');
            $timeout(function() {
                //simulate async response
                $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');

            }, 1000);

        };
    })
    .controller('WorksController', function($scope, $ionicSideMenuDelegate) {})
    .controller('ContactsController', function($scope, $ionicSideMenuDelegate) {})
    .controller('MeController', function($scope, $ionicSideMenuDelegate) {})
    .controller('LogoutController', function($scope, $ionicSideMenuDelegate) {})

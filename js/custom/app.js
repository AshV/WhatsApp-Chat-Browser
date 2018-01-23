/*jshint unused: vars */
define([
        'angular',
        'controllers/page',
        'controllers/chat',
        'services/chatsprovider',
        'directives/routeloadingindicator'
    ],
    /*deps*/
    function(angular, PageCtrl, ChatCtrl, RouteLoadingIndicator) /*invoke*/ {
        'use strict';

        /**
         * @ngdoc overview
         * @name wutsapp
         * @description
         * # wutsapp
         *
         * Main module of the application.
         */
        return angular
            .module('wutsapp', [
                'wutsapp.controllers.PageCtrl',
                'wutsapp.controllers.ChatCtrl',
                'wutsapp.services.ChatsProvider',
                'wutsapp.directives.RouteLoadingIndicator',
                /*angJSDeps*/
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
                'ngAnimate',
                'ngTouch'
            ])
            .config(function($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/chat.html',
                        controller: 'ChatCtrl',
                        resolve: {
                            chat: function($route, ChatsProvider) {
                                return ChatsProvider.getChat();
                            }
                        }
                    })                                    
                    .when('/chat/:id/:slug', {
                        templateUrl: 'views/chat.html',
                        controller: 'ChatCtrl',
                        resolve: {
                            chat: function($route, ChatsProvider) {
                                return ChatsProvider.getChat($route.current.params.id - 1);
                            }
                        }
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            });
    });

define([
    'angular',
    'services/chatsprovider'
], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name wutsapp.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the wutsapp
     */
    angular.module('wutsapp.controllers.ChatCtrl', ['wutsapp.services.ChatsProvider'])
        .controller('ChatCtrl', function($scope, $rootScope, $location, $q, chat, ChatsProvider) {
            if (!chat) {
                $location.path("/");
                return;
            }
            $scope.chat = chat;
            $rootScope.loaded = true;

            $scope.showInteractionAlert = function() {
                $scope.chat.interactionAlert = true;
                $scope.chat.newMessage = "Sorry :-)";
            };

            $scope.hideInteractionAlert = function() {
                $scope.chat.interactionAlert = false;
            };

            ChatsProvider.getChat().then(function(chat) {
                $rootScope.newChatUrl = "/chat" + chat.url;
            });
        });
});

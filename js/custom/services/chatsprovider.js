/*jshint unused: vars */
define(['angular', 'services/chat'], function(angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name angularjsRequiresjsYeomanTestApp.ContentProvider
     * @description
     * # ContentProvider
     * Service in the angularjsRequiresjsYeomanTestApp.
     */
    angular.module('wutsapp.services.ChatsProvider', ['wutsapp.services.Chat'])
        .service('ChatsProvider', function($http, $q, Chat) {
            var chats = [];
            var alreadySeenChats = {};

            function getNewId() {
                while (true) {
                    console.log(Object.keys(alreadySeenChats).length);
                    if(Object.keys(alreadySeenChats).length == chats.length) {
                        alreadySeenChats = {};
                    }
                    var id = Math.floor(Math.random() * chats.length);
                    if (alreadySeenChats[id]) {
                        continue;
                    }
                    alreadySeenChats[id] = true;
                    return id;
                }
            }

            this.getChat = function(id) {

                var getChatsPromise = $q(function(resolve, reject) {
                    if (chats.length !== 0) {
                        if (typeof id === "undefined") {
                            id = getNewId();
                        }
                        resolve(chats[id]);
                        return;
                    }
                    $http({
                        method: 'GET',
                        url: '/data/chats.json'
                    }).then(function(response) {
                        angular.forEach(response.data, function(chatJSON, index) {
                            chatJSON.id = index + 1;
                            chats.push(new Chat(chatJSON));
                        });
                        if (typeof id === "undefined") {
                            id = getNewId();
                        }
                        resolve(chats[id]);
                    });

                });

                return getChatsPromise;
            };

        });
});

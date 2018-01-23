define(['angular', 'services/message'], function(angular) {
    'use strict';
    angular.module('wutsapp.services.Chat', ['wutsapp.services.Message'])
        .factory('Chat', function(Message) {
            var Chat = function(json) {
            	this.id = json.id;
                this.name = json.name;
                this.slug = this.name.replace(/\W/g, "-").toLowerCase();
                this.user = json.user;
                var messages = [];
                for(var i = json.messages.length - 1; i >= 0; i--) {
                    var message = json.messages[i];
                    message.id = json.messages.length - i - 1;
                    messages.unshift(new Message(message));                    
                }
                angular.forEach(json.messages, function(message, index) {
                });
                this.messages = messages;
                this.url = "/" + this.id + "/" + this.slug;
            };

            return Chat;
        });
});

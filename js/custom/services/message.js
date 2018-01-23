define(['angular','services/device'], function(angular) {
    'use strict';
    angular.module('wutsapp.services.Message', ['wutsapp.services.Device'])
        .factory('Message', function(Device) {
            var Message = function(json) {
                this.id = json.id;
                this.text = json.text;
                this.image = json.image;
                this.you = json.you;
                this.timestamp = Device.getTimestamp() - (Math.random() + this.id) * 60000;
            };

            return Message;
        });
});

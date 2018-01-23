/*jshint unused: vars */
define(['angular'], function(angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name angularjsRequiresjsYeomanTestApp.ContentProvider
     * @description
     * # ContentProvider
     * Service in the angularjsRequiresjsYeomanTestApp.
     */
    angular.module('wutsapp.services.Device', [])
        .service('Device', function($window) {

            var models = ["nexus6", "s6", "nexus5", "motoX"];


            var model = models[Math.floor((Math.random() * models.length))];
            var timestamp = new Date().getTime();
            
            this.getModel = function() {
                if($window.innerHeight <= 800) {
                    return 'small-device';
                }
                return model;
            };

            this.getTimestamp = function() {
                return timestamp;
            };

        });
});

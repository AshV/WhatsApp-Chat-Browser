define(['angular'], function(angular) {
    'use strict';

    angular.module('wutsapp.directives.RouteLoadingIndicator', [])
        .directive('routeLoadingIndicator', function($rootScope) {
            return {
                restrict: 'E',
                template: "<div ng-if='isRouteLoading' class='loading-view'></div>",
                link: function(scope, elem, attrs) {
                    scope.isRouteLoading = false;

                    $rootScope.$on('$routeChangeStart', function() {
                        scope.isRouteLoading = true;
                    });

                    $rootScope.$on('$routeChangeSuccess', function() {
                        scope.isRouteLoading = false;
                    });
                }
            };
        });
});

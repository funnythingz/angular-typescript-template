/// <reference path="../../typings/tsd.d.ts" />

module app {
    'use strict';

    var myApp: ng.IModule = angular.module('app', []);
    myApp.controller('simpleCtrl', SimpleController);

    export interface IScope extends ng.IScope {
        greeting: string;
    }

    export class SimpleController {

        constructor(private $scope: IScope) {

            this.$scope.greeting = 'hello';

        }

    }

}

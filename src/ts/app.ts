/// <reference path="../../typings/tsd.d.ts" />

module App {

    export class Apprication {

        myApp: ng.IModule = angular.module('app', []);

        constructor() {
            this.myApp.controller('simpleCtrl', SimpleController);
        }
    
    }

    new Apprication();

}

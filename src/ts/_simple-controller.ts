/// <reference path="../../typings/tsd.d.ts" />

module App {

    export interface ISimpleScope extends ng.IScope {
        greeting: string;
    }

    export class SimpleController {

        constructor(private $scope: ISimpleScope) {

            this.$scope.greeting = 'hello Angular !';

        }

    }

}

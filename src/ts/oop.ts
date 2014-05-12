/// <reference path="../../typings/tsd.d.ts" />

module OOP {

    export interface IClazz {
        id: ID;
    }

    export class Clazz implements IClazz {

        constructor(public id: ID) {}

    }

    export class ID {

        constructor(private id: string) {}

        getValue(): string {
            return this.id;
        }

    }

    export class SubClazz extends Clazz {

        constructor(id: ID, public value: string) {
            super(id);
        }

    }

}

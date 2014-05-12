/// <reference path="../typings/tsd.d.ts" />

/// <reference path="../src/ts/oop.ts" />

module OOP {

    chai.should();

    describe("OOP", function() {

        var id: ID = new ID('id123');
        var fakeId: ID = new ID('id345');
        var clazz: Clazz = new Clazz(id);

        it("id to instanceof `ID`", function() {
            id.should.be.instanceof(ID);
        });

        it("clazz has `ID`", function() {
            clazz.should.be.haveOwnProperty('id');
        });

        it("clazz has id value of ID", function() {
            clazz.id.getValue().should.be.equal(id.getValue());
        });

        it("clazz has not id value of ID", function() {
            clazz.id.getValue().should.be.not.equal(fakeId.getValue());
        });

    });

}

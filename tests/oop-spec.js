var OOP;
(function (OOP) {
    chai.should();

    describe("OOP", function () {
        var id = new OOP.ID('id123');
        var fakeId = new OOP.ID('id345');
        var clazz = new OOP.Clazz(id);

        it("id to instanceof `ID`", function () {
            id.should.be.instanceof(OOP.ID);
        });

        it("clazz has `ID`", function () {
            clazz.should.be.haveOwnProperty('id');
        });

        it("clazz has id value of ID", function () {
            clazz.id.getValue().should.be.equal(id.getValue());
        });

        it("clazz has not id value of ID", function () {
            clazz.id.getValue().should.be.not.equal(fakeId.getValue());
        });
    });
})(OOP || (OOP = {}));

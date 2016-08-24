var validator = require("../scripts/validate-types.js");

describe("Validate Types Test", function(){

    it("should respond with 'null'", function() {
        expect(validator.typ(null)).toBe("null");
    });
    it("should respond with 'undefined'", function() {
        expect(validator.typ(undefined)).toBe("undefined");
    });
    it("should respond with 'string'", function() {
        expect(validator.typ("")).toBe("string");
    });
    it("should respond with 'number'", function() {
        expect(validator.typ(12)).toBe("number");
    });
    it("should respond with 'boolean'", function() {
        expect(validator.typ(true)).toBe("boolean");
    });
    it("should respond with 'regexp'", function() {
        expect(validator.typ(/a/g)).toBe("regexp");
    });
    it("should respond with 'object'", function() {
        expect(validator.typ(Object())).toBe("object");
    });
    it("should respond with 'function'", function() {
        expect(validator.typ(function(){})).toBe("function");
    });
    it("should respond with 'array'", function() {
        expect(validator.typ([])).toBe("array");
    });

});

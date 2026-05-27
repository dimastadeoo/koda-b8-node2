const { describe, it} = require('node:test');
const assert = require('node:assert');
const {convertTanggal} = require('./feature/momenPackage.js');

describe("convertTanggal", () => {
  it("return false must be param is not match of format DD-MM-YYYY", () => {
    assert.equal(convertTanggal(), false);
    assert.equal(convertTanggal("a"), false);
    assert.equal(convertTanggal(23), false);
    assert.equal(convertTanggal(30032016), false);
    assert.equal(convertTanggal("2015-03-20"), false);
  });
  it("returns a string", () => {
    assert.equal(typeof convertTanggal("25-03-2015"), "string");
  });

  it("returns a correctly formatted date", () => {
    assert.equal(convertTanggal("15-04-2017"), "15/04/2017");
  });
});
const assert = require("assert");
const osxGetSsidPw = require("../src/index");

describe("osx-get-ssid-pw", function() {
  it("process.env.TEST_WIFI", function(done) {
    osxGetSsidPw(process.env.TEST_WIFI, function(err, res) {
      assert.equal(err, null);
      assert.equal(res.error, undefined);
      console.log("res", res);
      res.ssid.should.be.a.String;
      res.password.should.be.a.String;
      done();
    });
  });
});

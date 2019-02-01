const { exec } = require("child_process");
const isNil = require("lodash/isNil");
const isString = require("lodash/isString");

// this get's the password from the raw output
// but the -w flag returns only the pass
// const passwordPattern = /(?:password:\s")(.+)(?:")/gim;

function osxGetSsidPw(ssid, done) {
  const cmd = `security find-generic-password -gwa "${ssid}"`;
  exec(cmd, function(err, stdout) {
    const op = { ssid };

    if (isNil(err) === false) {
      op.error = `error running command: ${cmd}`;
    }

    if (isNil(stdout) === false && isString(stdout) && stdout.length > 0) {
      op.password = stdout.trim();
    }

    done(null, op);
  });
}

module.exports = osxGetSsidPw;

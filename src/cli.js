#!/usr/bin/env node
const series = require("async/series");
const getopts = require("getopts");
const isNil = require("lodash/isNil");
const osxGetSsidPw = require("./index");
const { format = "default" } = getopts(process.argv);
const ssids = process.argv.slice(2);
const steps = ssids.map(ssid => done => osxGetSsidPw(ssid, done));
const lineBreak = "\n";

series(steps, function(err, res) {
  if (isNil(err) === false) {
    console.error("error getting ssid passwords", err);
    console.log("res", res);
    return process.exit(1);
  }

  const op = res.map(function({ error, password }, index) {
    const ssid = ssids[index];
    return { ssid, error, password };
  });

  if (format === "default") {
    return console.log(
      op
        .map(({ ssid, error, password }) => `"${ssid}": "${error || password}"`)
        .join(lineBreak)
    );
  }

  if (format === "json") {
    return console.log(JSON.stringify(op));
  }
});

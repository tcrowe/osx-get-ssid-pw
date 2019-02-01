
# osx-get-ssid-pw

Get the password for a Wifi SSID that your Mac knows.

**Caveat:** It annoyingly asks for an admin password each time it's used. If you know a way around it let me know.

`npm install osx-get-ssid-pw`

## JavaScript API

```js
const osxGetSsidPw = require("osx-get-ssid-pw");

osxGetSsidPw("My Goofy and Transgressive WiFi SSID", function(err, res) {
  console.log("err", err)

  const { ssid, error, password } = res;

  console.log("ssid", ssid)

  // error is undefined if this succeeds
  // string if it doesn't work
  console.log("error", error)

  // password is undefined if this doesn't work
  // it will be a string if it does work
  console.log("password", password)
});
```

## CLI

```sh
osx-get-ssid-pw "My Goofy and Transgressive WiFi SSID"
# "My Goofy and Transgressive WiFi SSID": "my sadly obvious password"
```

## Copying, license, and contributing

Copyright (C) Tony Crowe <github@tonycrowe.com> (https://tcrowe.github.io) 2018

Thank you for using and contributing to make osx-get-ssid-pw better.

⚠️ Please run `npm run prd` before submitting a patch.

⚖️ osx-get-ssid-pw is Free Software protected by the GPL 3.0 license. See [./COPYING](./COPYING) for more information. (free as in freedom)

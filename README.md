# Archived
Version `2.0.0` of the [extract-zip](https://www.npmjs.com/package/extract-zip) package supports promise style api, so this package has become obsolete.

# Extract Zip Promise

Simple wrapper around [extract-zip](https://www.npmjs.com/package/extract-zip) module, enabling promise interface.

![CircleCI](https://img.shields.io/circleci/build/github/ivandotv/extract-zip-promise/master)
![GitHub](https://img.shields.io/github/license/ivandotv/extract-zip-promise)
![dependabot enabled](https://flat.badgen.net/dependabot/dependabot/dependabot-core/?icon=dependabot)

## Installation

```js
npm i extract-zip-promise
```

## Usage

```ts
const extractZip = require("extract-zip-promise")
  //
;(async () => {
  try {
    await extractZip(archivePath, { dir: "destination/path" })
  } catch (e) {
    //error extracting zip file
  }
})()
```

Function signature is the same as [extract-zip](https://www.npmjs.com/package/extract-zip) module.

### Options object

- `dir` - defaults to `process.cwd()`
- `defaultDirMode` - integer - Directory Mode (permissions) will default to 493 (octal 0755 in integer)
- `defaultFileMode` - integer - File Mode (permissions) will default to 420 (octal 0644 in integer)
- `onEntry` - function - if present, will be called with (entry, zipfile), entry is every entry from the zip file forwarded from the entry event from yauzl. zipfile is the yauzl instance

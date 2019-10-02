# Extract Zip Promise

Simple wrapper around [extract-zip](https://www.npmjs.com/package/extract-zip) module.

## Installation

```js
npm i extract-zip-promise
```

## Usage

```js
const extractZip = require("extract-zip-promise")

async function extract() {
  try {
    await extractZip(archivePath, { dir: "destination/path" })
  } catch (e) {
    //error extracting zip file
  }
}
```

Function signature is the same as [extract-zip](https://www.npmjs.com/package/extract-zip) module.

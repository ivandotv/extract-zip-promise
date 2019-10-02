const extractZip = require("../index")
const fs = require("fs")
const tmp = require("tmp")
const path = require("path")

let tmpDir, archivePath
describe("extract-zip-promise", () => {
  test("unzip successfully", () => {
    tmpDir = tmp.dirSync()
    archivePath = path.join(tmpDir.name, "test.zip")
    destination = path.join(tmpDir.name, "destination")
    fs.mkdirSync(destination)
    const copySource = path.resolve(__dirname, "_fixtures_/test.zip")
    const copyDest = path.join(tmpDir.name, "test.zip")
    fs.copyFileSync(copySource, copyDest)

    return extractZip(archivePath, { dir: destination })
  })
  test("reject when there is an error in unzip process", () => {
    expect.assertions(1)

    return extractZip(archivePath, { dir: "does/not/exist" }).catch(error => {
      expect(error).toBeInstanceOf(Error)
    })
  })
})

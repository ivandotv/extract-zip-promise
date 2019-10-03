const extractZip = require("../index")
const extract = require("extract-zip")

const options = { dir: "/test/test" }
const archivePath = "/path/to/file.zip"

describe("extract zip promise", () => {
  test("if extraction is a success, resolve the promise", async () => {
    await extractZip(archivePath, options)
    expect(extract.mock.calls[0][0]).toBe(archivePath)
    expect(extract.mock.calls[0][1]).toBe(options)
  })
  test("if extraction is a failure, reject the promise", async () => {
    await extractZip(archivePath, options).catch(e => {
      expect(e).toBeInstanceOf(Error)
    })
    expect(extract.mock.calls[1][0]).toBe(archivePath)
    expect(extract.mock.calls[1][1]).toBe(options)
  })
})

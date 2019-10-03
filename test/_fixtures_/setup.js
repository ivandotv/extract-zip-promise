const extract = require("extract-zip")
jest.mock("extract-zip", () => {
  return jest
    .fn()
    .mockImplementationOnce((src, opt, cb) => cb())
    .mockName("zip success")
    .mockImplementationOnce((src, opt, cb) => cb(new Error()))
    .mockName("zip fail")
})

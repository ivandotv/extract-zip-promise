const extract = require("extract-zip")

module.exports = function extractZip(source, options = {}) {
  const promise = new Promise(function(resolve, reject) {
    extract(source, options, function(err) {
      if (err) reject(err)
      resolve()
    })
  })
  return promise
}

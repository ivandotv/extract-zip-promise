import extract = require("extract-zip")

export declare function extractZip(
  zipPath: string,
  options: extract.Options
): Promise<void>

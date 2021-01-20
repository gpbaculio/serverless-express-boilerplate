var path = require("path");
// directory structure
var rootDir = path.join(__dirname, "..");
var buildDir = path.join(rootDir, "frontend");

module.exports = {
  buildDir,
  schemaPath: path.join(buildDir, "schema.graphql"),
};

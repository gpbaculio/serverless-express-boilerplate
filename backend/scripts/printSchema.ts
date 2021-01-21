//ts-ignore
import * as fs from "fs";
import { printSchema } from "graphql";

import schema from "../src/schema";

fs.writeFileSync("../frontend/schema.graphql", printSchema(schema));

console.log("schema printed");

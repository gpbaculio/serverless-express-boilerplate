import { expect } from "chai";
import { describe, it } from "mocha";
import { graphqlSync } from "graphql";
import { addMocksToSchema } from "@graphql-tools/mock";

import schema from "../../src/schema";

const schemaWithMocks = addMocksToSchema({
  schema,
  mocks: {},
  preserveResolvers: false,
});

describe("query HelloWorld test", () => {
  it("fetches HelloWorld query", async () => {
    const query = `
      query HelloWorldQuery {
        message 
      }
    `;

    const { data } = graphqlSync(schemaWithMocks, query);
    console.log("data: ", data);
    expect(data).to.be.an("object");
    expect(data)
      .to.have.property("message")
      .to.be.a("string");
  });
});

import * as express from "express";
import { printSchema } from "graphql";
import * as multer from "multer";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app: express.Application = express();

app.use(express.json());

//serverless cors
app.use(function(_, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("x-powered-by", "serverless-express");
  next();
});

app.use(
  multer({
    storage: multer.memoryStorage(),
  }).any()
);

app.get("/schema", function(_, res) {
  res.send(printSchema(schema));
});

app.use(
  "/graphql",
  graphqlHTTP(async (request) => {
    // add user context
    console.log("test");
    return {
      schema,
      graphiql: true,
      context: {
        request,
        //user
      },
    };
  })
);

module.exports = app;

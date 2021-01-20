import * as express from "express";

const app: express.Application = require("../src/app");

const port: number = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

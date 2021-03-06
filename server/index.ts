import express, { ErrorRequestHandler } from "express";
import cookieParser from "cookie-parser";
import * as ButterflyController from "./controllers/butterfly/index";
import * as CreateController from "./controllers/butterfly/create";
import * as DeleteController from "./controllers/butterfly/delete";
const bodyParser = require("body-parser");

const app = express();
// MIDDLEWARES
app.use(bodyParser.json({ limit: "10mb" }) as any);
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  // Set custom headers for CORS
  res.header(
    "Access-Control-Allow-Headers",
    `Content-type,Accept,x-token,Cookie,timestamp`
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return next();
});

// ROUTES
app.get("/", (req, res) => {
  res.status(200).json({
    message: "kkk",
  });
});
app.use("/butterflies", ButterflyController.router);
app.use("/create", CreateController.router);
app.use("/butterflies/", DeleteController.router);
app.use((req, res) => {
  res.status(404).json({
    message: `There is no method ${req.method} for endpoint: ${req.path}`,
  });
});

const genericErrorHandler: ErrorRequestHandler = (err, req, res) => {
  console.error(err);
  res.status(500).json({
    message: "unexpected error",
  });
};

app.use(genericErrorHandler);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

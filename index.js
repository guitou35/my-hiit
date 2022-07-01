'use strict';

const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs")
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./src/routes/index");
const sequelize = require("./db");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/v1", indexRouter);
const swaggerDocument = YAML.load('./openapi.yaml');
const swaggerSpec = swaggerJsDoc(config.options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(config.port, () => console.log('listen on http://localhost:' + config.port));
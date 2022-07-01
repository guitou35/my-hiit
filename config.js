const dotenv = require("dotenv");

dotenv.config();
const {PORT, VERSION} = process.env;

const port = PORT ?? 3000;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "My Hiit API",
            version: VERSION,
        },
    },
    apis: ['./src/routes/*.js'], // files containing annotations as above
};

const config = {
    options,
    port
}

module.exports = config;

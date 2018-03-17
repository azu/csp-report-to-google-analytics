// MIT © 2018 azu
"use strict";
const express = require('express');
const csp = require('express-csp-header');
const app = express();
app.use(csp({
    policies: {
        'default-src': ["https:"],
    },
    reportOnly: true
}));
const path = require("path");
app.use(express.static(path.join(__dirname, "..")));
app.listen(3000, () => console.log('Example app listening on port http://localhost:3000/'));

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
app.use(express.static(__dirname));
app.listen(3000, () => console.log('Example app listening on port http://localhost:3000/'));

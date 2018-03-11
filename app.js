const path = require('path');
const express = require('express');
const args = process.argv;

let app = express();
let staticDir = path.join(__dirname, '/public');
let port = 4321;

app.use(express.static(staticDir));
app.listen(port, () => console.log(`Listening on port ${port}`));

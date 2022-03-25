const express = require("express");
const app = express();
const port = 8000;

const cors = require("cors");


app.use(express.json(), express.urlencoded({ extended: true }), cors());

require("./server/config/pmanager.config");
const AllPManagerRoutes = require("./server/routes/pmanager.routes");
AllPManagerRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );
const express = require("express");
const cors = require("cors");
const app = express();

// routes
const mongo = require("./mongodb/mongo");

// Express v4.16+ -- Body-parser is depricated
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(cors());

app.use("/mongo", mongo);

const port = process.env.PORT || 7070;

app.listen(port, () => console.log(`We listening on port ${port}`));

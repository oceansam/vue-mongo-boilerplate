const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const router = express.Router();
router.get("/", async (req, res) => {
	const data = await useMongo();
	res.send(await data.find({}).toArray());
});
async function useMongo() {
	const client = await mongodb.MongoClient.connect(
		`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.rof8u.mongodb.net/test`,
		{
			useNewUrlParser: true,
		}
	);
	return client.db("database_name").collection("collection_name");
}

module.exports = router;

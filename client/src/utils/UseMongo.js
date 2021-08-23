import axios from "axios";

// Server running on 7070
const url = "http://localhost:7070/mongo";

class UseMongo {
	static put(content) {
		return axios.post(url, {
			content,
		});
	}
	static get() {
		return axios.get("http://localhost:7070/mongo");
	}
}

export default UseMongo;

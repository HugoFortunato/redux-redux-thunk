import axios from "axios";

const postApi = axios.create({
	baseURL: "http://localhost:3000",
});

export default postApi;

import { axios } from "core";

export default {
    getByPath: path => axios.get("/catalog/" + path)
};

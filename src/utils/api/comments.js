import { axios } from "core";

export default {
    getAll: () => axios.get("/comments/all"),
    getByPage: page => axios.get("/comments?page=" + page),
    getLastComments: () => axios.get("/comments/last"),
    addComment: data => axios.post("/comments/create", data),
    delete: id => axios.delete("/comments/" + id)
};

import { axios } from "core";

export default {
    getAll: () => axios.get("/news/all"),
    getByPage: page => axios.get("/news?page=" + page),
    getById: id => axios.get("/news/" + id),
    getLastNews: () => axios.get("/news/last"),
    create: data => axios.post("/news/create", data),
    update: ({ id, ...data }) => axios.put("/news/" + id, data),
    delete: id => axios.delete("/news/" + id)
};

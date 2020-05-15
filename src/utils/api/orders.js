import { axios } from "core";

export default {
    getAll: () => axios.get("/orders"),
    getById: id => axios.get("/orders/" + id),
    create: data => axios.post("/orders/create", data),
    update: ({ id, ...data }) => axios.put("/orders/" + id, data),
    delete: id => axios.delete("/orders/" + id)
};

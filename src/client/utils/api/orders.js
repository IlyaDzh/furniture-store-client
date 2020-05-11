import { axios } from "core";

export default {
    getById: id => axios.get("/orders/" + id),
    createOrder: data => axios.post("/orders/create", data)
};

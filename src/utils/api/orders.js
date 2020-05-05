import { axios } from "core";

export default {
    getOrders: () => axios.get("/orders"),
    createOrder: data => axios.post("/orders/create", data)
};

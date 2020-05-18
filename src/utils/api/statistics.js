import { axios } from "core";

export default {
    getUsers: () => axios.get("/user/stats"),
    getOrders: () => axios.get("/orders/stats"),
    getComments: () => axios.get("/comments/stats")
};

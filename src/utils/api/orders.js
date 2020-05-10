import { axios } from "core";

export default {
    createOrder: data => axios.post("/orders/create", data)
};

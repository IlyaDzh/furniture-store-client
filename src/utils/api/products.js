import { axios } from "core";

export default {
    getById: id => axios.get("/product/" + id),
    getNewProducts: () => axios.get("/product/new"),
    getPopularProducts: () => axios.get("/product/popular"),
    create: data => axios.post("/product/create", data),
    delete: id => axios.delete("/product/" + id)
};

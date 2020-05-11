import { axios } from "core";

export default {
    getById: id => axios.get("/product/" + id),
    getNewProducts: () => axios.get("/product/new"),
    getPopularProducts: () => axios.get("/product/popular")
};

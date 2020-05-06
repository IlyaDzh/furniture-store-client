import { axios } from "core";

export default {
    getAll: () => axios.get("/product/all"),
    getById: id => axios.get("/product/" + id),
    getNewProducts: () => axios.get("/product/new"),
    getHitProducts: () => axios.get("/product/hit")
};

import { axios } from "core";

export default {
    getById: id => axios.get("/product/" + id),
    getNewProducts: () => axios.get("/product/new"),
    getPopularProducts: () => axios.get("/product/popular"),
    create: data => axios.post("/product/create", data),
    edit: ({ id, formData }) => axios.put("/product/" + id, formData),
    delete: id => axios.delete("/product/" + id)
};

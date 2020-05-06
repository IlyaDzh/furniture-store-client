import { axios } from "core";

export default {
    getAll: page => axios.get("/comments?page=" + page),
    getLastComments: () => axios.get("/comments/last")
};

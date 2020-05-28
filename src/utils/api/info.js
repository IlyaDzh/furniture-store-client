import { axios } from "core";

export default {
    getAbout: () => axios.get("/info/about"),
    getService: () => axios.get("/info/service"),
    getContacts: () => axios.get("/info/contacts"),
    update: data => axios.put("/info/update", data)
};

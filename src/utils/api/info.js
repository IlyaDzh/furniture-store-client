import { axios } from "core";

export default {
    getAbout: () => axios.get("/info/about"),
    getSevice: () => axios.get("/info/service"),
    getContacts: () => axios.get("/info/contacts")
};

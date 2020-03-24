import { axios } from "core";

export default {
    getNews: () => axios.get("/home_news"),
    getComments: () => axios.get("/home_comments")
};

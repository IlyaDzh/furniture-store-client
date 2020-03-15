import { axios } from 'core';

export default {
    getAll: page => axios.get('/news?page=' + page),
    getById: id => axios.get('/news?id=' + id)
};
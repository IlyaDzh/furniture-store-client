import { axios } from 'core';

export default {
    getCarousel: () => axios.get('/home_carousel'),
    getNews: () => axios.get('/home_news'),
    getComments: () => axios.get('/home_comments')
};
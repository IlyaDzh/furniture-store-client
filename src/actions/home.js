import { homeApi } from 'utils/api';

const actions = {
    setCarousel: items => ({
        type: 'HOME:SET_CAROUSEL',
        payload: items
    }),
    setNews: items => ({
        type: 'HOME:SET_NEWS',
        payload: items
    }),
    setComments: items => ({
        type: 'HOME:SET_COMMENTS',
        payload: items
    }),
    fetchCarousel: () => dispatch => {
        homeApi.getCarousel().then(({ data }) => {
            dispatch(actions.setCarousel(data));
        });
    },
    fetchNews: () => dispatch => {
        homeApi.getNews().then(({ data }) => {
            dispatch(actions.setNews(data));
        });
    },
    fetchComments: () => dispatch => {
        homeApi.getComments().then(({ data }) => {
            dispatch(actions.setComments(data));
        });
    }
}

export default actions;
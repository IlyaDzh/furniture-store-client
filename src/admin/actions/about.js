import { infoApi } from "utils/api";

const actions = {
    setData: data => ({
        type: "ABOUT:SET_DATA",
        payload: data
    }),
    editItem: data => ({
        type: "ABOUT:EDIT_DATA",
        payload: data
    }),
    setIsLoading: bool => ({
        type: "ABOUT:SET_IS_LOADING",
        payload: bool
    }),
    setError: bool => ({
        type: "ABOUT:SET_ERROR",
        payload: bool
    }),
    fetchInfo: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        Promise.all([infoApi.getAbout(), infoApi.getContacts()])
            .then(results => {
                const [about, contacts] = results;
                const data = {
                    about: about.data,
                    contacts: contacts.data
                };
                dispatch(actions.setData(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    editInfo: postData => dispatch => {
        return infoApi
            .update(postData)
            .then(({ data }) => {
                dispatch(actions.setData(data));
            })
            .catch(() => {});
    }
};

export default actions;

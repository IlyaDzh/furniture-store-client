import { infoApi } from "client/utils/api";

const actions = {
    setAbout: items => ({
        type: "INFO:SET_ABOUT",
        payload: items
    }),
    setService: items => ({
        type: "INFO:SET_SERVICE",
        payload: items
    }),
    setContacts: items => ({
        type: "INFO:SET_CONTACTS",
        payload: items
    }),
    setError: bool => ({
        type: "INFO:SET_ERROR",
        payload: bool
    }),
    setIsLoading: bool => ({
        type: "INFO:SET_IS_LOADING",
        payload: bool
    }),
    fetchAbout: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        infoApi
            .getAbout()
            .then(({ data }) => {
                dispatch(actions.setError(false));
                dispatch(actions.setAbout(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    fetchService: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        infoApi
            .getService()
            .then(({ data }) => {
                dispatch(actions.setError(false));
                dispatch(actions.setService(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    },
    fetchContacts: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        infoApi
            .getContacts()
            .then(({ data }) => {
                dispatch(actions.setError(false));
                dispatch(actions.setContacts(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    }
};

export default actions;

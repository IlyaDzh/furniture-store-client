import { infoApi } from "utils/api";

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
    fetchAbout: () => dispatch => {
        infoApi
            .getAbout()
            .then(({ data }) => {
                dispatch(actions.setAbout(data));
            })
            .catch(() => {
                dispatch(actions.setError(true));
            });
    },
    fetchService: () => dispatch => {
        infoApi
            .getService()
            .then(({ data }) => {
                dispatch(actions.setService(data));
            })
            .catch(() => {
                dispatch(actions.setError(true));
            });
    },
    fetchContacts: () => dispatch => {
        infoApi
            .getContacts()
            .then(({ data }) => {
                dispatch(actions.setContacts(data));
            })
            .catch(() => {
                dispatch(actions.setError(true));
            });
    }
};

export default actions;

import { catalogApi } from "utils/api";

const actions = {
    setCurrentCatalog: item => ({
        type: "CATALOG:SET_CURRENT_ITEM",
        payload: item
    }),
    setError: bool => ({
        type: "CATALOG:SET_ERROR",
        payload: bool
    }),
    setIsLoading: bool => ({
        type: "CATALOG:SET_IS_LOADING",
        payload: bool
    }),
    fetchCurrentCatalog: path => dispatch => {
        dispatch(actions.setIsLoading(true));
        catalogApi
            .getByPath(path)
            .then(({ data }) => {
                dispatch(actions.setCurrentCatalog(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
                dispatch(actions.setError(true));
            });
    }
};

export default actions;

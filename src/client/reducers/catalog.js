import { filter } from "lodash";

const initialState = {
    currentItem: null,
    tempItem: null,
    error: false,
    isLoading: false
};

const clean = obj => {
    for (let propName in obj) {
        if (
            obj[propName] === null ||
            obj[propName] === undefined ||
            obj[propName] === false ||
            obj[propName].length === 0
        ) {
            delete obj[propName];
        } else if (typeof obj[propName] === "object") {
            clean(obj[propName]);
        }
    }
    return obj;
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "CATALOG:SET_CURRENT_ITEM":
            return {
                ...state,
                currentItem: payload,
                isLoading: false
            };
        case "CATALOG:FILTER_ITEMS":
            const filterParams = {
                hit: payload.hit,
                new: payload.new,
                chars: {
                    shape: payload.shape,
                    material: payload.material,
                    color: payload.color,
                    style: payload.style
                }
            };
            const cleanFilterParams = clean(filterParams);
            console.log(cleanFilterParams);
            const filtredProducts = filter(
                state.currentItem.products,
                cleanFilterParams
            );
            console.log(filtredProducts);

            return {
                ...state,
                tempItem: { ...state.currentItem, products: filtredProducts }
            };
        case "CATALOG:SET_ERROR":
            return {
                ...state,
                error: payload
            };
        case "CATALOG:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        case "CATALOG:RESET":
            return {
                ...state,
                tempItem: null
            };
        default:
            return state;
    }
};

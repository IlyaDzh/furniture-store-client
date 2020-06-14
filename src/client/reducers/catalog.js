import { filter } from "lodash";
import { cleanObject, isEqualArray } from "utils/helpers";

const initialState = {
    currentItem: null,
    tempItem: null,
    error: false,
    isLoading: false
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
            const priceParams = cleanObject({
                lowerBound: payload.lowerBound,
                upperBound: payload.upperBound
            });

            const statusParams = cleanObject({
                hit: payload.hit,
                new: payload.new
            });

            const charsParams = cleanObject({
                color: payload.color,
                material: payload.material,
                shape: payload.shape,
                style: payload.style
            });

            // sort by status (new, hit)
            let filtredProducts = filter(state.currentItem.products, statusParams);

            // sort by shape
            filtredProducts = charsParams.shape
                ? filtredProducts.filter(
                      product => charsParams.shape.indexOf(product.chars.shape) >= 0
                  )
                : filtredProducts;

            // sort by style
            filtredProducts = charsParams.style
                ? filtredProducts.filter(
                      product => charsParams.style.indexOf(product.chars.style) >= 0
                  )
                : filtredProducts;

            // sort by color
            filtredProducts = charsParams.color
                ? filtredProducts.filter(product =>
                      isEqualArray(product.chars.color, charsParams.color)
                  )
                : filtredProducts;

            // sort by material
            filtredProducts = charsParams.material
                ? filtredProducts.filter(product =>
                      isEqualArray(product.chars.material, charsParams.material)
                  )
                : filtredProducts;

            // sort by price
            filtredProducts = filtredProducts.filter(
                product =>
                    product.price.current >= priceParams.lowerBound &&
                    product.price.current <= priceParams.upperBound
            );

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

import format from "date-fns/format";

export const getConvertTime = date => {
    return format(Date.parse(date), "dd.MM.yyyy");
};

export const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

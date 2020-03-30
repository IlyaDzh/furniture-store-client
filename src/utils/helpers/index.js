import format from 'date-fns/format';

export const getConvertTime = date => {
    return format(Date.parse(date), "dd.MM.yyyy");
};

const cleanObject = obj => {
    for (let propName in obj) {
        if (
            obj[propName] === null ||
            obj[propName] === undefined ||
            obj[propName] === false ||
            obj[propName].length === 0
        ) {
            delete obj[propName];
        } else if (typeof obj[propName] === "object") {
            cleanObject(obj[propName]);
        }
    }
    return obj;
};

export default cleanObject;

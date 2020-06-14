import { isEqual } from "lodash";

export default (productChars, searchChars) => {
    if (!searchChars) return;
    const contains = productChars.filter(x => searchChars.includes(x.trim()));
    return isEqual(
        contains.map(i => i.trim()).sort(),
        searchChars.map(i => i.trim()).sort()
    );
};

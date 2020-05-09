import React, { useEffect } from "react";

import { Cart as BaseCart } from "../components";

const Cart = () => {
    useEffect(() => {});

    const handleClick = countRef => {
        console.log("click: ", countRef.current.value);
    };

    return <BaseCart handleClick={handleClick} />;
};

export default Cart;

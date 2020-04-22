import React, { useState, useRef } from "react";
import * as Yup from "yup";

import { SubsBlock } from "../../components";

const Schema = Yup.object().shape({
    email: Yup.string().email("Неверный E-mail").required("Укажите свой E-mail")
});

const NewsSubs = () => {
    const [subsReady, setSubsReady] = useState(false);
    const subsRef = useRef();

    const handleClick = () => {
        const value = subsRef.current.value;
        Schema.isValid({
            email: value
        }).then(valid => {
            if (valid) {
                setSubsReady(true);
            } else {
                console.log("Неверный E-mail");
            }
        });
    };

    return <SubsBlock subsRef={subsRef} onClick={handleClick} ready={subsReady} />;
};

export default NewsSubs;

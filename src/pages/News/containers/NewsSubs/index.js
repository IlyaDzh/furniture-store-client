import React, { useState } from "react";

import { SubsBlock } from "../../components";

const NewsSubs = () => {
    const [subsReady, setSubsReady] = useState(false);

    const handleClick = () => {
        setSubsReady(true);
    };

    return (
        <SubsBlock
            onClick={handleClick}
            ready={subsReady}
            result="Вы успешно подписались на рассылку!"
        />
    );
};

export default NewsSubs;

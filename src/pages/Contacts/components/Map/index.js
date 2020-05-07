import React from "react";
import {
    YMaps,
    Map as BaseMap,
    Placemark,
    TrafficControl,
    TypeSelector,
    GeolocationControl,
    ZoomControl,
    FullscreenControl
} from "react-yandex-maps";

const Map = () => (
    <YMaps>
        <BaseMap
            style={{ minHeight: "330px", height: "100%", width: "100%" }}
            defaultState={{ center: [55.643266, 37.502004], zoom: 16 }}
        >
            <Placemark defaultGeometry={[55.643266, 37.502004]} />
            <ZoomControl options={{ float: "left" }} />
            <GeolocationControl options={{ float: "left" }} />
            <TrafficControl options={{ float: "right" }} />
            <TypeSelector options={{ float: "right" }} />
            <FullscreenControl options={{ float: "right" }} />
        </BaseMap>
    </YMaps>
);

export default Map;

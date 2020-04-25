import React from "react";
import { Container, Loader } from "./styles";
export const SkeletonLayout = ({ color = "#ccc", pulseTime = 1, width = "100%", align = "left", direction = "column", items, }) => {
    function checkValue(value) {
        const regex = /^([0-9]{1,})([a-zA-Z]{2}|%)$/;
        const regexNum = /^([0-9]{1,})$/;
        if (regex.test(String(value))) {
            return value;
        }
        else if (regexNum.test(String(value))) {
            return `${value}px`;
        }
        return value;
    }
    return (React.createElement(Container, { color: color, width: checkValue(width), align: align, direction: direction }, items.map((item, index) => (React.createElement(Loader, { key: index, pulseTime: pulseTime, width: item.width ? checkValue(item.width) : "100%", height: checkValue(item.height), borderRadius: item.borderRadius ? checkValue(item.borderRadius) : 0, marginBottom: item.marginBottom ? checkValue(item.marginBottom) : "3px", marginTop: item.marginTop ? checkValue(item.marginTop) : "3px", marginLeft: item.marginLeft ? checkValue(item.marginLeft) : 0, marginRight: item.marginRight ? checkValue(item.marginRight) : 0 })))));
};
//# sourceMappingURL=index.js.map
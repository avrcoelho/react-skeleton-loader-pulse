import React from "react";
import { Loader } from "./styles";
export const SkeletonItem = ({ color = "#ccc", pulseTime = 1, width = "100px", height = "10px", marginBottom = 0, marginLeft = 0, marginRight = 0, marginTop = 0, borderRadius = 0, }) => {
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
    return (React.createElement(Loader, { color: color, pulseTime: pulseTime, width: checkValue(width), height: checkValue(height), borderRadius: checkValue(borderRadius), marginBottom: checkValue(marginBottom), marginTop: checkValue(marginTop), marginLeft: checkValue(marginLeft), marginRight: checkValue(marginRight) }));
};
//# sourceMappingURL=index.js.map
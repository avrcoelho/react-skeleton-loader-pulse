interface PropsContainer {
    color: string;
    width: number | string;
    direction: "column" | "row";
    align: "center" | "left" | "right";
}
interface PropsLoader {
    pulseTime: number;
    width: number | string;
    height: number | string;
    borderRadius: number | string;
    marginTop: number | string;
    marginBottom: number | string;
    marginLeft: number | string;
    marginRight: number | string;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, PropsContainer, never>;
export declare const Loader: import("styled-components").StyledComponent<"div", any, PropsLoader, never>;
export {};
//# sourceMappingURL=styles.d.ts.map
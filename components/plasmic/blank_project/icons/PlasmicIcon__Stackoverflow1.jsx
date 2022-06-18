// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Stackoverflow1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.14 0l-2.006 1.49 7.455 10.02 2.002-1.49L16.141 0zm-4.596 3.988L9.947 5.906l9.596 7.991 1.597-1.918-9.596-7.991zM7.87 9.197L6.813 11.46l11.32 5.27 1.054-2.263-11.318-5.27zm-2.158 5.67l-.514 2.442 12.219 2.567.513-2.44-12.218-2.57zM0 18.048V28h22.388v-9.952H19.9v7.464H2.486v-7.463H0zm4.976 2.489v2.485h12.437v-2.485H4.975z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stackoverflow1Icon;
/* prettier-ignore-end */

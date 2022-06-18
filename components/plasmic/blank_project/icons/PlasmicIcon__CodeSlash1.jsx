// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CodeSlash1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M15.717 2.47a.749.749 0 10-1.434-.44l-6 19.5a.75.75 0 001.434.44l6-19.5zM7.281 6.22a.75.75 0 010 1.062L2.561 12l4.72 4.719a.75.75 0 11-1.062 1.062l-5.25-5.25a.75.75 0 010-1.062l5.25-5.25a.75.75 0 011.062 0zm9.438 0a.75.75 0 000 1.062L21.439 12l-4.72 4.719a.752.752 0 001.062 1.062l5.25-5.25a.75.75 0 000-1.062l-5.25-5.25a.75.75 0 00-1.062 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CodeSlash1Icon;
/* prettier-ignore-end */

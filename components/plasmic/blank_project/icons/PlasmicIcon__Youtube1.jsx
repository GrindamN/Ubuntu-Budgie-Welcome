// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Youtube1Icon(props) {
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
          "M27.414 7.217a3.519 3.519 0 00-2.475-2.492C22.756 4.135 14 4.135 14 4.135s-8.756 0-10.94.59A3.52 3.52 0 00.586 7.217C0 9.415 0 14 0 14s0 4.585.586 6.783a3.518 3.518 0 002.475 2.492c2.183.59 10.939.59 10.939.59s8.756 0 10.94-.59a3.518 3.518 0 002.476-2.492C28 18.585 28 14 28 14s0-4.585-.586-6.783zM11.136 18.163V9.837L18.454 14l-7.318 4.163z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Youtube1Icon;
/* prettier-ignore-end */

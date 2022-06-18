// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CheckCircleFill11Icon(props) {
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
          "M24 12a12 12 0 11-24 0 12 12 0 0124 0zm-5.955-4.545a1.124 1.124 0 00-1.62.033l-5.21 6.638-3.139-3.141a1.125 1.125 0 00-1.59 1.59l3.969 3.97a1.125 1.125 0 001.618-.03l5.988-7.485a1.125 1.125 0 00-.014-1.575h-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheckCircleFill11Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GearWideConnected1Icon(props) {
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
          "M10.602 1.09c.365-1.454 2.43-1.454 2.796 0l.107.43a1.44 1.44 0 002.433.65l.307-.316c1.043-1.078 2.832-.045 2.42 1.397l-.12.426a1.44 1.44 0 001.78 1.78l.425-.121c1.44-.413 2.475 1.377 1.396 2.42l-.316.307a1.44 1.44 0 00.65 2.433l.43.106c1.455.365 1.455 2.43 0 2.796l-.43.107a1.44 1.44 0 00-.65 2.433l.316.307c1.079 1.043.045 2.832-1.396 2.42l-.426-.12a1.44 1.44 0 00-1.78 1.78l.12.425c.413 1.44-1.376 2.475-2.419 1.396l-.307-.316a1.44 1.44 0 00-2.433.65l-.107.43c-.364 1.455-2.43 1.455-2.796 0l-.106-.43a1.44 1.44 0 00-2.433-.65l-.308.316c-1.042 1.079-2.832.045-2.42-1.396l.12-.426a1.44 1.44 0 00-1.778-1.78l-.426.12c-1.44.413-2.475-1.376-1.397-2.419l.317-.307a1.44 1.44 0 00-.651-2.433l-.43-.107c-1.454-.364-1.454-2.43 0-2.796l.43-.106a1.441 1.441 0 00.65-2.433l-.316-.308C.776 6.713 1.81 4.923 3.251 5.335l.426.12a1.44 1.44 0 001.78-1.778l-.121-.426C4.923 1.81 6.713.776 7.756 1.854l.307.317a1.44 1.44 0 002.433-.651l.106-.43zm8.858 11.66h-7.085l-4.25 5.669A7.498 7.498 0 0019.46 12.75zm0-1.5A7.498 7.498 0 008.124 5.582l4.251 5.67h7.085v-.002zM7.572 5.95c-.045.032-.087.065-.13.098l.13-.097zm-.646.533A7.476 7.476 0 004.503 12a7.47 7.47 0 002.423 5.517L11.063 12 6.926 6.483zm.516 11.47l.13.097-.13-.098z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GearWideConnected1Icon;
/* prettier-ignore-end */

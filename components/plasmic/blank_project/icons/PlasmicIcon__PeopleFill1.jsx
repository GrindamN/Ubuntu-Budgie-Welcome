// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PeopleFill1Icon(props) {
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
          "M10.5 21S9 21 9 19.5s1.5-6 7.5-6 7.5 4.5 7.5 6-1.5 1.5-1.5 1.5h-12zm6-9a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.824 21a3.357 3.357 0 01-.324-1.5c0-2.032 1.02-4.125 2.904-5.58A9.49 9.49 0 007.5 13.5c-6 0-7.5 4.5-7.5 6S1.5 21 1.5 21h6.324z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M6.75 12a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeopleFill1Icon;
/* prettier-ignore-end */

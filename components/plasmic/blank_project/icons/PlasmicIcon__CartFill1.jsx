// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CartFill1Icon(props) {
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
          "M0 2.25a.75.75 0 01.75-.75H3a.75.75 0 01.728.568L4.335 4.5H21.75a.75.75 0 01.736.888l-2.25 12A.75.75 0 0119.5 18H6a.75.75 0 01-.737-.612L3.015 5.41 2.415 3H.75A.75.75 0 010 2.25zM7.5 18a3 3 0 100 6 3 3 0 000-6zM18 18a3 3 0 100 6 3 3 0 000-6zM7.5 19.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CartFill1Icon;
/* prettier-ignore-end */

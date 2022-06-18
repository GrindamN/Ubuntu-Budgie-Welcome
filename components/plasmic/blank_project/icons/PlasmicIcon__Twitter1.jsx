// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Twitter1Icon(props) {
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
          "M27.945 5.332a11.667 11.667 0 01-3.296.904 5.784 5.784 0 002.524-3.177 11.856 11.856 0 01-3.648 1.381 5.74 5.74 0 00-9.782 5.23c-4.771-.226-8.998-2.518-11.83-5.981a5.626 5.626 0 00-.777 2.888 5.741 5.741 0 002.553 4.778 5.72 5.72 0 01-2.6-.719v.07a5.744 5.744 0 004.604 5.632 5.83 5.83 0 01-2.58.1 5.758 5.758 0 005.371 3.986 11.511 11.511 0 01-7.119 2.456c-.455 0-.909-.028-1.365-.08a16.327 16.327 0 008.816 2.578c10.562 0 16.332-8.746 16.332-16.316 0-.245 0-.49-.018-.735A11.59 11.59 0 0028 5.355l-.055-.023z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Twitter1Icon;
/* prettier-ignore-end */

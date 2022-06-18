// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function QuestionCircleFill1Icon(props) {
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
          "M24 12a12 12 0 11-24 0 12 12 0 0124 0zM8.244 9.05h1.238c.207 0 .372-.17.399-.376.134-.983.81-1.7 2.012-1.7 1.03 0 1.971.514 1.971 1.752 0 .952-.56 1.39-1.447 2.056-1.01.733-1.809 1.59-1.752 2.98l.005.326a.375.375 0 00.374.369h1.217a.375.375 0 00.375-.375v-.158c0-1.076.41-1.39 1.515-2.229.914-.694 1.866-1.465 1.866-3.084 0-2.266-1.914-3.361-4.01-3.361-1.9 0-3.982.885-4.124 3.429a.355.355 0 00.361.37zm3.488 9.664c.915 0 1.543-.591 1.543-1.39 0-.829-.63-1.41-1.543-1.41-.877 0-1.514.582-1.514 1.41 0 .799.637 1.39 1.515 1.39h-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default QuestionCircleFill1Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Facebook1Icon(props) {
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
          "M28 14.085c0-7.731-6.268-14-14-14-7.731 0-14 6.269-14 14 0 6.988 5.12 12.78 11.813 13.83v-9.783H8.258v-4.048h3.555v-3.082c0-3.509 2.09-5.448 5.288-5.448 1.53 0 3.134.275 3.134.275v3.445h-1.767c-1.74 0-2.282 1.079-2.282 2.186v2.625h3.883l-.62 4.049h-3.263v9.782C22.881 26.865 28 21.072 28 14.086z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Facebook1Icon;
/* prettier-ignore-end */

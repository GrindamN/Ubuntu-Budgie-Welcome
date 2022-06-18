// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Github1Icon(props) {
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
          "M14 .346c-7.735 0-14 6.269-14 14C0 20.534 4.011 25.78 9.572 27.63c.7.132.957-.301.957-.673 0-.333-.011-1.213-.017-2.38-3.895.845-4.716-1.878-4.716-1.878-.637-1.616-1.558-2.048-1.558-2.048-1.268-.868.098-.85.098-.85 1.406.098 2.145 1.441 2.145 1.441 1.248 2.141 3.277 1.523 4.077 1.165.126-.905.487-1.523.887-1.873-3.11-.35-6.377-1.554-6.377-6.918 0-1.528.543-2.777 1.44-3.757-.157-.353-.63-1.777.123-3.705 0 0 1.173-.376 3.85 1.435 1.12-.311 2.31-.466 3.5-.473 1.19.007 2.38.162 3.5.473 2.66-1.81 3.833-1.435 3.833-1.435.752 1.929.28 3.352.14 3.705.892.98 1.435 2.229 1.435 3.757 0 5.378-3.273 6.562-6.388 6.907.49.42.945 1.278.945 2.59 0 1.873-.017 3.378-.017 3.833 0 .368.245.805.962.665C23.993 25.774 28 20.524 28 14.347c0-7.732-6.268-14-14-14"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Github1Icon;
/* prettier-ignore-end */

/// <reference types="react-scripts" />

// Add SVG import support
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

// Add PNG import support
declare module "*.png" {
  const src: string;
  export default src;
} 

declare module "*.css";

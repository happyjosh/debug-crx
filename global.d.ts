declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.svg' {
  const svgType: string;
  export default svgType;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

const chrome: any;
const window: any;

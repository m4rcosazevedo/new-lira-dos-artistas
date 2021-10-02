declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.scss' {
  const css: { [key: string]: string }
  export default css
}

declare module '*.sass' {
  const css: { [key: string]: string }
  export default css
}

declare module '*.webp';

declare module '*.png';

declare module '*.jpg';

declare module '*.jpeg';

import * as React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        ar?: boolean | string;
        'shadow-intensity'?: string;
        'interaction-prompt'?: string;
        'auto-rotate-delay'?: string;
        'disable-zoom'?: boolean | string;
        'disable-pan'?: boolean | string;
        'camera-orbit'?: string;
        'field-of-view'?: string;
      }, HTMLElement>;
    }
  }
}

"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export default function ModelViewerScript() {
  const pathname = usePathname();
  
  // Do not load the script on 3D Experience routes to avoid WebGL context conflicts with React Three Fiber
  if (pathname?.startsWith("/3d-experience")) {
    return null;
  }

  return (
    <Script 
      type="module" 
      src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js" 
      strategy="lazyOnload" 
    />
  );
}

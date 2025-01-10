import React from "react";

import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentMap: Record<string, React.ComponentType<any>> = {
  Header: dynamic(() => import("./components/Header"), { ssr: true }),
  Carousel: dynamic(() => import("./components/Carousel"), { ssr: true }),
  Accordion: dynamic(() => import("./components/AccordionDemo"), { ssr: true }),
};

export default function resolveComponent(name: string) {
  return componentMap[name] || null;
}

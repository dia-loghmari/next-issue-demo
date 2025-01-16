"use client";

import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: Record<string, React.ComponentType<any>> = {
  Header: dynamic(() => import("./components/Header"), { ssr: true }),
  Carousel: dynamic(() => import("./components/Carousel"), { ssr: true }),
  Accordion: dynamic(() => import("./components/AccordionDemo"), {
    ssr: true,
  }),
};

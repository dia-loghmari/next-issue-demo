import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import React from "react";
import styles from "./accordion.module.css";

const AccordionDemo: React.FC = async () => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
  );
  const data = await response.json();
  const latitude = data.latitude;

  return (
    <Accordion.Root
      className={styles.Root}
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item className={styles.Item} value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.Item} value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s unstyled by default, giving you freedom over the look
          and feel.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.Item} value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </Accordion.Item>

      {latitude && (
        <Accordion.Item className={styles.Item} value="item-4">
          <AccordionTrigger>Current Weather</AccordionTrigger>
          <AccordionContent>{latitude}</AccordionContent>
        </Accordion.Item>
      )}
    </Accordion.Root>
  );
};

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Trigger
> & {
  className?: string;
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className={styles.Header}>
    <Accordion.Trigger
      className={classNames(styles.Trigger, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className={styles.Chevron} aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Content
> & {
  className?: string;
};

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(styles.Content, className)}
    {...props}
    ref={forwardedRef}
  >
    <div className={styles.ContentText}>{children}</div>
  </Accordion.Content>
));

AccordionContent.displayName = "AccordionContent";

export default AccordionDemo;

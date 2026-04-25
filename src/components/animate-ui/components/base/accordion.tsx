import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import {
  Accordion as AccordionPrimitive,
  AccordionItem as AccordionItemPrimitive,
  AccordionHeader as AccordionHeaderPrimitive,
  AccordionTrigger as AccordionTriggerPrimitive,
  AccordionPanel as AccordionPanelPrimitive,
  type AccordionProps as AccordionPrimitiveProps,
  type AccordionItemProps as AccordionItemPrimitiveProps,
  type AccordionTriggerProps as AccordionTriggerPrimitiveProps,
  type AccordionPanelProps as AccordionPanelPrimitiveProps,
} from '@/components/animate-ui/primitives/base/accordion';

type AccordionProps = AccordionPrimitiveProps;
function Accordion(props: AccordionProps) {
  return <AccordionPrimitive {...props} />;
}

type AccordionItemProps = AccordionItemPrimitiveProps;
function AccordionItem({ className = '', ...props }: AccordionItemProps) {
  return (
    <AccordionItemPrimitive
      className={`border-b border-white/10 last:border-b-0 ${className}`}
      {...props}
    />
  );
}

type AccordionTriggerProps = AccordionTriggerPrimitiveProps & {
  showArrow?: boolean;
};
function AccordionTrigger({
  className = '',
  children,
  showArrow = true,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionHeaderPrimitive className="flex">
      <AccordionTriggerPrimitive
        className={`flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium transition-all outline-none hover:text-white [&[data-panel-open]>svg]:rotate-180 ${className}`}
        {...props}
      >
        {children}
        {showArrow && (
          <ChevronDown className="text-slate-400 pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-300" />
        )}
      </AccordionTriggerPrimitive>
    </AccordionHeaderPrimitive>
  );
}

type AccordionPanelProps = AccordionPanelPrimitiveProps & {
  children: React.ReactNode;
};
function AccordionPanel({ className = '', children, ...props }: AccordionPanelProps) {
  return (
    <AccordionPanelPrimitive {...props}>
      <div className={`text-sm pb-4 text-slate-400 leading-relaxed ${className}`}>{children}</div>
    </AccordionPanelPrimitive>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionPanelProps,
};

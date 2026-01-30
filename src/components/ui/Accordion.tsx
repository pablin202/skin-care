'use client';

import { cn } from '@/lib/utils';
import { useState, type ReactNode } from 'react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className={cn('divide-y divide-neutral-200 rounded-2xl bg-white shadow-sm', className)}>
      {items.map((item) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}

interface AccordionItemComponentProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItemComponent({ item, isOpen, onToggle }: AccordionItemComponentProps) {
  return (
    <div className="first:rounded-t-2xl last:rounded-b-2xl">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-medium text-neutral-900">{item.question}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-4 text-neutral-600">{item.answer}</div>
      </div>
    </div>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={cn('h-5 w-5 flex-shrink-0 text-neutral-500 transition-transform duration-200', {
        'rotate-180': isOpen,
      })}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// Componente simple para FAQ
interface FAQAccordionProps {
  items: Array<{ question: string; answer: string }>;
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const accordionItems = items.map((item, index) => ({
    id: `faq-${index}`,
    ...item,
  }));

  return <Accordion items={accordionItems} className={className} />;
}

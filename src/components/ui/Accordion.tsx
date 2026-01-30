'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <div className={cn('divide-y divide-border rounded-2xl border border-border bg-surface', className)}>
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
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/30"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-serif font-medium text-text">{item.question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 flex-shrink-0 text-muted transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-5 pb-4 text-[15px] text-muted">{item.answer}</div>
      </div>
    </div>
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

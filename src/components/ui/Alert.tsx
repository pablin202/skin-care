import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';
import { Check, X, AlertTriangle, Info } from 'lucide-react';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info';
  children: ReactNode;
}

export function Alert({ variant = 'info', children, className, ...props }: AlertProps) {
  const variantStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-accent/10 border-accent/20 text-accent',
  };

  const iconsByVariant = {
    success: <Check className="h-5 w-5 text-green-600" />,
    error: <X className="h-5 w-5 text-red-600" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-600" />,
    info: <Info className="h-5 w-5 text-accent" />,
  };

  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-xl border p-4',
        variantStyles[variant],
        className
      )}
      role="alert"
      {...props}
    >
      <span className="flex-shrink-0">{iconsByVariant[variant]}</span>
      <div className="text-sm">{children}</div>
    </div>
  );
}

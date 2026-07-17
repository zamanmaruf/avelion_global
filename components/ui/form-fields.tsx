import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

type FieldProps = {
  error?: string;
};

export function Input({
  className,
  error,
  id,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & FieldProps) {
  const errorId = id && error ? `${id}-error` : undefined;
  return (
    <input
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={errorId}
      className={cn(
        "h-11 w-full rounded-sm border border-border-subtle bg-surface-primary px-3 text-sm text-text-primary placeholder:text-silver-dark focus-visible:border-silver-dark",
        error && "border-red-400/70",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  error,
  id,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & FieldProps) {
  const errorId = id && error ? `${id}-error` : undefined;
  return (
    <textarea
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={errorId}
      className={cn(
        "min-h-28 w-full rounded-sm border border-border-subtle bg-surface-primary px-3 py-2.5 text-sm text-text-primary placeholder:text-silver-dark focus-visible:border-silver-dark",
        error && "border-red-400/70",
        className,
      )}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  error,
  id,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & FieldProps) {
  const errorId = id && error ? `${id}-error` : undefined;
  return (
    <select
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={errorId}
      className={cn(
        "h-11 w-full rounded-sm border border-border-subtle bg-surface-primary px-3 text-sm text-text-primary focus-visible:border-silver-dark",
        error && "border-red-400/70",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Label({
  className,
  children,
  htmlFor,
  required,
}: {
  className?: string;
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("mb-1.5 block text-sm font-medium text-text-primary", className)}
    >
      {children}
      {required ? <span className="ml-1 text-silver-primary">*</span> : null}
    </label>
  );
}

export function FieldError({ message, id }: { message?: string; id?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="field-error mt-1.5 text-sm text-red-400">
      {message}
    </p>
  );
}

export function Checkbox({
  id,
  label,
  description,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  description?: string;
}) {
  return (
    <div className="flex gap-3">
      <input
        id={id}
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-border-subtle bg-surface-primary accent-silver-primary"
        {...props}
      />
      <div>
        <label htmlFor={id} className="text-sm text-text-primary">
          {label}
        </label>
        {description ? <p className="mt-1 text-xs text-text-secondary">{description}</p> : null}
      </div>
    </div>
  );
}

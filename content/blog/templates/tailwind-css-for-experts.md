[[para-tailwind-css-v4-moved]]

[[tailwind-css-v4]]

[[para-version-4-is-configured]]

```css
@import "tailwindcss";

@theme {
  --color-primary: #6366f1;
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --radius-lg: 0.75rem;
}
```

[[para-custom-utilities-and-variants]]

```css
@utility container {
  margin-inline: auto;
  padding-inline: 1rem;
}

@custom-variant dark (&:where(.dark, .dark *));
```

[[design-tokens]]

[[para-define-tokens-once-and]]

```css
@theme {
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --spacing-18: 4.5rem;
}
```

[[para-then-bg-primary-500-p-18-and]]

[[utility-first-best-practices]]

[[para-compose-small-utilities-instead]]

```html
<button class="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500">
  Save
</button>
```

[[para-rules-that-keep-it]]

[[list-reuse-tokens-not-raw-values]]

[[reusable-components]]

[[para-when-a-pattern-repeats]]

[[para-component-classes-with-apply]]

```css
.btn {
  @apply inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium;
}
.btn-primary {
  @apply bg-primary-600 text-white hover:bg-primary-500;
}
```

[[para-class-variants-with-class-variance-authority]]

```ts
import { cva, type VariantProps } from 'class-variance-authority'

const button = cva('inline-flex items-center rounded-lg font-medium', {
  variants: {
    variant: {
      primary: 'bg-primary-600 text-white hover:bg-primary-500',
      ghost: 'border border-gray-300 text-gray-700',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})
```

[[para-merging-classes-with-clsx]]

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// later conflicting class wins
cn('px-4', 'px-2') // 'px-2'
```

[[the-component-ecosystem]]

[[para-you-do-not-have]]

[[list-shadcn-ui-copy-paste-radix-based-components-you-own-and-edit]]

[[para-pair-them-with-tailwind]]

[[tooling]]

[[list-tailwindcss-vite-the-vite-plugin-add-it-once-forget-it]]

```bash
npm install -D tailwindcss @tailwindcss/vite prettier-plugin-tailwindcss
npm install clsx tailwind-merge class-variance-authority
```

[[making-it-beautiful]]

[[para-beautiful-ui-is-mostly]]

[[list-typography-one-font-scale-comfortable-line-height-constrained-measure]]

[[ready-production-examples]]

[[para-a-complete-copy-pasteable-setup]]

[[para-theme-tokens-theme-css]]

```css
@import "tailwindcss";

@theme {
  --color-brand-50: #eef2ff;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;

  --color-surface: #ffffff;
  --color-ink: #0f172a;
  --color-muted: #64748b;

  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --shadow-card: 0 1px 2px rgb(15 23 42 / 0.06), 0 4px 12px rgb(15 23 42 / 0.08);
}

@custom-variant dark (&:where(.dark, .dark *));
```

[[para-button-button-tsx-with-typed]]

```tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-600 text-white hover:bg-brand-500',
        secondary: 'border border-slate-200 bg-surface text-ink hover:bg-slate-50',
        ghost: 'text-ink hover:bg-slate-100',
        destructive: 'bg-red-600 text-white hover:bg-red-500',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
```

[[para-card-and-input-card-tsx]]

```tsx
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-md border border-slate-200 bg-surface p-6 shadow-card',
        className,
      )}
      {...props}
    />
  )
}
```

```tsx
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-10 w-full rounded-md border border-slate-200 bg-surface px-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500',
        className,
      )}
      {...props}
    />
  )
}
```

[[para-these-tokens-and-components]]

[[wrapping-up]]

[[para-tailwind-v4-s-css-first-setup]]

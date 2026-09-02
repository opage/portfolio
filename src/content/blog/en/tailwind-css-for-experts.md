---
title: "Tailwind CSS for experts: best practices and tools for beautiful UI"
date: "2026-09-02"
description: "Build maintainable, gorgeous interfaces with Tailwind CSS v4: design tokens, reusable components, and the modern tooling."
tags: [tailwindcss, css, frontend, ui]
---

Tailwind CSS v4 moved to a CSS-first configuration and a faster engine. This
guide covers the patterns and tools that keep a Tailwind codebase clean,
scalable, and good-looking.

## Tailwind CSS v4

Version 4 is configured entirely in CSS. There is no `tailwind.config.js`; you
just import it and declare your design tokens.

```css
@import "tailwindcss";

@theme {
  --color-primary: #6366f1;
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --radius-lg: 0.75rem;
}
```

Custom utilities and variants are declared in the same file.

```css
@utility container {
  margin-inline: auto;
  padding-inline: 1rem;
}

@custom-variant dark (&:where(.dark, .dark *));
```

## Design tokens

Define tokens once and reference them everywhere, so colors and spacing stay
consistent. Arbitrary values like `bg-[#6366f1]` are for one-offs, not a
design system.

```css
@theme {
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --spacing-18: 4.5rem;
}
```

Then `bg-primary-500`, `p-18`, and `text-primary-600` all work.

## Utility-first best practices

Compose small utilities instead of writing bespoke CSS, but extract a pattern
the moment it repeats.

```html
<button class="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500">
  Save
</button>
```

Rules that keep it maintainable:

- Reuse tokens, not raw values.
- Sort classes automatically (see the Prettier plugin below).
- Prefer `gap`/`space-*` over manual margins.
- Keep responsive and state variants close to the base classes.

## Reusable components

When a pattern repeats, extract it. Tailwind offers three levels.

**Component classes** with `@apply`:

```css
.btn {
  @apply inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium;
}
.btn-primary {
  @apply bg-primary-600 text-white hover:bg-primary-500;
}
```

**Class variants** with `class-variance-authority` (great for React/Solid):

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

**Merging classes** with `clsx` + `tailwind-merge`:

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// later conflicting class wins
cn('px-4', 'px-2') // 'px-2'
```

## The component ecosystem

You do not have to build every primitive from scratch.

- **shadcn/ui** — copy-paste, Radix-based components you own and edit.
- **Radix UI** / **Headless UI** — accessible, unstyled primitives.
- **daisyUI** — ready-made, themeable component classes.

Pair them with Tailwind for full control without the accessibility burden.

## Tooling

- `@tailwindcss/vite` — the Vite plugin (add it once, forget it).
- `prettier-plugin-tailwindcss` — sorts utility classes for a consistent order.
- `clsx` + `tailwind-merge` — compose and dedupe classes.
- `class-variance-authority` — typed component variants.

```bash
npm install -D tailwindcss @tailwindcss/vite prettier-plugin-tailwindcss
npm install clsx tailwind-merge class-variance-authority
```

## Making it beautiful

Beautiful UI is mostly consistency, not decoration.

- **Typography** — one font scale, comfortable line height, constrained measure.
- **Spacing** — stick to the 4px scale; align to a grid.
- **Color** — a small palette with one accent; check contrast for text.
- **Motion** — short, subtle transitions (`transition`, `duration-150`).
- **Dark mode** — design both, driven by the `dark` variant.

## Ready production examples

A complete, copy-pasteable setup: design tokens, a `cn` helper, and typed
components.

**Theme tokens** (`theme.css`):

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

**Button** (`button.tsx`) with typed variants:

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

**Card and Input** (`card.tsx`, `input.tsx`):

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

These tokens and components form the base of a real design system: consistent
colors, typed variants, and a single source of truth.

## Wrapping up

Tailwind v4's CSS-first setup, design tokens, and component extraction (with
`cva` and `cn`) give you a system that scales. Add shadcn/Radix for primitives
and the Prettier plugin for order, and you get beautiful, maintainable UI.

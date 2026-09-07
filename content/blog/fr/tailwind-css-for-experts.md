---
title: "Tailwind CSS pour les experts : bonnes pratiques et outils pour une belle UI"
date: "2026-09-02"
description: "Construisez des interfaces maintenables et superbes avec Tailwind CSS v4 : jetons de design, composants réutilisables et outillage moderne."
tags: [tailwindcss, css, frontend, ui]
---

Tailwind CSS v4 est passé à une configuration en CSS et à un moteur plus
rapide. Ce guide couvre les motifs et les outils qui gardent une base Tailwind
propre, scalable et agréable à regarder.

## Tailwind CSS v4

La version 4 se configure entièrement en CSS. Pas de `tailwind.config.js` : vous
l'importez et déclarez vos jetons de design.

```css
@import "tailwindcss";

@theme {
  --color-primary: #6366f1;
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --radius-lg: 0.75rem;
}
```

Les utilitaires et variantes personnalisés se déclarent dans le même fichier.

```css
@utility container {
  margin-inline: auto;
  padding-inline: 1rem;
}

@custom-variant dark (&:where(.dark, .dark *));
```

## Jetons de design

Définissez les jetons une fois et référencez-les partout, pour que les couleurs
et les espacements restent cohérents. Les valeurs arbitraires comme
`bg-[#6366f1]` sont pour les cas uniques, pas pour un design system.

```css
@theme {
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --spacing-18: 4.5rem;
}
```

Alors `bg-primary-500`, `p-18` et `text-primary-600` fonctionnent.

## Bonnes pratiques utility-first

Composez de petits utilitaires plutôt que d'écrire du CSS sur mesure, mais
extrayez un motif dès qu'il se répète.

```html
<button class="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500">
  Save
</button>
```

Règles pour rester maintenable :

- Réutilisez les jetons, pas les valeurs brutes.
- Triez les classes automatiquement (voir le plugin Prettier ci-dessous).
- Préférez `gap`/`space-*` aux marges manuelles.
- Gardez les variantes responsive et d'état proches des classes de base.

## Composants réutilisables

Quand un motif se répète, extrayez-le. Tailwind offre trois niveaux.

**Classes composants** avec `@apply` :

```css
.btn {
  @apply inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium;
}
.btn-primary {
  @apply bg-primary-600 text-white hover:bg-primary-500;
}
```

**Variantes de classes** avec `class-variance-authority` (idéal pour React/Solid) :

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

**Fusion de classes** avec `clsx` + `tailwind-merge` :

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// la classe en conflit finale gagne
cn('px-4', 'px-2') // 'px-2'
```

## L'écosystème de composants

Vous n'avez pas à construire chaque primitive de zéro.

- **shadcn/ui** — des composants à copier-coller, basés sur Radix, que vous
  possédez et modifiez.
- **Radix UI** / **Headless UI** — des primitives accessibles et sans style.
- **daisyUI** — des classes de composants prêtes à l'emploi et thématisables.

Associez-les à Tailwind pour un contrôle total sans le fardeau de
l'accessibilité.

## Outillage

- `@tailwindcss/vite` — le plugin Vite (ajoutez-le une fois, oubliez-le).
- `prettier-plugin-tailwindcss` — trie les classes utilitaires pour un ordre
  cohérent.
- `clsx` + `tailwind-merge` — composez et dédupliquez les classes.
- `class-variance-authority` — des variantes de composants typées.

```bash
npm install -D tailwindcss @tailwindcss/vite prettier-plugin-tailwindcss
npm install clsx tailwind-merge class-variance-authority
```

## Rendre l'UI magnifique

Une belle UI est surtout de la cohérence, pas de la décoration.

- **Typographie** — une seule échelle de polices, une hauteur de ligne
  confortable, une mesure contrainte.
- **Espacement** — restez sur l'échelle de 4px ; alignez sur une grille.
- **Couleur** — une petite palette avec un accent unique ; vérifiez le contraste.
- **Mouvement** — des transitions courtes et subtiles (`transition`,
  `duration-150`).
- **Mode sombre** — concevez les deux, piloté par la variante `dark`.

## Exemples prêts pour la production

Une configuration complète, prête à copier : des jetons de design, un utilitaire
`cn` et des composants typés.

**Jetons de thème** (`theme.css`) :

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

**Bouton** (`button.tsx`) avec variantes typées :

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

**Carte et champ** (`card.tsx`, `input.tsx`) :

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

Ces jetons et composants forment la base d'un vrai design system : des couleurs
cohérentes, des variantes typées et une source unique de vérité.

## Pour conclure

La configuration CSS-first de Tailwind v4, les jetons de design et l'extraction
de composants (avec `cva` et `cn`) vous donnent un système qui passe à
l'échelle. Ajoutez shadcn/Radix pour les primitives et le plugin Prettier pour
l'ordre, et vous obtenez une UI belle et maintenable.

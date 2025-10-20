# Why the `cap` Unit Approach Works

## The Problem We're Solving

Text doesn't naturally sit "on" a line. Here's what happens with normal CSS:

```
┌──────────────────────────────┐
│  ↕ Extra space (top)         │  ← This varies by font!
│  HELLO                       │  ← Cap height
│  hello                       │
│  ─────  ← Baseline           │  ← We want THIS on the grid line
│  ↕ Descenders (g, y, p)      │
│  ↕ Extra space (bottom)      │  ← This also varies!
└──────────────────────────────┘
    ↕ Total = line-height
```

The baseline position within the line-height box **varies by font** because different fonts have different:

- Cap heights
- X-heights
- Ascender/descender lengths
- Built-in "leading" (vertical metrics)

## Previous Approach ❌

My first attempt used a fixed offset:

```css
.baseline-on-grid {
	line-height: 2rem;
	position: relative;
	top: -0.125rem; /* Guess! */
}
```

**Why it failed:**

- The `-0.125rem` value was a guess
- It might work for Space Grotesk but not for other fonts
- You'd need to manually calculate and adjust for each font family
- Not maintainable or scalable

## The `cap` Unit Breakthrough ✅

The `1cap` unit represents the **actual cap-height** of the current font. This is a game-changer!

### The Formula

```css
padding-top = (line-height - cap-height) / 2
```

In CSS:

```css
padding-top: calc(calc(2rem - 1cap) / 2);
```

### Why This Works

Let's visualize with actual numbers (Space Grotesk at 14px):

```
Assume:
- line-height: 32px (2rem)
- cap-height: ~20px (1cap for Space Grotesk at 14px)

padding-top = (32px - 20px) / 2 = 6px

┌────────────────────────────┐  0px (start of element)
│  ↕ 6px padding-top         │
│  HELLO ← cap height (20px) │  6px (text starts)
│  hello                     │
│  ─────  ← Baseline         │  ~26px ← Sits on grid line!
│  gjpqy (descenders)        │
└────────────────────────────┘  32px (one baseline unit)
```

The padding pushes the text down so the **baseline lands exactly on the grid line**!

### Multi-line Magic ✨

Because we set `line-height: 2rem` (32px), each subsequent line is exactly 32px below:

```
Grid Line 0px  → ─────────────────────────────────
                 Line 1 baseline sits here

Grid Line 32px → ─────────────────────────────────
                 Line 2 baseline sits here

Grid Line 64px → ─────────────────────────────────
                 Line 3 baseline sits here
```

## Complete Solution

```css
--baselines: 2; /* Line height = 2 × 16px = 32px */
--beneath: 2; /* Space below = 2 × 16px = 32px */

/* Calculate the exact shift */
--baseline-shift: calc(calc(calc(var(--baselines) * 1rem) - 1cap) / 2);

/* Calculate margin to maintain grid alignment */
--baseline-push: calc(calc(var(--beneath) * 1rem) - var(--baseline-shift));

line-height: calc(var(--baselines) * 1rem); /* 32px */
padding-top: var(--baseline-shift); /* ~6px (varies by font) */
margin-bottom: var(--baseline-push); /* ~26px (varies by font) */

/* Total vertical space = 6px + 32px + 26px = 64px (2 baseline units) ✓ */
```

## Why It's Font-Agnostic 🎯

The beauty is that `1cap` **automatically adjusts** for different fonts:

```css
/* Space Grotesk */
1cap ≈ 0.7em → padding-top ≈ 6px

/* Georgia */
1cap ≈ 0.6em → padding-top ≈ 8px

/* Arial */
1cap ≈ 0.72em → padding-top ≈ 5.6px
```

No manual tweaking needed! The formula works for **any font**.

## Browser Support

The `cap` unit landed in browsers in 2022:

- Chrome 105 (Aug 2022)
- Firefox 97 (Feb 2022)
- Safari 15.4 (Mar 2022)
- Edge 105 (Sep 2022)

It's now safe to use in production! 🎉

## Credit

This approach was pioneered by:

1. **Razvan Onofrei** - Original formula (2012)
2. **Jake Giltsoff** - Modernized with `cap` unit (2023)

Read the full article: [Web typography: baseline grids made easy](https://maketypework.com/web-typography-baseline-grids-made-easy/)

## The Insight

> "Instead of guessing font metrics, let the browser tell us the cap-height and calculate the exact shift needed."

This is why modern CSS units like `cap`, `ex`, `ch`, and `ic` are so powerful - they expose font metrics we previously had to measure manually! 🚀

# Baseline Grid Quick Reference

## TL;DR

Use `baseline-on-grid` class on any text element (single or multi-line) to align to the 32px grid:

```html
<div class="baseline-on-grid text-sm">Your text here</div>
```

## Why Multi-line Works

The magic of the `cap` unit approach is that it works perfectly for **both single and multi-line text**:

```
Line 1: ─────── (baseline on grid line at 0px)
Line 2: ─────── (baseline on grid line at 32px)
Line 3: ─────── (baseline on grid line at 64px)
Line 4: ─────── (baseline on grid line at 96px)
```

### The Math

1. **First line**: `padding-top: calc((2rem - 1cap) / 2)` positions the baseline on the grid
2. **Every other line**: `line-height: 2rem` (32px) = automatic 32px spacing
3. **Next element**: `margin-bottom` calculated to maintain grid alignment

## Classes Available

| Class                       | Line Height | Space Below | Use For                  |
| --------------------------- | ----------- | ----------- | ------------------------ |
| `.baseline-on-grid`         | 32px (2rem) | 32px        | Default text, paragraphs |
| `.baseline-on-grid-compact` | 32px (2rem) | 16px        | Tight spacing            |
| `.baseline-on-grid-large`   | 64px (4rem) | 32px        | Large headings           |

## Custom Overrides

```html
<h1 class="baseline-on-grid" style="--baselines: 3; --beneath: 2;">
	Custom spacing
</h1>
```

## Test Page

Visit `/baseline-test` to see visual examples with a grid overlay toggle.

## Browser Support

✅ Chrome 105+  
✅ Firefox 97+  
✅ Safari 15.4+  
✅ Edge 105+

The `1cap` unit is supported in all modern browsers since 2022.

## Source

Based on Jake Giltsoff's article: [Web typography: baseline grids made easy](https://maketypework.com/web-typography-baseline-grids-made-easy/)

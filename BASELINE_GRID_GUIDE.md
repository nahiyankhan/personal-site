# Baseline Grid Alignment Guide

## Overview

This guide explains how to ensure text sits exactly on the 32px baseline grid created by `AnimatedLines.astro`.

## The Challenge

Text doesn't naturally sit "on" lines because CSS line-height creates a box around text, and the baseline (where text sits) is positioned within that box based on font metrics. For most fonts, the baseline is roughly 75-80% down from the top of the line-height box.

## The 32px Grid System

- **Grid interval**: 32px (2rem)
- **Lines positioned at**: 0px, 32px, 64px, 96px, etc. from top
- **All text line-heights should be**: multiples of 32px (32px, 64px, etc.)

## Solution: The `cap` Unit

We use the modern CSS `cap` unit (supported in all modern browsers) which represents the cap-height of the font. This allows us to calculate the **exact** shift needed to align any text to the baseline grid, regardless of font family or size.

### The Formula

Based on [this excellent article](https://maketypework.com/web-typography-baseline-grids-made-easy/), the formula is:

```
baseline-shift = (line-height - 1cap) / 2
```

## Using the Utility Classes

### Method 1: Standard Grid Alignment (Recommended)

Add the `baseline-on-grid` class to your text elements:

```html
<div class="baseline-on-grid text-sm">
	Your text sits exactly on the grid line
</div>
```

**What it does:**

- Sets `line-height: 2rem` (32px)
- Calculates exact padding-top using: `calc(calc(2rem - 1cap) / 2)`
- Adds appropriate margin-bottom to maintain grid rhythm
- **Works with any font family automatically!**

### Method 2: Compact Spacing

For tighter spacing (only 1 baseline / 16px beneath):

```html
<div class="baseline-on-grid-compact text-sm">Compact spacing</div>
```

### Method 3: Large Text

For larger text spanning 4 baselines (64px):

```html
<div class="baseline-on-grid-large text-2xl">Large heading text</div>
```

### Method 4: Container Alignment

For blocks of text, use `container-on-grid` on the parent:

```html
<div class="container-on-grid">
	<p class="baseline-on-grid">First paragraph</p>
	<p class="baseline-on-grid">Second paragraph</p>
</div>
```

## Custom Baseline Counts

You can override the CSS variables inline for custom baseline counts:

```html
<h1 class="baseline-on-grid text-4xl" style="--baselines: 6; --beneath: 3;">
	Extra large heading (6 baselines tall, 3 beneath)
</h1>
```

The variables:

- `--baselines`: How many baselines tall the line-height should be
- `--beneath`: How many baselines of margin-bottom to add

## Multi-line Text Support

The `cap` unit approach works perfectly for multi-line text! Here's why:

1. **First line positioning**: The `padding-top` shift (calculated with `1cap`) positions the first line's baseline exactly on the grid
2. **Consistent line-height**: With `line-height: 2rem` (32px), each subsequent line is exactly one baseline unit below the previous line
3. **All lines align**: Since the first line is on the grid and each line is 32px apart, all lines naturally fall on grid lines

### Example

```html
<div class="baseline-on-grid max-w-md text-sm">
	This is a multi-line paragraph with several lines of text. Every single line
	in this paragraph will sit exactly on the baseline grid, no matter how many
	lines it wraps to. The magic happens because the first line is positioned
	correctly and the line-height maintains the grid rhythm.
</div>
```

Each line will sit on grid lines at 32px intervals (0px, 32px, 64px, 96px, etc.)

## Testing Alignment

### Quick Test Page

Visit `/baseline-test` in your browser to see a comprehensive test page with:

- Single line text
- Multi-line paragraphs
- Multiple paragraphs
- Mixed text sizes
- A toggle button to show/hide the red grid overlay

### Manual Testing

Add temporary visual guides:

```css
/* Temporary test overlay */
.test-grid-overlay {
	position: fixed;
	inset: 0;
	background: repeating-linear-gradient(
		transparent,
		transparent 31px,
		red 31px,
		red 32px
	);
	pointer-events: none;
	z-index: 9999;
}
```

Add this to your page temporarily:

```html
<div class="test-grid-overlay"></div>
```

## Common Pitfalls

1. **Padding/Margin not multiples of 32px**: Any padding or margin that's not a multiple of 32px will throw off alignment
2. **Different line-heights**: All text should use 32px, 64px, 96px, etc.
3. **Transform conflicts**: Other transforms can interfere with the `top` adjustment
4. **Font fallbacks**: Different fonts in your stack may align differently

## Best Practices

1. **Use consistent spacing**: Always use multiples of 32px (2rem) for spacing
2. **Test across fonts**: Check alignment with fallback fonts
3. **Group related text**: Use `container-on-grid` for sections
4. **Document deviations**: If you need to break the grid, document why

## Example Implementation

```astro
---
// Component.astro
---

<div class="container-on-grid px-8 py-16">
	<h2 class="baseline-on-grid mb-8 text-2xl">Heading Text</h2>

	<p class="baseline-on-grid mb-8 text-sm">
		Body text that sits exactly on the grid lines.
	</p>

	<div class="baseline-on-grid text-sm">a.k.a the 9 to 5. and the 5 to 9.</div>
</div>
```

## Resources

- [Baseline Grid on the Web](https://medium.com/@razvanonofrei/aligning-type-to-baseline-the-right-way-using-sass-e258fce47a9b)
- [CSS Text Box Trim](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim)
- [Vertical Rhythm in Typography](https://zellwk.com/blog/why-vertical-rhythms/)

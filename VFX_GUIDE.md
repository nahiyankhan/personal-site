# PowerGlitch Effects Guide

This site uses [PowerGlitch](https://7ph.github.io/powerglitch/#/) to add tasteful, retro-inspired glitch effects.

## Current Implementation

The PowerGlitch system is initialized in `src/components/PowerGlitchEffects.astro` and included in the base layout. Effects are applied using data attributes on HTML elements.

## Available Effects

### 1. Hover RGB Shift (`data-vfx-hover`)

Adds a chromatic aberration effect when hovering over an element.

**Usage:**

```html
<!-- On an image directly -->
<img src="image.png" data-vfx-hover alt="..." />

<!-- On a container with an image -->
<div data-vfx-hover>
	<img src="image.png" alt="..." />
</div>
```

**Applied to:**

- Project images (beacon-site.astro, token-viz.astro)
- Easter egg GIF popups (EasterEgg.astro)

### 2. Hover Glitch (`data-vfx-glitch`)

Adds a glitch distortion effect when hovering over an element.

**Usage:**

```html
<!-- On an SVG container -->
<div data-vfx-glitch>
	<svg>...</svg>
</div>

<!-- On an image -->
<div data-vfx-glitch>
	<img src="image.png" alt="..." />
</div>
```

**Applied to:**

- Logo in header (Intro.astro)
- Company logos in experience section (Experiences.astro)

### 3. Auto Subtle RGB Shift (`data-vfx-auto`)

Applies a very subtle, constantly animating chromatic aberration effect.

**Usage:**

```html
<img src="image.png" data-vfx-auto alt="..." />
```

**Not currently applied** - reserved for hero images or special highlights.

## Customization

You can modify the PowerGlitch effects in `src/components/PowerGlitchEffects.astro`:

### Adjust Effect Intensity

```javascript
PowerGlitch.glitch(el, {
	playMode: "always",
	timing: {
		duration: 2000, // Animation duration in ms
		iterations: Infinity, // Loop forever
	},
	glitchTimeSpan: {
		start: 0.5, // When glitch starts (0-1)
		end: 0.7, // When glitch ends (0-1)
	},
	shake: {
		velocity: 15, // Shake speed
		amplitudeX: 0.2, // Horizontal shake (0-1)
		amplitudeY: 0.2, // Vertical shake (0-1)
	},
	slice: {
		count: 6, // Number of slices
		velocity: 15, // Slice animation speed
		minHeight: 0.02, // Min slice height (0-1)
		maxHeight: 0.15, // Max slice height (0-1)
		hueRotate: true, // Enable color shift
	},
});
```

### Presets

PowerGlitch comes with several built-in presets you can use:

```javascript
// Subtle glitch
PowerGlitch.glitch(el, { preset: "subtle" });

// Intense glitch
PowerGlitch.glitch(el, { preset: "wild" });
```

## Performance Considerations

- PowerGlitch uses pure CSS transforms and filters (no WebGL/Canvas!)
- Effects are only applied on hover (no performance impact when idle)
- Proper cleanup is handled on page navigation
- No canvas positioning issues or infinite scroll bugs
- All effects are designed to be subtle and performant

## Browser Compatibility

PowerGlitch works on all modern browsers:

- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Better compatibility than WebGL-based solutions

## Adding New Effects

To add effects to new elements:

1. Add the appropriate `data-vfx-*` attribute to your HTML
2. Ensure images are loaded before effects apply (handled automatically)
3. Test on hover/interaction to ensure the effect feels tasteful

## Troubleshooting

If effects aren't appearing:

- Check browser console for JavaScript errors
- Ensure the element has proper positioning (`position: relative` is added automatically)
- Check that PowerGlitchEffects component is included in the layout
- Verify hover events are triggering (check console logs)

## Examples

### Subtle Project Thumbnail

```astro
<a href="/projects/my-project">
	<div data-vfx-hover>
		<img src="thumbnail.png" alt="Project thumbnail" />
	</div>
</a>
```

### Glitchy Logo

```astro
<div data-vfx-glitch>
	<Fragment set:html={Logo} />
</div>
```

### Auto-animated Hero Image

```astro
<img
	src="hero.png"
	data-vfx-auto
	alt="Hero image with subtle chromatic effect"
/>
```

## Design Philosophy

These effects are meant to complement the existing retro/CRT aesthetic:

- **Subtle by default** - effects enhance, not distract
- **Interactive** - most effects only appear on hover
- **Performant** - lightweight CSS-based animations
- **Tasteful** - inspired by VHS tapes, CRT displays, and retro computing
- **No side effects** - won't break scrolling or layout

Keep effects sparse and meaningful. Not every element needs glitch effects!

## Learn More

- [PowerGlitch Official Docs](https://7ph.github.io/powerglitch/#/)
- [PowerGlitch on GitHub](https://github.com/7PH/powerglitch)

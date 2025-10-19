# PowerGlitch Quick Start ⚡

## What You Got

Tasteful retro glitch effects using [PowerGlitch](https://7ph.github.io/powerglitch/#/) - lightweight and performant!

## Where Effects Are Applied

| Element                  | Effect | Trigger                   |
| ------------------------ | ------ | ------------------------- |
| 📛 Your logo ("Nahiyan") | Glitch | Hover                     |
| 🌓 Theme toggle button   | Glitch | Hover                     |
| ⬆️ Scroll-to-top button  | Glitch | After scrolling, on hover |

## Add Effects to New Elements

### Glitch Effect

```html
<div data-vfx-glitch>
	<!-- Your content -->
</div>
```

### Chromatic Aberration (RGB Shift)

```html
<div data-vfx-hover>
	<img src="image.png" alt="..." />
</div>
```

### Subtle Auto-Animation

```html
<img src="hero.png" data-vfx-auto alt="..." />
```

## Adjust Intensity

Open `src/components/PowerGlitchEffects.astro` and adjust the glitch parameters:

```javascript
shake: {
  velocity: 15,      // Shake speed
  amplitudeX: 0.2,   // Horizontal shake intensity
  amplitudeY: 0.2,   // Vertical shake intensity
},
slice: {
  count: 6,          // Number of glitch slices
  velocity: 15,      // Slice animation speed
  minHeight: 0.02,   // Minimum slice height
  maxHeight: 0.15,   // Maximum slice height
  hueRotate: true,   // Color shift effect
}
```

## Test It

Your dev server is running at: **http://localhost:4322/**

1. Visit your site
2. Hover over logos, icons, and images
3. Watch for subtle retro glitches! 📺✨

## Documentation

- 📖 **VFX_GUIDE.md** - Detailed usage and customization
- 📋 **VFX_IMPLEMENTATION_SUMMARY.md** - Complete implementation details
- ⚡ **VFX_QUICK_START.md** - This file!
- 🌐 **PowerGlitch Docs** - https://7ph.github.io/powerglitch/#/

## Pro Tips

- Keep effects **sparse** - not every element needs VFX
- Test in **both dark and light modes**
- Effects work on **SVGs, images, videos, and containers**
- PowerGlitch is **lightweight** and doesn't use WebGL/Canvas (no scrolling issues!)

## Browser Support

✅ Chrome, Firefox, Safari, Edge (modern versions)  
✅ Mobile browsers (iOS Safari, Chrome Mobile)  
⚠️ Gracefully degrades on older browsers

---

**Enjoy your retro-futuristic site! 🚀**

# Using Visualizer Colors in Your Site

The audio visualizer broadcasts color information that you can use to sync other elements on your site with the music!

## Event Details

The visualizer dispatches a `visualizer-colors` custom event on every animation frame with the following data:

```typescript
interface VisualizerColorEvent {
	detail: {
		// HSV color components (0-1 range)
		hue: number; // 0-1 (red=0, cyan=0.5, red=1)
		saturation: number; // 0-1 (gray=0, full color=1)
		value: number; // 0-1 (black=0, bright=1)

		// RGB color (0-255 range)
		rgb: {
			r: number; // 0-255
			g: number; // 0-255
			b: number; // 0-255
		};

		// Hex color string
		hex: string; // e.g. "#ff00ff"

		// Audio frequency levels (0-1 range)
		audioLevels: {
			bass: number; // Low frequencies
			mid: number; // Mid frequencies (vocals, instruments)
			high: number; // High frequencies (cymbals, hi-hats)
			intensity: number; // Overall audio level
		};

		isPlaying: boolean; // Whether music is currently playing
	};
}
```

## Usage Examples

### Example 1: Color a Border on Audio Intensity

```astro
---
// In any Astro component
---

<div id="audio-reactive-element" class="border-4 border-white">
	Your content here
</div>

<script>
	const element = document.getElementById("audio-reactive-element");

	document.addEventListener("visualizer-colors", (event: CustomEvent) => {
		const { hex, audioLevels } = event.detail;

		if (element) {
			// Change border color to match visualizer
			element.style.borderColor = hex;

			// Scale border width with audio intensity
			const width = 4 + audioLevels.intensity * 8; // 4-12px
			element.style.borderWidth = `${width}px`;
		}
	});
</script>
```

### Example 2: React to Bass Drops

```astro
<div id="bass-reactor" class="transition-transform">🎵</div>

<script>
	const element = document.getElementById("bass-reactor");

	document.addEventListener("visualizer-colors", (event: CustomEvent) => {
		const { audioLevels, hex } = event.detail;

		if (element && audioLevels.bass > 0.5) {
			// Pulse on heavy bass
			const scale = 1 + audioLevels.bass * 0.5;
			element.style.transform = `scale(${scale})`;
			element.style.color = hex;
		}
	});
</script>
```

### Example 3: Sync Background Glow

```astro
<div id="glow-container" class="p-8">
	<h1>Your Title</h1>
</div>

<script>
	const container = document.getElementById("glow-container");

	document.addEventListener("visualizer-colors", (event: CustomEvent) => {
		const { rgb, audioLevels } = event.detail;

		if (container) {
			// Create a glow that pulses with the music
			const intensity = audioLevels.intensity * 50; // 0-50px blur
			const spread = audioLevels.bass * 20; // 0-20px spread

			container.style.boxShadow = `
        0 0 ${intensity}px ${spread}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)
      `;
		}
	});
</script>
```

### Example 4: Color Specific Elements by Frequency

```astro
<div class="frequency-display">
	<div id="bass-indicator">🔊 Bass</div>
	<div id="mid-indicator">🎤 Mids</div>
	<div id="high-indicator">✨ Highs</div>
</div>

<script>
	const bassEl = document.getElementById("bass-indicator");
	const midEl = document.getElementById("mid-indicator");
	const highEl = document.getElementById("high-indicator");

	document.addEventListener("visualizer-colors", (event: CustomEvent) => {
		const { audioLevels, hex } = event.detail;

		// Each element reacts to its frequency range
		if (bassEl) {
			bassEl.style.opacity = `${0.3 + audioLevels.bass * 0.7}`;
			bassEl.style.transform = `scale(${1 + audioLevels.bass * 0.2})`;
		}

		if (midEl) {
			midEl.style.opacity = `${0.3 + audioLevels.mid * 0.7}`;
			midEl.style.color = hex;
		}

		if (highEl) {
			highEl.style.opacity = `${0.3 + audioLevels.high * 0.7}`;
		}
	});
</script>
```

### Example 5: Create a Dynamic Text Color

```astro
<h1 id="music-title" class="transition-colors duration-75">Now Playing</h1>

<script>
	const title = document.getElementById("music-title");

	document.addEventListener("visualizer-colors", (event: CustomEvent) => {
		const { hex, isPlaying } = event.detail;

		if (title) {
			// Only apply colors when music is playing
			title.style.color = isPlaying ? hex : "inherit";
		}
	});
</script>
```

## Color Themes by Track

The visualizer automatically selects colors based on the track name:

- **Cyberpunk Action**: Purple/Blue (`hue: 0.75`)
- **Neon Nights**: Pink/Magenta (`hue: 0.9`)
- **Oblivion Echo**: Deep Blue (`hue: 0.7`)
- **Nightclub Cyberpunk**: Cyan (`hue: 0.55`)
- **Synthwave Phonk**: Hot Pink (`hue: 0.85`)

When no music is playing, colors fade to grayscale (`saturation: 0`).

## Performance Tips

1. **Throttle updates** if you don't need 60fps color updates:

```javascript
let lastUpdate = 0;
document.addEventListener("visualizer-colors", (event: CustomEvent) => {
  const now = Date.now();
  if (now - lastUpdate < 100) return; // Update max 10 times per second
  lastUpdate = now;
  // Your code here
});
```

2. **Use CSS transitions** for smooth color changes:

```css
.my-element {
	transition: all 0.1s ease-out;
}
```

3. **Debounce expensive operations** like DOM searches or complex calculations.

## Browser Compatibility

The visualizer uses standard Web APIs and works in all modern browsers that support:

- Custom Events
- Web Audio API
- WebGL

Enjoy syncing your site with the music! 🎵✨

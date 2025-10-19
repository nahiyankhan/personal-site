# Music Visualizer Brutalist/Retro Updates

## Overview

Updated the music visualizer to align with the site's brutalist, retro aesthetic featuring evenly-spaced lines, noise, solid circle lines, and CRT monitor effects.

## Key Changes Made

### 1. **Grid-Based Equalizer Bars** (Buffer A)

- **Replaced**: Organic expanding circles
- **With**: 32 evenly-spaced vertical bars arranged in a grid
- **Features**:
  - Bass frequencies on left, mids in center, highs on right
  - Quantized heights (snapped to grid, no smooth transitions)
  - Uniform spacing and width
  - Low saturation for muted, brutalist look

### 2. **Solid Circle Rings** (Buffer A)

- **Added**: Concentric rings at fixed positions (0.2, 0.4, 0.6, 0.8, 1.0)
- **Features**:
  - Thick, uniform stroke width (0.02)
  - Triggered by bass levels (threshold-based)
  - No smooth expansion - rings appear at quantized positions
  - Sharp, geometric appearance

### 3. **Grid Overlay** (Buffer A)

- **Added**: Structural grid lines for brutalist aesthetic
- **Features**:
  - Evenly spaced at 0.1 intervals
  - Subtle but visible when audio is playing
  - Reinforces geometric, structured feel

### 4. **Square Pixels** (Buffer B)

- **Replaced**: Circular dots
- **With**: Square pixels using `sdRect` instead of `sdCircle`
- **Features**:
  - Fixed grid size with less variation
  - Pixel grid lines for CRT effect
  - More consistent, blocky appearance

### 5. **CRT Screen Effects** (Final Pass)

- **Scan Lines**:
  - Horizontal evenly-spaced scan lines
  - Stronger lines every 4 pixels (retro monitor effect)
- **Screen Curvature**:
  - Subtle barrel distortion like old CRT monitors
- **Noise/Grain**:
  - Procedural noise using hash function
  - Animated grain for retro film/monitor feel
- **Warm Tint**:
  - Amber/warm color tint (like old CRT phosphors)
  - Partial desaturation for monochrome-ish look
- **Screen Flicker**:
  - Subtle flicker on bass drops
  - High-frequency flicker for authentic CRT feel

### 6. **Reduced Color Saturation**

- **Changed**: From vibrant, highly saturated colors
- **To**: Muted, low-saturation palette (0.0-0.5 range)
- **Effect**: More brutalist, less synthetic/organic feel

### 7. **Minimal Effects**

- **Reduced**: Camera shake (only on bass drops)
- **Reduced**: Chromatic aberration (subtle horizontal only)
- **Removed**: Organic lens distortion
- **Focus**: Sharp, geometric, structured visuals

## Visual Characteristics

### Before:

- ❌ Organic, flowing circles
- ❌ Smooth animations
- ❌ High saturation colors
- ❌ Smooth dot matrix
- ❌ Heavy post-processing

### After:

- ✅ Grid-aligned equalizer bars
- ✅ Quantized, stepped animations
- ✅ Low saturation, muted colors
- ✅ Square pixel grid
- ✅ CRT scan lines and retro effects
- ✅ Solid circle rings at fixed positions
- ✅ Noise/grain texture
- ✅ Brutalist geometric feel

## Alignment with Site Design

The visualizer now matches these key site elements:

1. **Evenly-spaced lines**:
   - Bars are uniformly spaced
   - Grid overlay at regular intervals
   - Scan lines evenly distributed

2. **Noise**:
   - Procedural grain effect added
   - Can be enhanced with site's noise.gif texture

3. **Solid circle lines**:
   - Concentric rings with uniform stroke width
   - Fixed positions, no smooth expansion

4. **Brutalist**:
   - Geometric, grid-based layout
   - Low saturation colors
   - Quantized animations
   - Minimal smooth transitions

5. **Retro/Old Screen**:
   - CRT scan lines
   - Screen curvature
   - Phosphor-like warm tint
   - Screen flicker
   - Square pixels

## Testing Recommendations

1. Play music and observe the equalizer bars responding to different frequencies
2. Watch for bass-triggered circle rings appearing at fixed positions
3. Check scan lines are visible and evenly spaced
4. Verify square pixels in the dot matrix (not circles)
5. Look for subtle noise/grain texture
6. Test different tracks to see color theme variations

## Further Customization Options

If you want to adjust the aesthetic further, consider:

1. **More aggressive quantization**: Reduce `floor(barHeight * 16.0)` to `8.0` or `4.0` for chunkier steps
2. **Stronger scan lines**: Increase the scan line multiplier from `0.04` to `0.1` or higher
3. **Green/Amber CRT**: Change the tint from `vec3(0.95, 0.92, 0.88)` to `vec3(0.7, 1.0, 0.5)` for green monitor
4. **Thicker rings**: Increase `ringWidth` from `0.02` to `0.04` or more
5. **More bars**: Change `numBars` from `32.0` to `64.0` for denser grid
6. **Pixel size**: Adjust `pixelSize` from `0.42` to make pixels larger or smaller

## Files Modified

- `/Users/nahiyan/Development/personal/personal-site/src/components/AudioWaveVisualizer.astro`
  - Buffer A shader (geometry generation)
  - Buffer B shader (pixel grid)
  - Final pass shader (CRT effects)
  - Component description comment

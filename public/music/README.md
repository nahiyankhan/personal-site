# Music Files

Add your music files (.mp3, .ogg, .wav) to this folder.

## Usage

1. Add your music files to this directory
2. Update the tracks array in `src/components/MusicPlayer.astro` to reference your files:

```javascript
const tracks = [
	{ name: "Song Name 1", src: "/music/your-file-1.mp3" },
	{ name: "Song Name 2", src: "/music/your-file-2.mp3" },
	{ name: "Song Name 3", src: "/music/your-file-3.mp3" },
];
```

## Supported Formats

- MP3 (.mp3)
- OGG (.ogg)
- WAV (.wav)

## Note

Make sure your audio files are optimized for web use to ensure fast loading times.


// Shared letter sizing utility for Word components
// Each letter is 376x330 (aspect ratio ~1.14:1)

export const LETTER_ASPECT_RATIO = 376 / 330;
export const LETTER_GAP = 4;
export const MAX_LETTER_HEIGHT = 192;
export const MAX_LETTER_WIDTH = 218;

interface LetterSizingConfig {
	elementId: string;
	letterCount: number;
	onResize?: () => void;
}

export interface LetterSize {
	height: number;
	width: number;
}

function getResponsiveValues() {
	const isMobile = window.innerWidth < 640;
	return {
		gridUnit: isMobile ? 16 : 32,
		horizontalPadding: isMobile ? 32 : 64,
	};
}

// Calculate letter dimensions based on viewport and letter count
export function calculateLetterSize(letterCount: number): LetterSize {
	const { gridUnit, horizontalPadding } = getResponsiveValues();
	const viewportWidth = window.innerWidth;
	let units = 2;
	const totalGapWidth = (letterCount - 1) * LETTER_GAP;
	const SAFETY_BUFFER = 2;

	while (units <= 10) {
		const nextUnits = units + 1;
		const nextHeight = nextUnits * gridUnit;

		// Don't exceed max letter height
		if (nextHeight > MAX_LETTER_HEIGHT) {
			break;
		}

		const nextLetterWidth = Math.ceil(nextHeight * LETTER_ASPECT_RATIO);
		const nextTotalWidth =
			nextLetterWidth * letterCount + totalGapWidth + horizontalPadding + SAFETY_BUFFER;

		if (nextTotalWidth > viewportWidth) {
			break;
		}
		units = nextUnits;
	}

	const height = Math.min(units * gridUnit, MAX_LETTER_HEIGHT);
	const width = Math.floor(height * LETTER_ASPECT_RATIO);

	return { height, width };
}

export function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number): T {
	let timeout: ReturnType<typeof setTimeout> | null = null;
	return function executedFunction(...args: Parameters<T>) {
		const later = () => {
			timeout = null;
			func(...args);
		};
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	} as T;
}

// Apply letter size to an element's CSS custom properties
export function applyLetterSize(elementId: string, size: LetterSize): void {
	const logoElement = document.getElementById(elementId);
	if (!logoElement) return;

	logoElement.style.setProperty("--letter-height", `${size.height}px`);
	logoElement.style.setProperty("--letter-width", `${size.width}px`);
}

// Full initialization with event listeners
export function initLetterSizing(config: LetterSizingConfig): () => void {
	const { elementId, letterCount, onResize } = config;

	function updateSize() {
		const size = calculateLetterSize(letterCount);
		applyLetterSize(elementId, size);
		onResize?.();
	}

	const handleResize = debounce(updateSize, 150);

	// Initialize sizing immediately
	updateSize();

	// Set up event listeners
	document.addEventListener("DOMContentLoaded", updateSize);
	window.addEventListener("resize", handleResize);
	document.addEventListener("astro:after-swap", updateSize);

	// Return cleanup function
	return () => {
		window.removeEventListener("resize", handleResize);
	};
}


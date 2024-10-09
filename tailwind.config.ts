import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
		"!./src/pages/og-image/[slug].png.ts",
	],
	corePlugins: {
		// disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
		aspectRatio: false,
		borderOpacity: false,
		fontVariantNumeric: false,
		ringOffsetColor: false,
		ringOffsetWidth: false,
		scrollSnapType: false,
		textOpacity: false,
		// disable some core plugins as they are included in the css, even when unused
		touchAction: false,
	},
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require('tailwind-clip-path'),
		plugin(({ addComponents }) => {
			addComponents({
				".header-standard": {
					"@apply text-lg sm:text-xl leading-6 sm:leading-9 font-semibold text-textProminent tracking-tight": {},
				},
				".subtitle-large": {
					"@apply leading-[1.6] sm:leading-[1.75] text-textStandard tracking-wider": {},
				},
				".section-title": {
					"@apply text-4xl tracking-tighter text-textProminent [line-height:initial] sm:text-9xl": {},
				},
				".subsection-title": {
					"@apply text-2xl font-extrabold text-textProminent sm:text-6xl uppercase": {},
				},
				".redact": {
					"&::after": {
						"@apply content-[''] absolute pointer-events-none left-[-8px] w-[calc(100%+16px)] bg-[#fffffe] h-[calc(100%+16px)] top-[-8px] mix-blend-color-dodge origin-left scale-x-0 duration-500 bg-[repeating-linear-gradient(transparent,_transparent_3px,_#00000054_4px)] animate-[lines_0.066666666s_linear_infinite]": {},
					},
					"&.redact-show": {
						"&::after": {
							"@apply scale-x-100": {},
						},
					},
				},
				".link": {
					"@apply redact": {},
					"&::after": {
						"@apply duration-300 h-[calc(100%+8px)] top-[-4px]": {},
					},
					"&:hover::after": {
						"@apply md:scale-x-100": {},
					},
				},
				"button": {
					"@apply redact": {},
					"&::after": {
						"@apply translate-x-[100%] w-full h-full top-0 left-0 duration-300": {},
					},
					"&:hover::after": {
						"@apply md:scale-x-100 md:translate-x-0": {},
					},
				},
				".section-tracker": {
					"@apply text-base sm:text-3xl font-bold transition-all text-textSubtle absolute sm:left-14": {},
				},
				".container": {
					"@apply mx-4 w-[calc(100%-32px)] sm:w-full": {},
				},
			});
		}),
	],
	theme: {
		extend: {
			colors: {
				accent: "hsl(var(--theme-accent) / <alpha-value>)",
				"accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
				bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
				link: "hsl(var(--theme-link) / <alpha-value>)",
				quote: "hsl(var(--theme-quote) / <alpha-value>)",
				textColor: "hsl(var(--theme-text) / <alpha-value>)",

				textProminent: "hsl(var(--text-prominent) / <alpha-value>)",
				textStandard: "hsl(var(--text-standard) / <alpha-value>)",
				textSubtle: "hsl(var(--text-subtle) / <alpha-value>)",

				borderDivider: "hsl(var(--border-divider) / <alpha-value>)",
			},
			fontFamily: {
				// Add any custom fonts here
				sans: ['JetBrains Mono Variable',...fontFamily.sans],
				mono: ['Rubik Mono One',...fontFamily.mono]
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(-8deg)' },
					'75%': { transform: 'rotate(8deg)' },
				},
				redact: {
					'0%, 100%': { background: 'repeating-linear-gradient(transparent, transparent 3px, #00000054 4px)' },
					'50%': { background: 'repeating-linear-gradient(transparent, transparent 2px, #00000054 3px)' },
				},
				lines: {
					'0%': { backgroundPosition: '0px 0px' },
					'50%': { backgroundPosition: '0px 0px' },
					'51%': { backgroundPosition: '0px 2px' },
					'100%': { backgroundPosition: '0px 2px' }
				}
			},
			transitionProperty: {
				height: "height",
			},
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// Remove above once tailwindcss exposes theme type
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							"@apply cactus-link": "",
						},
						blockquote: {
							borderLeftWidth: "0",
						},
						code: {
							border: "1px dotted #666",
							borderRadius: "2px",
						},
						hr: {
							borderTopStyle: "dashed",
						},
						strong: {
							fontWeight: "700",
						},
						sup: {
							"@apply ms-0.5": "",
							a: {
								"&:after": {
									content: "']'",
								},
								"&:before": {
									content: "'['",
								},
								"&:hover": {
									"@apply text-link no-underline bg-none": "",
								},
								"@apply bg-none": "",
							},
						},
						"tbody tr": {
							borderBottomWidth: "none",
						},
						tfoot: {
							borderTop: "1px dashed #666",
						},
						thead: {
							borderBottomWidth: "none",
						},
						"thead th": {
							borderBottom: "1px dashed #666",
							fontWeight: "700",
						},
					},
				},
				cactus: {
					css: {
						"--tw-prose-body": theme("colors.textColor / 1"),
						"--tw-prose-bold": theme("colors.textColor / 1"),
						"--tw-prose-bullets": theme("colors.textColor / 1"),
						"--tw-prose-code": theme("colors.textColor / 1"),
						"--tw-prose-headings": theme("colors.accent-2 / 1"),
						"--tw-prose-hr": "0.5px dashed #666",
						"--tw-prose-links": theme("colors.textColor / 1"),
						"--tw-prose-quotes": theme("colors.quote / 1"),
						"--tw-prose-th-borders": "#666",
					},
				},
				sm: {
					css: {
						code: {
							fontSize: theme("fontSize.sm")[0],
							fontWeight: "400",
						},
					},
				},
			}),
		},
	},
} satisfies Config;

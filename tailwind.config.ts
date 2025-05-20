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
					"@apply text-lg sm:text-xl leading-6 sm:leading-9 font-light tracking-tight text-textStandard": {},
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
						"@apply content-[''] absolute pointer-events-none left-0 w-[calc(100%+8px)] bg-[hsl(var(--redact-bg))] nk-transition h-[calc(100%+16px)] top-[-8px] mix-blend-exclusion origin-left scale-x-100 duration-500 bg-[repeating-linear-gradient(transparent,_transparent_3px,_#0000002b_4px)]": {},
					},
				},
				".link": {
					// "@apply redact bg-bgColor": {},
					"&::after": {
						"@apply duration-300 w-full h-full top-0 scale-x-0": {},
					},
					"&:hover::after": {
						"@apply md:scale-x-100": {},
					},
				},
				".link-parent": {
					"&:hover p.link::after": {
						"@apply md:scale-x-100": {},
					},
				},
				"button:not(.disabled)": {
					// "@apply redact": {},
					"&::after": {
						"@apply translate-x-[100%] w-[calc(100%+8px)] h-[calc(100%+16px)] w-full h-full top-0 left-0  scale-x-0 duration-300": {},
					},
					"&:hover::after": {
						"@apply md:scale-x-100 md:translate-x-0": {},
					},
				},
				".nk-transition": {
					"@apply [transition:all_.3s_cubic-bezier(0.55,0,1,0.45),color_0s_ease-in]": {},
				},
				".animated-border": {
					"@apply [&::after]:absolute [&::before]:z-[-1] [&::after]:z-[-1] [&::before]:absolute [&::after]:bottom-0 [&::after]:left-0 [&::after]:h-[1px] [&::after]:w-full [&::after]:animate-[borderForward_.7s_cubic-bezier(0.55,0,1,0.45)_forwards] [&::after]:bg-divider [&::after]:content-[''] [&::before]:left-0 [&::before]:top-[-1px] [&::before]:h-[1px] [&::before]:w-full [&::before]:animate-[borderForward_.7s_cubic-bezier(0.55,0,1,0.45)_forwards] [&::before]:bg-divider [&::before]:content-['']": {},
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

				textInverse: "hsl(var(--text-inverse) / <alpha-value>)",
				textProminent: "hsl(var(--text-prominent) / <alpha-value>)",
				textStandard: "hsl(var(--text-standard) / <alpha-value>)",
				textSubtle: "hsl(var(--text-subtle) / <alpha-value>)",

				divider: "hsl(var(--border-divider) / <alpha-value>)",
			},
			keyframes: {
				fadein: {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				dashForward: {
					"0%": {
						strokeDashoffset: "1000",
						stroke: "hsl(var(--border-divider) / 1)",
						color: "transparent",
						opacity: "1",
					},
					"50%": {
						strokeDashoffset: "0",
						stroke: "hsl(var(--border-divider) / 1)",
						color: "transparent",
						opacity: "1",
					},
					"80%": {
						strokeDashoffset: "0",
						stroke: "hsl(var(--border-divider) / 1)",
						color: "transparent",
						opacity: "1",
					},
					"100%": {
						strokeDashoffset: "0",
						stroke: "transparent",
						color: "hsl(var(--text-prominent) / 1)",
						opacity: "1",
					},
				},
				dashBackward: {
					"0%": {
						strokeDashoffset: "0",
						stroke: "transparent",
						color: "hsl(var(--text-prominent) / 1)",
						opacity: "1",
					},
					"20%": {
						stroke: "hsl(var(--border-divider) / 1)",
						color: "transparent",
						opacity: "1",
					},
					"100%": {
						strokeDashoffset: "1000",
						stroke: "hsl(var(--border-divider) / 1)",
						color: "transparent",
						opacity: "1",
					},
				},
				dash: {
          "0%": {
            strokeDashoffset: "1000",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "70%": {
            strokeDashoffset: "0",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "85%": {
            strokeDashoffset: "0",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "90%": {
            strokeDashoffset: "0",
            stroke: "transparent",
            color: "hsl(var(--text-standard) / 1)",
            opacity: "1",
          },
          "92.5%": {
            strokeDashoffset: "0",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "95%": {
            strokeDashoffset: "0",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "100%": {
            strokeDashoffset: "0",
            stroke: "transparent",
            color: "hsl(var(--text-prominent) / 1)",
            opacity: "1",
          },
        },
				flicker: {
					"0%": {
						color: "hsl(var(--text-prominent) / 1)",
						stroke: "transparent",
						strokeDashoffset: "0",
					},
					"100%": {
						color: "hsl(var(--text-prominent) / 0)",
						stroke: "hsl(var(--border-divider) / 1)",
						strokeDashoffset: "0",
					}
				},
				borderForward: {
					"0%": {
						width: "0px",
					},
					"100%": {
						width: "100%",
					},
				}
			},
			fontFamily: {
				// Add any custom fonts here
				sans: ['JetBrains Mono Variable',...fontFamily.sans],
				mono: ['Rubik Mono One',...fontFamily.mono]
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

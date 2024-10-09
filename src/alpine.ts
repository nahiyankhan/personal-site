import type { Alpine } from 'alpinejs'
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'
import resize from '@alpinejs/resize'

enum MODE {
  SYSTEM = "system",
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeStore {
  mode: MODE;
  appearance: MODE;
  toggleMode: () => void;
  init: () => void;
}

interface Settings {
  open: boolean;
  toggle: () => void;
}

export default (Alpine: Alpine) => {
  Alpine.plugin(persist)
  Alpine.plugin(intersect)
  Alpine.plugin(resize)
  
  Alpine.store('theme', {
    mode: Alpine.$persist(MODE.SYSTEM).as("mode") as unknown as MODE,
    appearance: MODE.LIGHT,
    toggleMode() {
      const modes = [MODE.LIGHT, MODE.DARK];
      this.mode = modes[(modes.indexOf(this.mode) + 1) % modes.length];
    },
    init() {
      Alpine.effect(() => {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        this.appearance = this.mode === MODE.SYSTEM ? (darkModeMediaQuery.matches ? MODE.DARK : MODE.LIGHT) : this.mode;
        // document.body.classList.toggle('dark', this.appearance === MODE.DARK);
        
        let themeChangeEvent = new CustomEvent("theme-change", {
          detail: {
            theme: this.appearance
          },
        });
        
        // dispatch event -> ThemeProvider.astro
        if (typeof this.appearance === "string") {
          document.dispatchEvent(themeChangeEvent);
        }
      });
    },
  } as ThemeStore);

  Alpine.store('header', {
    headerHeight: 0,
    headerNKHeight: 0,
    introNKHeight: 0,
  })

  Alpine.store('settings', {
    open: false,

    toggle() {
      this.open = !this.open
    },
  } as Settings)

  Alpine.store('container', {
    width: 0
  })
}
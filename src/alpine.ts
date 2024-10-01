import type { Alpine } from 'alpinejs'
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'

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

interface SectionTracker {
  about: number;
  projects: number;
  experiences: number,
  contact: number;
  getTransform: () => string;
  getCurrent: () => string;
}

export default (Alpine: Alpine) => {
  Alpine.plugin(persist)
  Alpine.plugin(intersect)
  
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
  
  Alpine.store('state', {
    nahiyankhan: 999,
    nahiyankhanHeight: 0,
    about: 999,
    experiences: 999,
    projects: 999,
    contact: 999,

    getTransform() {
      if (this.contact < 100) {
        return `0px`;
      } else if (this.projects < 100) {
        return `28px`;
      } else if (this.experiences < 100) {
        return `56px`;
      } else if (this.about < 100) {
        return `84px`;
      } else {
        return `112px`;
      }
    },

    getCurrent() {
      if (this.contact < 100) {
        return `contact`;
      } else if (this.projects < 100) {
        return `projects`;
      } else if (this.experiences < 100) {
        return `experiences`;
      } else if (this.about < 100) {
        return `about`;
      } else {
        return ``;
      }
    }
  } as SectionTracker);
}
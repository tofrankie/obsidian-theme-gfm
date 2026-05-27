# Contribution Guide

## Goal

Keep custom configuration to a minimum, and reproduce the full GitHub Markdown reading experience as closely as possible.

## Before You Start

It is recommended to understand the basics of Obsidian theme development first:

- [Obsidian theme guidelines](https://docs.obsidian.md/Themes/App+themes/Theme+guidelines)
- [Obsidian CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)

## Development Workflow

1. Fork this repository.

2. Clone the repository locally.

```bash
git clone https://github.com/your-username/obsidian-gfm-theme.git
```

3. Open the `vault` sample vault in this project with Obsidian. It already includes the required theme and plugins for development and debugging.
   - Plugins:
     - Theme Hot-Reload Plugin: `vault/.obsidian/plugins/obsidian-theme-hot-reload-plugin`
     - Obsidian Style Settings: `vault/.obsidian/plugins/obsidian-style-settings`
   - Theme:
     - GitHub Flavored Markdown: `vault/.obsidian/themes/GitHub Flavored Markdown`
4. Use `Cmd + Option + I` (macOS) or `Ctrl + Shift + I` (Windows/Linux) to open Obsidian DevTools, and debug CSS similarly to Chrome.

5. Edit `vault/.obsidian/themes/GitHub Flavored Markdown/theme.css` (do not edit the root-level `theme.css` directly). Changes will hot-reload automatically.

6. After development and debugging are complete, switch between light and dark modes to confirm everything works as expected in both.

7. Sync changes from `vault/.obsidian/themes/GitHub Flavored Markdown/theme.css` back to the root-level `theme.css`.

8. Submit a PR.

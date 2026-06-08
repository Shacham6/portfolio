---
title: "Dotfiles from scratch"
description: "A literate dotfiles framework that documents every shell alias, keybinding, and config option as it installs them."
thumbnail: "/projects/dotfiles/thumbnail.png"
featured: true
tags: ["bash", "linux", "hyprland", "dotfiles"]
date: 2024-11-20
---

Not your average `curl | bash` dotfiles. Every config file is generated from a literate markdown document. Running the installer replays the documentation — each section's code block is extracted and applied to the system.

### Why

I was tired of dotfiles repos where you have no idea what `some-obscure-flag=true` does. This way, the *documentation is the source of truth*.

### Stack

- **Generator** — a 200‑line Python script that parses annotated markdown
- **Output** — Hyprland, Waybar, Mako, Alacritty, Neovim, Zsh, and more
- **Validation** — each section has a `# check:` comment that runs after install

### Try it

```bash
curl -fsSL https://dotfiles.shachaf.dev | bash
# Or read the source first:
open https://github.com/shachaf/dotfiles
```

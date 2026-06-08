---
title: "Kobold — a tiny game engine in Rust"
description: "A minimal ECS-based 2D game engine built from scratch in Rust. Designed for learning, not production."
thumbnail: "/projects/kobold/thumbnail.png"
gallery:
  - "/projects/kobold/screenshot-1.png"
  - "/projects/kobold/screenshot-2.png"
video: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
featured: true
tags: ["rust", "gamedev", "ecs"]
date: 2025-06-01
---

Kobold started as a weekend project to understand game engine architecture. What began as a simple sprite renderer spiralled into a fully‑fledged ECS with:

- **Entity‑Component‑System** — archetype‑based storage, no reflection
- **2D renderer** — wgpu backend with batching, instancing, and sprite atlases
- **Scene graph** — transform hierarchy with spatial queries
- **Audio** — basic wav/ogg playback via cpal + symphonia

### Lessons

Writing an engine from scratch taught me more about gamedev than any tutorial. The biggest insight: *engines are just opinionated collections of half‑baked libraries glued together with a lot of taste.*

### Code

Source on [GitHub](https://github.com/shachaf/kobold).

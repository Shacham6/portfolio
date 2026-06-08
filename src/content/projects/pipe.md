---
title: "Pipe — a self‑hosted data pipeline"
description: "Drag‑and‑drop ETL built with React Flow and Go. Runs entirely on a Raspberry Pi."
thumbnail: "/projects/pipe/thumbnail.png"
gallery:
  - "/projects/pipe/dashboard.png"
  - "/projects/pipe/editor.png"
featured: false
tags: ["react", "go", "etl", "self-host"]
date: 2025-03-15
---

Pipe is a visual data pipeline builder for people who don't want yet another SaaS bill. Nodes represent data sources, transforms, and sinks. Connect them visually, deploy to the built‑in runner.

### Features

- **30+ built‑in nodes** — HTTP, SQL, S3, CSV, Slack, email
- **Live preview** — see row output at every stage
- **Scheduling** — cron, webhook, or manual triggers
- **No code required** — but you can inject JS/Go snippets for custom transforms

### Architecture

Frontend is a SPA (React + Flow). Backend is a single Go binary. Data moves through a channel‑based pipeline — pull model with backpressure. Runs on a Pi 4 with 2 GB RAM.

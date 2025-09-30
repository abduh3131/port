export const projects = [
  {
    id: 'cipherboard',
    title: 'CipherBoard Control Center',
    tagline: 'Real-time operations dashboard for red and blue team collaboration.',
    description:
      'A secure, modular control panel that visualises live incidents, automates intel handoffs, and keeps response teams in sync without leaving the browser.',
    highlights: [
      'Streamed MITRE ATT&CK heatmaps with drill-down overlays for each compromised host.',
      'Role-aware work queue that escalates tasks with signed webhooks and chat bridge integrations.',
      'Nightly replay mode that renders incident timelines for post-mortem reviews.',
    ],
    technologies: ['React', 'Vite', 'Tailwind', 'Socket.IO', 'Radix UI'],
    repo: 'https://github.com/your-username/cipherboard',
    live: 'https://cipherboard.example.com',
    images: [
      { src: '/projects/cipherboard-primary.svg', alt: 'CipherBoard overview screen' },
      { src: '/projects/cipherboard-secondary.svg', alt: 'CipherBoard incident drill-down view' },
    ],
  },
  {
    id: 'tracelab',
    title: 'TraceLab Sandbox',
    tagline: 'Browser-based forensic playground for packet captures and log streams.',
    description:
      'TraceLab lets analysts upload pcap files, stream log data, and collaborate in real-time using a shared annotation layer and reusable playbooks.',
    highlights: [
      'WebAssembly parser slices multi-gig captures into queryable chunks without blocking the UI.',
      'Timeline engine correlates packets, logs, and analyst notes into a unified storyline.',
      'Command palette exposes scripted workflows so new analysts can replay expert moves.',
    ],
    technologies: ['React', 'WebAssembly', 'Zustand', 'Framer Motion', 'Tauri'],
    repo: 'https://github.com/your-username/tracelab',
    images: [
      { src: '/projects/tracelab-primary.svg', alt: 'TraceLab packet visualiser' },
      { src: '/projects/tracelab-secondary.svg', alt: 'TraceLab collaborative annotations' },
    ],
  },
  {
    id: 'ghostshell',
    title: 'Ghostshell CLI Suite',
    tagline: 'Cross-platform terminal toolkit for security research teams.',
    description:
      'A curated set of terminal-first utilities that bring live recon, asset inventories, and encrypted notes into a cohesive UI with zero friction.',
    highlights: [
      'Plugin API lets teammates publish custom scanners that hot-load without restarts.',
      'Encrypted sync keeps sensitive config in lockstep across devices using age + WebRTC.',
      'TUI layer renders charts, logs, and prompts in 60fps with GPU-accelerated canvas.',
    ],
    technologies: ['React', 'Rust', 'gRPC', 'Vite', 'xterm.js'],
    repo: 'https://github.com/your-username/ghostshell',
    live: 'https://ghostshell.example.com',
    images: [
      { src: '/projects/ghostshell-primary.svg', alt: 'Ghostshell command console' },
      { src: '/projects/ghostshell-secondary.svg', alt: 'Ghostshell plugin marketplace' },
    ],
  },
  {
    id: 'signalwatch',
    title: 'SignalWatch Monitor',
    tagline: 'Predictive infrastructure observability for privacy-focused products.',
    description:
      'SignalWatch fuses metrics, traces, and threat intel into a single stream so teams can react before customer experience degrades.',
    highlights: [
      'Adaptive anomaly detection surfaces threat activity directly inside service topology views.',
      'Synthetic monitors replay auth flows with masked credentials to catch regression bugs.',
      'Escalation matrix posts incident cards to Slack, Matrix, and Signal simultaneously.',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Apollo', 'Cypress'],
    repo: 'https://github.com/your-username/signalwatch',
    images: [
      { src: '/projects/signalwatch-primary.svg', alt: 'SignalWatch service health board' },
      { src: '/projects/signalwatch-secondary.svg', alt: 'SignalWatch anomaly insights view' },
    ],
  },
]

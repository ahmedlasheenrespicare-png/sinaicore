/** Line icons in the reference's soft-stroke style. */
const A = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true } as const
  switch (name) {
    case 'mountain':
      return (
        <svg {...p} {...A}>
          <path d="M3 19l6.5-11 4 6 2.5-4L21 19H3z" />
        </svg>
      )
    case 'lab':
      return (
        <svg {...p} {...A}>
          <path d="M10 3h4M11 3v6l-4.5 8A2 2 0 008.3 20h7.4a2 2 0 001.8-3L13 9V3M8 14h8" />
        </svg>
      )
    case 'truck':
      return (
        <svg {...p} {...A}>
          <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7zM6 19a1.6 1.6 0 100-3.2A1.6 1.6 0 006 19zM17 19a1.6 1.6 0 100-3.2A1.6 1.6 0 0017 19z" />
        </svg>
      )
    case 'crystal':
      return (
        <svg {...p} {...A}>
          <path d="M12 3l3 5-3 3-3-3 3-5zM6 11l3 4-3 6-3-6 3-4zM18 11l3 4-3 6-3-6 3-4z" />
        </svg>
      )
    case 'flask':
      return (
        <svg {...p} {...A}>
          <path d="M9 3h6M10 3v5l-4 9a2 2 0 001.8 3h8.4A2 2 0 0018 17l-4-9V3" />
          <path d="M7.5 14h9" />
        </svg>
      )
    case 'sieve':
      return (
        <svg {...p} {...A}>
          <path d="M4 6h16l-2 12H6L4 6z" />
          <path d="M8 10h8M9 14h6M11 6v12M15 6v12" />
        </svg>
      )
    case 'drop':
      return (
        <svg {...p} {...A}>
          <path d="M12 3c3 4 5 6.4 5 9a5 5 0 01-10 0c0-2.6 2-5 5-9z" />
        </svg>
      )
    case 'trace':
      return (
        <svg {...p} {...A}>
          <path d="M4 6h6v6H4zM14 12h6v6h-6z" />
          <path d="M10 9h2.5a1.5 1.5 0 011.5 1.5V12" />
        </svg>
      )
    case 'bag':
      return (
        <svg {...p} {...A}>
          <path d="M7 8l-1 12h12L17 8H7zM9 8V6a3 3 0 016 0v2" />
        </svg>
      )
    case 'jumbo':
      return (
        <svg {...p} {...A}>
          <path d="M6 9h12v10H6zM8 9V5h8v4M9 19v2M15 19v2" />
        </svg>
      )
    case 'ship':
      return (
        <svg {...p} {...A}>
          <path d="M3 15l2 -1 7 3 7-3 2 1-3 5H6l-3-5zM6 14V8h12v6M10 8V5h4v3" />
        </svg>
      )
    case 'box':
      return (
        <svg {...p} {...A}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9" />
        </svg>
      )
    case 'check':
      return (
        <svg width={16} height={16} viewBox="0 0 24 24" {...A} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
      )
    case 'arrow':
      return (
        <svg width={16} height={16} viewBox="0 0 24 24" {...A} aria-hidden>
          <path d="M5 12h13M13 7l5 5-5 5" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...p} {...A}>
          <path d="M3 6h18v12H3zM3 7l9 6 9-6" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...p} {...A}>
          <path d="M5 3h4l2 5-2.5 1.5a11 11 0 005 5L15 12l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
      )
    case 'doc':
      return (
        <svg {...p} {...A}>
          <path d="M6 3h8l4 4v14H6zM14 3v4h4" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...p} {...A}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.4 3 14.6 0 18M12 3c-3 3.4-3 14.6 0 18" />
        </svg>
      )
    default:
      return null
  }
}

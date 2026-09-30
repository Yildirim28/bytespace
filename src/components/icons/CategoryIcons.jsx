/* Simple line icons rendered inside the lime circles of the category cards. */
const common = {
  fill: 'none',
  stroke: '#242528',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function CategoryIcon({ name, className = 'h-9 w-9' }) {
  switch (name) {
    case 'design':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="m6.5 17.5 10.2-10.2a2.3 2.3 0 0 0-3.2-3.2L3.3 14.3a2.3 2.3 0 0 0 2.4 3.9" />
          <path d="M14.5 12.5 19 17a2 2 0 1 1-2.8 2.8l-4.7-4.6" />
          <path d="M8 18.5 5 21" />
        </svg>
      )
    case 'development':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="4" y="3.5" width="16" height="17" rx="3" />
          <path d="m10 9.5-2 2.5 2 2.5M14 9.5l2 2.5-2 2.5" />
        </svg>
      )
    case 'software':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="3.5" y="5" width="17" height="11" rx="2.2" />
          <path d="M2.5 19.5h19" />
        </svg>
      )
    case 'business':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="5" y="3.5" width="14" height="17" rx="2.2" />
          <path d="M9 8h1.5M13.5 8H15M9 12h1.5M13.5 12H15M9 16h1.5M13.5 16H15" />
        </svg>
      )
    case 'marketing':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M4 10.5v3a2 2 0 0 0 2 2h1.5L18.5 20V4L7.5 8.5H6a2 2 0 0 0-2 2Z" />
          <path d="M18.5 8.5a4 4 0 0 1 0 7" />
        </svg>
      )
    case 'photography':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="3.5" y="7.5" width="17" height="12" rx="2.4" />
          <circle cx="12" cy="13.5" r="3.2" />
          <path d="M8.5 7.5 10 5h4l1.5 2.5" />
        </svg>
      )
    default:
      return null
  }
}

/* Small monochrome marks used in the partner "Logoipsum" strip. */
export function PartnerIcon({ name, className = 'h-8 w-8' }) {
  switch (name) {
    case 'waves':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 8.5c3-4 6-4 9 0" />
          <path d="M6 12.5c3-4 6-4 9 0" />
          <path d="M6 16.5c3-4 6-4 9 0" />
        </svg>
      )
    case 'burst':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <circle cx="12" cy="12" r="3.2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect key={deg} x="11.1" y="1.6" width="1.8" height="5" rx="0.9" transform={`rotate(${deg} 12 12)`} />
          ))}
        </svg>
      )
    case 'bolt':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M13.4 4.5 7 13h4l-1.6 6.5L17 11h-4l.4-6.5Z" fill="#fff" />
        </svg>
      )
    case 'clover':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <circle cx="8.4" cy="8.4" r="4" />
          <circle cx="15.6" cy="8.4" r="4" />
          <circle cx="8.4" cy="15.6" r="4" />
          <circle cx="15.6" cy="15.6" r="4" />
        </svg>
      )
    case 'spiral':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5A6.5 6.5 0 0 0 14 5.5a4.6 4.6 0 0 0-4.6 4.6A3 3 0 0 0 12.4 13a1.7 1.7 0 0 0 1.7-1.7" />
        </svg>
      )
    default:
      return null
  }
}

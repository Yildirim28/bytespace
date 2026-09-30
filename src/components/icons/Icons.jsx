import { Link } from 'react-router-dom'

export function SearchIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20.5 20.5-4-4" />
    </svg>
  )
}

export function CartIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 7h15l-1.5 9.5a2 2 0 0 1-2 1.7H8.4a2 2 0 0 1-2-1.7L5 7Z" />
      <path d="M8.2 7V6a3.8 3.8 0 0 1 7.6 0v1" />
      <path d="M9.5 11.5v3M12 11.5v3M14.5 11.5v3" />
    </svg>
  )
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.6l2.7 5.9 6.4.7-4.8 4.3 1.3 6.3L12 16.7 6.4 19.8l1.3-6.3L2.9 9.2l6.4-.7L12 2.6Z" />
    </svg>
  )
}

export function BarsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="4" y="13" width="2.6" height="7" rx="1.3" />
      <rect x="10.2" y="9" width="2.6" height="11" rx="1.3" />
      <rect x="16.4" y="5" width="2.6" height="15" rx="1.3" />
    </svg>
  )
}

export function PlayMark({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="14" fill="#D4FB20" />
      <path d="M19 14.5 34 24 19 33.5V14.5Z" fill="#003BE2" />
    </svg>
  )
}

export function CheckCircleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="m7.9 12.3 2.7 2.7 5.5-5.6"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.55-5.17 3.55-8.87Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.88-3.01c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56v-3.1H1.26a12 12 0 0 0 0 10.76l4.01-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.62l4.01 3.1C6.22 6.87 8.87 4.75 12 4.75Z"
      />
    </svg>
  )
}

export function AppleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="#000000" aria-hidden="true" {...props}>
      <path d="M16.36 12.72c-.02-2.02 1.65-2.99 1.72-3.04-.94-1.37-2.4-1.56-2.92-1.58-1.24-.13-2.42.73-3.05.73-.63 0-1.6-.71-2.63-.69-1.35.02-2.6.78-3.29 1.99-1.41 2.44-.36 6.05 1.01 8.03.67.97 1.47 2.06 2.52 2.02 1.01-.04 1.39-.65 2.61-.65 1.22 0 1.56.65 2.63.63 1.09-.02 1.78-.99 2.44-1.96.77-1.12 1.09-2.21 1.1-2.27-.02-.01-2.11-.81-2.14-3.21ZM14.3 6.62c.56-.68.94-1.62.83-2.56-.81.03-1.79.54-2.37 1.21-.52.6-.97 1.56-.85 2.48.9.07 1.83-.46 2.39-1.13Z" />
    </svg>
  )
}

export function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <PlayMark className="h-8 w-8 shrink-0" />
      <span
        className={`font-logo text-2xl font-bold leading-[30px] tracking-tight ${
          light ? 'text-shuttle-50' : 'text-ink'
        }`}
      >
        ByteSpace
      </span>
    </Link>
  )
}

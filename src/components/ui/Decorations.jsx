/*
 * Hand-drawn style decorative shapes used across the blue hero / CTA panels
 * and next to the marketing imagery. All are pure SVG so they scale cleanly.
 */

export function LimeBrush({ className = '' }) {
  return (
    <svg viewBox="0 0 220 260" className={className} fill="none" aria-hidden="true">
      <path
        d="M60 24c26 8 34 44 16 74s-52 44-42 82 56 44 88 26"
        stroke="#D4FB20"
        strokeWidth="36"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M96 40c20 16 12 52-8 76"
        stroke="#D4FB20"
        strokeWidth="26"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LimeRing({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="66" stroke="#D4FB20" strokeWidth="42" />
    </svg>
  )
}

export function LimeBlob({ className = '' }) {
  return (
    <svg viewBox="0 0 260 240" className={className} aria-hidden="true">
      <path
        d="M18 118C6 58 62 8 132 10c78 2 128 46 122 104-6 60-70 118-142 116C40 228 30 178 18 118Z"
        fill="#D4FB20"
      />
    </svg>
  )
}

export function LimeSquiggle({ className = '' }) {
  return (
    <svg viewBox="0 0 140 160" className={className} fill="none" aria-hidden="true">
      <path
        d="M34 22c22-14 34 14 16 26s-30 34-6 44 44 4 30 24-46 18-58 34"
        stroke="#D4FB20"
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WhiteZigZag({ className = '' }) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" aria-hidden="true">
      <path
        d="M28 120 62 44l22 74 26-74 20 74"
        stroke="#FFFFFF"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WhiteRing({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="60" stroke="#FFFFFF" strokeWidth="36" />
    </svg>
  )
}

export function WhiteTriangle({ className = '' }) {
  return (
    <svg viewBox="0 0 200 180" className={className} aria-hidden="true">
      <path d="M100 14 190 166H10L100 14Z" fill="#FFFFFF" />
    </svg>
  )
}

export function WhiteBlob({ className = '' }) {
  return (
    <svg viewBox="0 0 240 240" className={className} aria-hidden="true">
      <path
        d="M196 54c-20-34-78-46-118-30C36 42 8 84 20 130c8 32 44 74 96 92 40 14 84 2 102-30 18-32 8-100-22-138Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

import { SearchIcon, StarIcon, BarsIcon } from '../icons/Icons.jsx'

/* Rounded white search field + lime button used in the hero and footer. */
export function SearchBar({ placeholder = 'Course, topic, creator', className = '', size = 'lg' }) {
  const isLg = size === 'lg'
  const field = isLg ? 'h-[52px] pl-14 pr-6 text-lg' : 'h-[52px] pl-12 pr-4 text-base'
  const button = isLg ? 'h-[46px] px-6 text-lg' : 'h-[46px] px-6 text-base'
  const icon = isLg ? 'h-6 w-6 left-6' : 'h-5 w-5 left-4'
  const fieldBorder = isLg ? 'border-transparent' : 'border-shuttle-200'

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`flex w-full items-center gap-4 ${className}`}
    >
      <div className="relative flex-1">
        <SearchIcon className={`absolute top-1/2 -translate-y-1/2 text-muted ${icon}`} />
        <input
          type="search"
          placeholder={placeholder}
          aria-label={placeholder}
          className={`w-full rounded-full border bg-white text-ink placeholder:text-muted shadow-pill focus:outline-none focus:ring-2 focus:ring-brand-lime/70 ${fieldBorder} ${field}`}
        />
      </div>
      <button
        type="submit"
        className={`shrink-0 rounded-full bg-brand-lime font-medium text-ink transition hover:brightness-95 active:scale-[0.98] ${button}`}
      >
        Search
      </button>
    </form>
  )
}

/* Small translucent chip laid over the course thumbnails. */
export function MetaPill({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full bg-[rgba(246,246,246,0.6)] px-3 py-1.5 text-xs font-medium leading-[1.2] text-[#4F4F4F] backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  )
}

export function Rating({ value, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 text-lg leading-[1.6] text-[#4F4F4F] ${className}`}>
      {value}
      <StarIcon className="h-6 w-6 text-shuttle-200" />
    </span>
  )
}

export function LevelBadge({ label = 'Beginner' }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-chip px-3 py-1.5 text-xs font-medium leading-[1.2] text-shuttle-700">
      <BarsIcon className="h-5 w-5 text-shuttle-700" />
      {label}
    </span>
  )
}

/* Overlapping avatar row with a lime "+N" counter. */
export function AvatarStack({
  avatars = [],
  extra = '26+',
  size = 'h-8 w-8',
  overlap = '-space-x-2.5',
  badgeClassName = 'bg-brand-lime text-ink',
}) {
  return (
    <span className={`flex items-center ${overlap}`}>
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className={`${size} rounded-full border-2 border-white object-cover`}
        />
      ))}
      <span
        className={`grid place-items-center rounded-full border-2 border-white text-[11px] font-bold leading-none ${size} ${badgeClassName}`}
      >
        {extra}
      </span>
    </span>
  )
}

/* Horizontal rule with a centred label, used above the social sign-in buttons. */
export function OrDivider({ label = 'or' }) {
  return (
    <div className="flex w-full items-center gap-3">
      <span className="h-px flex-1 bg-[#D1D1D1]" />
      <span className="text-lg leading-[1.6] text-[#888888]">{label}</span>
      <span className="h-px flex-1 bg-[#D1D1D1]" />
    </div>
  )
}

/* Section heading + supporting copy block reused by several sections. */
export function SectionHeading({ title, description, align = 'center', size = 'md', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'
  const heading =
    size === 'lg'
      ? 'text-[34px] sm:text-[40px] lg:text-[44px]'
      : 'text-[30px] sm:text-[33px] lg:text-[36px]'

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      <h2 className={`font-semibold leading-[1.2] tracking-[-0.01em] text-vulcan ${heading}`}>
        {title}
      </h2>
      {description && (
        <p className="max-w-[917px] text-lg leading-[1.6] text-muted">{description}</p>
      )}
    </div>
  )
}

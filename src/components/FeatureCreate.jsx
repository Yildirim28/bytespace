import { CheckCircleIcon } from './icons/Icons.jsx'
import { LimeSquiggle } from './ui/Decorations.jsx'

const CREATE_PERKS = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

function RevenueCard({ label, sub, amount, className = '', showBadge = false }) {
  return (
    <div className={`rounded-2xl bg-brand-blue p-5 text-white shadow-float ${className}`}>
      <p className="text-xs text-white/75">{label}</p>
      <p className="text-[11px] text-white/60">{sub}</p>
      <p className="mt-1 text-2xl font-bold">{amount}</p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/25">
        <div className="h-full w-[72%] rounded-full bg-brand-lime" />
      </div>
      {showBadge && (
        <span className="mt-3 inline-flex rounded-3xl bg-brand-lime-500 px-2 py-0.5 text-[10px] font-medium leading-5 text-ink">
          +12$
        </span>
      )}
    </div>
  )
}

export default function FeatureCreate() {
  return (
    <section className="pb-24">
      <div className="mx-auto grid max-w-shell items-center gap-16 px-6 lg:grid-cols-2">
        {/* layered imagery */}
        <div className="relative order-2 h-[460px] sm:h-[540px] lg:order-1">
          <div className="absolute bottom-0 left-0 h-[88%] w-[62%] overflow-hidden rounded-[2rem] shadow-float">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
              alt="Creator teaching on ByteSpace"
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <RevenueCard
            label="Total Revenue"
            sub="July 1-28"
            amount="$120.29"
            className="absolute left-0 top-4 z-20 w-56"
          />
          <RevenueCard
            label="Year to Date"
            sub="2023"
            amount="$1,200.38"
            showBadge
            className="absolute bottom-6 left-[8%] z-20 w-52"
          />

          <LimeSquiggle className="absolute bottom-[34%] right-[16%] h-28 w-28" />
        </div>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <h2 className="max-w-[391px] text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[44px]">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-7 max-w-[574px] text-lg font-bold leading-[28px] text-ink">
            ByteSpace supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>

          <ul className="mt-10 flex flex-col gap-4">
            {CREATE_PERKS.map((perk) => (
              <li key={perk} className="flex items-center gap-2">
                <CheckCircleIcon className="h-6 w-6 shrink-0 text-brand-blue" />
                <span className="text-lg font-medium leading-[22px] text-ink">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

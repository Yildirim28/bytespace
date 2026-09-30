import Navbar from './Navbar.jsx'
import { SearchBar, AvatarStack } from './ui/Bits.jsx'
import { StarIcon } from './icons/Icons.jsx'
import {
  LimeBrush,
  LimeRing,
  LimeBlob,
  WhiteZigZag,
  WhiteRing,
  WhiteTriangle,
} from './ui/Decorations.jsx'

const HERO_PORTRAIT =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&q=80'

const HAPPY_AVATARS = [
  'https://i.pravatar.cc/80?img=5',
  'https://i.pravatar.cc/80?img=8',
  'https://i.pravatar.cc/80?img=11',
  'https://i.pravatar.cc/80?img=15',
  'https://i.pravatar.cc/80?img=20',
  'https://i.pravatar.cc/80?img=32',
]

function FloatingCard({ className = '', children }) {
  return (
    <div
      className={`pointer-events-none absolute z-20 flex flex-col gap-2 rounded-2xl bg-white p-4 text-left shadow-float ${className}`}
    >
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-blue text-white">
      <div className="absolute inset-0 bg-grid opacity-90" aria-hidden="true" />

      {/* decorative brush strokes, rings and squiggles */}
      <LimeBrush className="absolute -left-12 top-24 h-72 w-60" />
      <WhiteZigZag className="absolute left-[17%] top-[47%] hidden h-24 w-24 lg:block" />
      <WhiteRing className="absolute -left-20 bottom-0 h-64 w-64 opacity-95" />
      <LimeBlob className="absolute -right-28 top-10 h-80 w-80" />
      <WhiteTriangle className="absolute right-[14%] top-[54%] hidden h-44 w-48 lg:block" />
      <WhiteZigZag className="absolute -right-2 bottom-4 h-56 w-56" />
      <LimeRing className="absolute -right-16 bottom-[26%] hidden h-40 w-40 xl:block" />

      <div className="relative z-20">
        <Navbar />

        <div className="mx-auto max-w-shell px-6 pt-10 text-center">
          <h1 className="mx-auto max-w-[935px] text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[56px] lg:text-[72px]">
            Get Access to Hundreds
            <br className="hidden sm:block" /> Courses Available
          </h1>
          <p className="mx-auto mt-8 max-w-[819px] text-lg leading-[1.6] text-shuttle-100">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
          <SearchBar className="mx-auto mt-[60px] max-w-[581px]" />
        </div>

        {/* hero illustration + floating stat cards */}
        <div className="relative mx-auto mt-6 h-[380px] max-w-shell px-6 sm:h-[440px] lg:h-[520px]">
          <div className="absolute bottom-0 left-1/2 h-[330px] w-[330px] -translate-x-1/2 rounded-full bg-brand-lime sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <img
                src={HERO_PORTRAIT}
                alt="Student learning with ByteSpace"
                className="h-full w-full scale-105 object-cover object-top"
              />
            </div>
          </div>

          <FloatingCard className="left-[6%] top-[40%] hidden w-52 md:block lg:left-[10%] lg:top-[38%]">
            <p className="text-base font-medium leading-none text-ink">UI/UX Design</p>
            <p className="text-xs leading-[1.6] text-muted">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
          </FloatingCard>

          <FloatingCard className="right-[6%] top-[44%] hidden w-[232px] md:block lg:right-[9%] lg:top-[42%]">
            <p className="text-sm font-medium leading-none text-ink">Learning Progress</p>
            <p className="mt-1 text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">55%</p>
            <div className="h-2 w-full overflow-hidden rounded-3xl bg-[#F6F6F6]">
              <div className="h-full w-[56%] rounded-3xl bg-brand-lime" />
            </div>
          </FloatingCard>

          <FloatingCard className="bottom-[6%] left-[10%] hidden w-[258px] md:block lg:left-[15%]">
            <p className="text-base font-medium leading-none text-ink">Happy Students</p>
            <p className="flex items-center gap-1 text-xs leading-[1.6] text-ink">
              4.5 (240)
              <StarIcon className="h-4 w-4 text-brand-lime" />
            </p>
            <AvatarStack
              avatars={HAPPY_AVATARS}
              extra="2K+"
              size="h-[43px] w-[43px]"
              overlap="-space-x-4"
            />
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}

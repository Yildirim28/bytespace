import { stats } from '../data/navigation.js'
import { LevelBadge, AvatarStack, MetaPill } from './ui/Bits.jsx'
import { LimeSquiggle } from './ui/Decorations.jsx'

const MINI_AVATARS = [
  'https://i.pravatar.cc/80?img=12',
  'https://i.pravatar.cc/80?img=25',
  'https://i.pravatar.cc/80?img=45',
]

export default function FeatureGrowth() {
  return (
    <section id="creators" className="py-24">
      <div className="mx-auto grid max-w-shell items-center gap-16 px-6 lg:grid-cols-2">
        {/* copy + stats */}
        <div>
          <h2 className="max-w-[577px] text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[44px]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-8 max-w-[477px] text-lg leading-[1.6] text-shuttle-700">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely, we have the resources you
            need.
          </p>

          <dl className="mt-12 flex flex-wrap gap-x-14 gap-y-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl font-medium leading-[44px] tracking-[-0.01em] text-brand-blue">
                  {stat.value}
                </dt>
                <dd className="text-lg leading-[1.6] text-shuttle-700">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* layered imagery */}
        <div className="relative h-[420px] sm:h-[500px]">
          <div className="absolute bottom-0 right-0 h-[80%] w-[62%] overflow-hidden rounded-[2rem] shadow-float">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Learner on ByteSpace"
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <LimeSquiggle className="absolute right-[2%] top-0 h-24 w-24" />

          <div className="absolute bottom-[10%] left-0 z-20 w-[62%] rounded-3xl bg-white p-3 shadow-card">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
                alt="Learn Figma from Basic"
                loading="lazy"
                className="h-36 w-full object-cover"
              />
              <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
                <MetaPill>17 Lessons</MetaPill>
                <MetaPill>2 hours 16 mins</MetaPill>
              </div>
            </div>
            <div className="px-2 pb-1 pt-3">
              <p className="font-display text-xl leading-[1.4] tracking-[-0.01em] text-black">
                Learn Figma from Basic
              </p>
              <p className="mt-0.5 text-xs leading-[1.6] text-[#4F4F4F]">
                by <span className="font-medium">purepearl studio</span>
              </p>
              <div className="mt-3 flex items-center justify-between">
                <LevelBadge />
                <AvatarStack avatars={MINI_AVATARS} extra="26+" size="h-7 w-7" />
              </div>
              <p className="mt-3 flex items-end font-display text-xl font-semibold leading-[1.4] tracking-[-0.01em] text-brand-blue">
                $25
                <span className="pl-1 font-sans text-xs font-normal leading-[1.6] text-[#4F4F4F]">
                  /lifetime
                </span>
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-[26%] z-30 flex w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 shadow-float">
            <p className="text-base font-medium leading-none text-ink">Learning Progress</p>
            <p className="text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink">55%</p>
            <div className="h-2 w-full overflow-hidden rounded-3xl bg-[#F6F6F6]">
              <div className="h-full w-[56%] rounded-3xl bg-brand-lime" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

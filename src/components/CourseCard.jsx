import { MetaPill, Rating, LevelBadge, AvatarStack } from './ui/Bits.jsx'

const CARD_AVATARS = [
  'https://i.pravatar.cc/80?img=12',
  'https://i.pravatar.cc/80?img=25',
  'https://i.pravatar.cc/80?img=45',
  'https://i.pravatar.cc/80?img=60',
]

export default function CourseCard({ course }) {
  return (
    <article className="flex flex-col rounded-3xl border border-shuttle-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-[195px] w-full object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-3">
          <MetaPill>{course.lessons} Lessons</MetaPill>
          <MetaPill>{course.duration}</MetaPill>
          <MetaPill>{course.comments} Comments</MetaPill>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl leading-[1.4] tracking-[-0.01em] text-black">{course.title}</h3>
          <Rating value={course.rating} className="shrink-0" />
        </div>
        <p className="mt-1 text-xs leading-[1.6] text-[#4F4F4F]">
          by <span className="font-medium">{course.author}</span>
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <LevelBadge />
          <AvatarStack avatars={CARD_AVATARS} extra={course.students} size="h-8 w-8" />
        </div>

        <p className="mt-4 flex items-end font-display text-xl font-semibold leading-[1.4] tracking-[-0.01em] text-brand-blue">
          ${course.price}
          <span className="pl-1 font-sans text-xs font-normal leading-[1.6] text-[#4F4F4F]">
            /lifetime
          </span>
        </p>
      </div>
    </article>
  )
}

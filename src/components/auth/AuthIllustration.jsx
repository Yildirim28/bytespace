import { courses } from '../../data/courses.js'
import CourseCard from '../CourseCard.jsx'
import { AvatarStack } from '../ui/Bits.jsx'
import { StarIcon } from '../icons/Icons.jsx'

const HAPPY_AVATARS = [
  'https://i.pravatar.cc/80?img=5',
  'https://i.pravatar.cc/80?img=8',
  'https://i.pravatar.cc/80?img=11',
  'https://i.pravatar.cc/80?img=15',
  'https://i.pravatar.cc/80?img=20',
  'https://i.pravatar.cc/80?img=32',
]

/* Lime "Happy Students" stat card that overlaps the fanned-out course cards. */
function HappyStudentsCard({ className = '' }) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl bg-brand-lime p-4 ${className}`}>
      <p className="text-base font-medium leading-none text-ink">Happy Students</p>
      <p className="flex items-center gap-1 text-[10px] font-bold leading-[1.5] text-ink">
        4.5 (240)
        <StarIcon className="h-4 w-4 text-brand-blue" />
      </p>
      <AvatarStack
        avatars={HAPPY_AVATARS}
        extra="2K+"
        size="h-[43px] w-[43px]"
        overlap="-space-x-4"
        badgeClassName="bg-ink text-shuttle-50"
      />
    </div>
  )
}

/*
 * Decorative fanned-out course cards shown on the marketing side of the
 * Login / Register pages. Reuses the shared CourseCard component.
 */
export default function AuthIllustration({ className = '' }) {
  const front = courses.find((course) => course.title === 'Build Digital Asset') ?? courses[1]
  const back = courses.find((course) => course.title === 'the Power of Big Data') ?? courses[2]

  return (
    <div
      className={`relative hidden h-[585px] w-[548px] lg:block ${className}`}
      aria-hidden="true"
    >
      <div className="absolute left-[136px] top-0 w-[373px]">
        <CourseCard course={back} />
      </div>
      <div className="absolute left-[25px] top-[89px] z-10 w-[373px]">
        <CourseCard course={front} />
      </div>
      <HappyStudentsCard className="absolute left-[251px] top-[435px] z-20 w-[258px]" />
    </div>
  )
}
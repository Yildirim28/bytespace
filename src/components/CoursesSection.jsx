import { courses } from '../data/courses.js'
import { filters } from '../data/categories.js'
import CourseCard from './CourseCard.jsx'
import { SectionHeading } from './ui/Bits.jsx'
import { useState } from 'react'

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState('Featured')

  return (
    <section id="courses" className="relative bg-white py-24">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeading
          size="lg"
          title={
            <>
              Discover Your Passion,
              <br /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {filters.map((filter) => {
            const isActive = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-3xl px-4 py-3 text-base font-medium leading-[1.2] transition ${
                  isActive
                    ? 'bg-brand-lime text-ink'
                    : 'bg-chip text-shuttle-700 hover:bg-shuttle-200/60 hover:text-ink'
                }`}
              >
                {filter}
              </button>
            )
          })}
          <button
            type="button"
            className="rounded-3xl px-4 py-3 text-base font-medium leading-[1.2] text-brand-blue transition hover:underline"
          >
            + More
          </button>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { categories } from '../data/categories.js'
import { CategoryIcon } from './icons/CategoryIcons.jsx'
import { SectionHeading } from './ui/Bits.jsx'

export default function CategoriesSection() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-shell px-6">
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`#${category.name.toLowerCase().replace(/[^a-z]+/g, '-')}`}
              className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-200 bg-white p-4 text-center transition hover:-translate-y-1 hover:shadow-card lg:h-[167px]"
            >
              <span className="grid h-[60px] w-[60px] place-items-center rounded-[40px] bg-brand-lime transition group-hover:scale-105">
                <CategoryIcon name={category.icon} className="h-9 w-9" />
              </span>
              <span className="text-xl font-medium leading-[1.2] text-ink">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

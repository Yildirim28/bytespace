import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="bg-soft-gradient py-24">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <h2 className="max-w-[577px] text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] text-black sm:text-[40px] lg:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-lg leading-[1.6] text-[#4F4F4F]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((item) => (
            <figure key={item.id} className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-card">
              <img
                src={item.avatar}
                alt={item.name}
                loading="lazy"
                className="h-20 w-20 rounded-full object-cover"
              />
              <figcaption>
                <p className="font-display text-xl leading-[28px] tracking-[-0.01em] text-black">
                  {item.name}
                </p>
                <p className="text-lg leading-[1.6] text-brand-blue">{item.role}</p>
              </figcaption>
              <blockquote className="text-lg leading-[1.6] text-[#4F4F4F]">{item.quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

import {
  LimeBrush,
  LimeBlob,
  LimeRing,
  WhiteTriangle,
  WhiteRing,
  WhiteZigZag,
  WhiteBlob,
} from './ui/Decorations.jsx'

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-24 text-center text-white">
      <div className="absolute inset-0 bg-grid opacity-90" aria-hidden="true" />

      <LimeBrush className="absolute -left-16 -top-10 h-64 w-56 opacity-90" />
      <WhiteZigZag className="absolute left-[13%] top-8 hidden h-24 w-24 lg:block" />
      <LimeRing className="absolute -bottom-20 left-[6%] h-64 w-64" />
      <WhiteBlob className="absolute -left-24 top-[42%] hidden h-56 w-56 xl:block" />
      <WhiteTriangle className="absolute left-[6%] bottom-10 hidden h-40 w-44 lg:block" />
      <LimeBlob className="absolute -right-20 -top-10 h-64 w-64" />
      <WhiteRing className="absolute -right-16 top-1/3 hidden h-56 w-56 xl:block" />
      <LimeBrush className="absolute -right-10 -bottom-12 h-64 w-56 scale-x-[-1] opacity-90" />

      <div className="relative z-10 mx-auto max-w-[964px] px-6">
        <h2 className="text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-50 sm:text-[40px] lg:text-[44px]">
          Unlock Your Potential as a
          <br className="hidden sm:block" /> Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-10 max-w-[964px] text-lg leading-[1.6] text-shuttle-50">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <button
          type="button"
          className="mt-10 rounded-3xl bg-brand-lime px-6 py-3 text-lg font-medium text-ink transition hover:brightness-95 active:scale-[0.98]"
        >
          Join as Creator
        </button>
      </div>
    </section>
  )
}

import { Logo } from '../icons/Icons.jsx'
import AuthIllustration from './AuthIllustration.jsx'

/*
 * Shared shell for the Login / Register pages: Persian-blue background with the
 * 120px blueprint grid, the header logo, a marketing column (heading + copy +
 * fanned-out course cards) and the white auth card on the right.
 */
export default function AuthLayout({ eyebrow, description, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-blue">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 pb-16 lg:px-[120px]">
        <header className="flex h-[120px] shrink-0 items-center">
          <Logo light />
        </header>

        <main className="flex flex-1 flex-col gap-14 lg:flex-row lg:items-start lg:gap-0">
          {/* marketing column */}
          <div className="lg:flex-1 lg:pr-10">
            <p className="max-w-[475px] font-display text-xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-50">
              {eyebrow}
            </p>
            <p className="mt-4 max-w-[475px] text-lg leading-[1.6] text-shuttle-50">
              {description}
            </p>

            <AuthIllustration className="mt-[87px]" />
          </div>

          {/* auth card */}
          <div className="w-full rounded-3xl bg-white p-8 shadow-float sm:p-12 lg:min-h-[784px] lg:w-[579px] lg:shrink-0 lg:px-[63px] lg:py-[61px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
import { partners } from '../data/navigation.js'
import { PartnerIcon } from './icons/CategoryIcons.jsx'

export default function LogoStrip() {
  return (
    <section className="bg-chip py-20">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-center gap-x-[72px] gap-y-6 px-6 lg:justify-between">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center gap-3 text-shuttle-400">
            <PartnerIcon name={partner.icon} className="h-8 w-8" />
            <span className="font-display text-2xl font-semibold tracking-tight">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

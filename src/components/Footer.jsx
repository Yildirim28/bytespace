import { footerColumns, footerLegalLinks } from '../data/navigation.js'
import { SearchBar } from './ui/Bits.jsx'
import { Logo } from './icons/Icons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-shuttle-200 bg-white pt-20">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* newsletter */}
          <div className="max-w-[528px]">
            <Logo />
            <p className="mt-6 text-sm leading-[22px] text-ink">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <SearchBar
              className="mt-7 max-w-[504px]"
              size="md"
              placeholder="Enter your email"
            />
            <p className="mt-6 text-xs leading-[1.6] text-ink">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our
              company.
            </p>
          </div>

          {/* link columns */}
          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column, index) => (
              <div key={index}>
                <p className="min-h-[24px] text-base leading-6 text-ink">{column.title}</p>
                <ul className="mt-6 space-y-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm leading-[22px] text-ink transition hover:text-brand-blue"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-shuttle-200 py-7">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-ink sm:flex-row">
            <p>© 2023 ByteSpace. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-6">
              {footerLegalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs transition hover:text-brand-blue">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

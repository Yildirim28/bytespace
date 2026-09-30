import { Link } from 'react-router-dom'
import { navLinks } from '../data/navigation.js'
import { CartIcon, Logo } from './icons/Icons.jsx'

export default function Navbar() {
  return (
    <header className="relative z-30">
      <nav className="mx-auto flex h-[120px] max-w-shell items-center justify-between px-6">
        <Logo light />

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link, index) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-base leading-6 text-shuttle-50 transition hover:text-white ${
                  index === 0 ? 'font-medium' : 'font-normal'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <Link to="/login" className="text-base leading-6 text-shuttle-50 transition hover:text-white">
            Sign In
          </Link>
          <Link to="/register" className="text-base leading-6 text-shuttle-50 transition hover:text-white">
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Cart"
            className="text-shuttle-50 transition hover:text-white"
          >
            <CartIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}

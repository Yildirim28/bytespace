import { GoogleIcon, AppleIcon } from '../icons/Icons.jsx'

const PROVIDERS = [
  { name: 'Google', Icon: GoogleIcon },
  { name: 'Apple', Icon: AppleIcon },
]

/* Square third-party sign-in buttons shown below the "or" divider. */
export default function SocialAuth() {
  return (
    <div className="flex items-center justify-center gap-4">
      {PROVIDERS.map(({ name, Icon }) => (
        <button
          key={name}
          type="button"
          aria-label={`Continue with ${name}`}
          className="grid h-[72px] w-[72px] place-items-center rounded-3xl border border-[#D1D1D1] bg-white transition hover:bg-shuttle-50 active:scale-[0.97]"
        >
          <Icon className="h-10 w-10" />
        </button>
      ))}
    </div>
  )
}
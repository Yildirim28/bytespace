import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout.jsx'
import AuthField from '../components/auth/AuthField.jsx'
import SocialAuth from '../components/auth/SocialAuth.jsx'
import { OrDivider } from '../components/ui/Bits.jsx'

export default function Login() {
  return (
    <AuthLayout
      eyebrow="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="mx-auto flex w-full max-w-[453px] flex-col gap-12 lg:min-h-[662px] lg:justify-between">
        <div className="flex flex-col gap-10">
          <header>
            <p className="text-lg leading-[1.6] text-brand-blue">Sign In</p>
            <h1 className="text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[44px]">
              Welcome Back
            </h1>
          </header>

          <form
            className="flex flex-col items-end gap-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <AuthField
              id="email"
              label="Email"
              type="email"
              placeholder="designer@example.com"
              autoComplete="email"
            />
            <AuthField
              id="password"
              label="Password"
              type="password"
              placeholder="********"
              autoComplete="current-password"
            />
            <button
              type="submit"
              className="h-[46px] rounded-3xl bg-brand-lime px-6 text-lg font-medium text-ink transition hover:brightness-95 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center gap-10">
          <OrDivider />
          <SocialAuth />
          <p className="text-base leading-[1.6] text-[#888888]">
            New user?{' '}
            <Link to="/register" className="text-brand-blue transition hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
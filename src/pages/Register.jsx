import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout.jsx'
import AuthField from '../components/auth/AuthField.jsx'

export default function Register() {
  return (
    <AuthLayout
      eyebrow="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="mx-auto flex w-full max-w-[453px] flex-col gap-12 lg:min-h-[662px] lg:justify-between">
        <div className="flex flex-col gap-10">
          <header>
            <p className="text-lg leading-[1.6] text-brand-blue">Create an Account</p>
            <h1 className="text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[44px]">
              Welcome to ByteSpace
            </h1>
          </header>

          <form
            className="flex flex-col items-end gap-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <AuthField
              id="fullName"
              label="Full Name"
              placeholder="Jamie Davis"
              autoComplete="name"
            />
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
              autoComplete="new-password"
            />
            <button
              type="submit"
              className="h-[46px] rounded-3xl bg-brand-lime px-6 text-lg font-medium text-ink transition hover:brightness-95 active:scale-[0.98]"
            >
              Continue
            </button>
          </form>
        </div>

        <p className="text-center text-base leading-[1.6] text-shuttle-700">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-blue transition hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
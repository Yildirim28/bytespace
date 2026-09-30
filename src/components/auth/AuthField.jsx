/* Labelled text input used by the Login / Register forms. */
export default function AuthField({
  id,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  required = true,
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium leading-[1.2] text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="h-[52px] w-full rounded-xl border border-shuttle-100 bg-white px-6 text-lg leading-[1.6] text-ink outline-none transition placeholder:text-muted focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
      />
    </div>
  )
}
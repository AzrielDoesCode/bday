/** Shown on narrow portrait phones instead of cramming the whole experience in. */
export function LandscapeGate() {
  return (
    <main className="paper-grain flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <p className="ink-hand text-2xl leading-snug">this little thing was made for a bigger screen ♡</p>
      <p className="mt-6 font-serif text-base italic text-ink-soft">
        open it on your iPad in landscape
        <br />
        or on a Mac
      </p>

      <div className="mt-12 flex items-center gap-4 text-ink-soft/70">
        <span className="block h-16 w-10 rounded-md border border-current" />
        <svg viewBox="0 0 60 24" aria-hidden className="nudge-right w-14" fill="none">
          <path d="M2 12h50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M44 5l9 7-9 7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="block h-10 w-16 rounded-md border border-current" />
      </div>

      <p className="ink-hand mt-12 text-base opacity-60">— Dhruv</p>
    </main>
  );
}

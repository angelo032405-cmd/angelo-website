export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/90 bg-slate-50/40">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20">
        <p className="font-signature text-3xl text-brand-blue sm:text-4xl">
          Angelo Perez
        </p>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-[15px]">
          Built on discipline, driven by purpose, and committed to creating
          opportunity for others.
        </p>

        <p className="mt-8 text-sm text-muted/80">Chicago, Illinois</p>

        <p className="mt-12 text-xs tracking-wide text-muted/70">
          © {new Date().getFullYear()} Angelo Perez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

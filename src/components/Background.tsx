export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 grid-fade" />
      <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-teal/10 blur-[140px]" />
      <div className="absolute top-1/3 -right-32 h-[460px] w-[460px] rounded-full bg-violet/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-amber/5 blur-[140px]" />
    </div>
  );
}

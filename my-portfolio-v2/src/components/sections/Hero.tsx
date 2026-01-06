export function Hero() {
  return (
    <div className="h-[calc(100vh-15rem)] px-4 md:px-24 flex items-center">
      <p className="text-[32px] md:text-[42px] tracking-tight leading-normal text-white-primary font-jakarta font-bold">
        <span className="block text-muted">
          i'm fabrizio <span>✌️</span>
        </span>
        <span className="block">
          full-stack dev
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          building sleek apps
        </span>
        <span className="block">
          @b/ackcode_,
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          swiss-based
        </span>
      </p>
    </div>
  );
}

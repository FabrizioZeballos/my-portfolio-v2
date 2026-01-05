export function Hero() {
  return (
    <div className="h-[calc(100vh-15rem)] pl-4 flex items-center border border-blue-500">
      <p className="text-4xl leading-tight">
        <span className="block">
          i'm fabrizio <span>✌️</span>
        </span>
        <span className="block">
          full-stack dev
          <br className="md:hidden" />
          building sleek apps
        </span>
        <span className="block">
          @b/ackcode_,
          <br className="md:hidden" />
          swiss-based
        </span>
      </p>
    </div>
  );
}

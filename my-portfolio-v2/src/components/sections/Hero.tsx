export function Hero() {
  return (
    <div className="h-[calc(100vh-15rem)] pl-4 flex items-center border border-blue-500">
      <p className="text-4xl leading-tight">
        {/* Line 1 */}
        <span className="block">
          i'm fabrizio <span>✌️</span>
        </span>

        {/* Line 2 + 3 logic */}
        <span className="block">
          full-stack dev
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          building sleek apps
        </span>

        {/* Line 4 + 5 logic */}
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

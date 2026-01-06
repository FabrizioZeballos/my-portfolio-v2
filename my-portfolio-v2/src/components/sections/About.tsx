import aboutImg from "../../assets/about.jpg";
import { CardHeader } from "../common/CardHeader";

export function About() {
  return (
    <div className="px-4 md:px-0">
      <div className="w-full flex flex-col md:flex-row-reverse md:bg-card md:text-white md:py-26 md:px-30 border-0 md:border-2 border-white/4 rounded-[40px]">
        <div className="flex flex-1 w-full h-full">
          <img
            src={aboutImg}
            alt=""
            className="rounded-[40px] mb-14 md:mb-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-1">
          <CardHeader header={"about me"} />
          <div className="text-gray-secondary font-sans font-light">
            <p className="my-6">
              <span>
                currently a full-stack developer at{" "}
                <span className="text-white-secondary font-normal">
                  b/ackcode_,
                </span>
              </span>
              <br />
              <span>a swiss-based software startup</span>
            </p>
            <p className="my-6">
              <span>there, I built react features for an in-person</span>
              <br />
              <span>
                luxury watch configurator for{" "}
                <span className="text-white-secondary font-normal">
                  audemars piguet
                </span>
              </span>
              <br />
              <span>and contributed to an ai assistant using llms,</span>
              <br />
              <span>python, langgraph, mcps, and electron</span>
            </p>
            <p className="my-6">
              <span>studying law on the side, now in my 4th year at</span>
              <br />
              <span className="text-white-secondary font-normal">
                national university of cuyo
              </span>
            </p>
            <p className="my-6">
              <span>some technologies i've been working with:</span>
              <br />
              <div className="mt-6 flex flex-col gap-4">
                {" "}
                {/* Vertical gap between rows */}
                <div className="flex gap-8">
                  {" "}
                  {/* Horizontal gap between items */}
                  <span>
                    <span className="text-white-secondary">-</span> react.js
                  </span>
                  <span>
                    <span className="text-white-secondary">-</span> python
                  </span>
                </div>
                <div className="flex gap-8">
                  <span>
                    <span className="text-white-secondary">-</span> javascript
                  </span>
                  <span>
                    <span className="text-white-secondary">-</span> node.js
                  </span>
                </div>
                <div className="flex gap-8">
                  <span>
                    <span className="text-white-secondary">-</span> typescript
                  </span>
                  <span>
                    <span className="text-white-secondary">-</span> express.js
                  </span>
                </div>
              </div>
            </p>
            <p className="hidden md:block mt-6">
              <span>when i'm not building interfaces or debugging</span>
              <br />
              <span>apis, i'm out exploring places like this 📸</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

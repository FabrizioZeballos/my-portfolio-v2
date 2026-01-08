import aboutImg from "../../assets/about.jpg";
import { CardHeader } from "../common/CardHeader";

export function About() {
  return (
    <div className="relative z-20 px-4 md:px-0">
      <div className="w-full flex flex-col md:flex-row-reverse md:bg-card md:py-26 md:px-30 border-0 md:border-2 border-white/4 rounded-[40px] md:shadow-[0_20px_100px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="flex flex-1 w-full h-full">
          <div className="relative mb-12 md:mb-0">
            <div
              className={`hidden md:block absolute translate-y-16 inset-0 z-25 rounded-[40px] blur-[100px] opacity-20 bg-gradient-to-br from-[#3da0fd]/80 via-[#3da0fd]/50 to-[#3da0fd]/20`}
            ></div>
            <img
              src={aboutImg}
              alt=""
              className="relative z-30 rounded-[40px] w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <CardHeader header={"about me"} />
          <div className="text-gray-secondary font-sans font-light">
            <p className="my-8 md:my-9 mt-10 md:mt-14">
              <span>
                currently a full-stack developer at{" "}
                <span className="text-white-secondary font-normal">
                  b/ackcode_,
                </span>
              </span>
              <span className="inline mr-1 md:hidden" />
              <br className="hidden md:block" />
              <span>a swiss-based software startup</span>
            </p>
            <p className="my-8 md:my-9">
              <span>there, i built react features for an in-person</span>
              <span className="inline mr-1 md:hidden" />
              <br className="hidden md:block" />
              <span>
                luxury watch configurator for{" "}
                <span className="text-white-secondary font-normal">
                  audemars piguet
                </span>
              </span>
              <span className="inline mr-1 md:hidden" />
              <br className="hidden md:block" />
              <span>and contributed to an ai assistant using llms,</span>
              <span className="inline mr-1 md:hidden" />
              <br className="hidden md:block" />
              <span>python, langgraph, mcps, and electron</span>
            </p>
            <p className="my-8 md:my-9">
              <span>studying law on the side, now in my 4th year at</span>
              <span className="inline mr-1 md:hidden" />
              <br className="hidden md:block" />
              <span className="">national university of cuyo</span>
            </p>
            <p className="my-8 md:my-9 text-gray-secondary font-sans font-light">
              some technologies i've been working with:{" "}
              <span className="text-white-secondary">
                react.js, python, javascript, node.js, typescript, express.js
              </span>
            </p>
            <p className="hidden md:block mt-8 md:mt-9">
              <span>when i'm not building interfaces or debugging</span>
              <span className="inline mr-1 md:hidden" />
              <br className="hidden md:block" />
              <span>apis, i'm out exploring places like this 📸</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import aboutImg from "../../assets/about.jpg";
import { CardHeader } from "../common/CardHeader";

export function About() {
  return (
    <div className="border border-green-500">
      <div className="w-full flex flex-col md:flex-row-reverse md:bg-[#141415] md:text-white md:py-10 md:px-10">
        <div className="flex flex-1">
          <img src={aboutImg} alt="" />
        </div>
        <div className="flex flex-col flex-1">
          <CardHeader header={"about me"} />
          <div className="text-gray-secondary">
            <p>
              <span>
                currently a full-stack developer at{" "}
                <span className="text-white-secondary">b/ackcode_,</span>
              </span>
              <br />
              <span>a swiss-based software startup</span>
            </p>
            <p>
              <span>there, I built react features for an in-person</span>
              <br />
              <span>
                luxury watch configurator for{" "}
                <span className="text-white-secondary">audemars piguet</span>
              </span>
              <br />
              <span>and contributed to an ai assistant using llms,</span>
              <br />
              <span>python, langgraph, mcps, and electron</span>
            </p>
            <p>
              <span>studying law on the side, now in my 4th year at</span>
              <br />
              <span className="text-white-secondary">
                national university of cuyo
              </span>
            </p>
            <p>
              <span>here are some technologies i've been working</span>
              <br />
              <span>with:</span>
              <br />
              <div>
                <div>
                  <span>
                    <span className="text-white-secondary">-</span> react.js
                  </span>{" "}
                  <span>
                    <span className="text-white-secondary">-</span> python
                  </span>
                </div>
                <br />
                <div>
                  <span>
                    <span className="text-white-secondary">-</span> javascript
                  </span>{" "}
                  <span>
                    <span className="text-white-secondary">-</span> node.js
                  </span>
                </div>
                <br />
                <div>
                  <span>
                    <span className="text-white-secondary">-</span> typescript
                  </span>
                  <span>
                    <span className="text-white-secondary">-</span> express.js
                  </span>
                </div>
              </div>
            </p>
            <p>
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

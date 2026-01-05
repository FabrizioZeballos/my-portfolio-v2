import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Navbar() {
  return (
    <div className="w-full py-6 flex justify-between border border-red-500">
      <div className="py-2 px-4 flex items-center">Fabrizio Zeballos</div>
      <div className="flex justify-between items-center border border-green-500">
        <div className="py-2 px-4">
          <FaLinkedin className="size-7" />
        </div>
        <div className="py-2 px-4">
          <FaGithub className="size-7" />
        </div>
        <div className="py-2 px-4">
          <MdEmail className="size-7" />
        </div>
      </div>
    </div>
  );
}

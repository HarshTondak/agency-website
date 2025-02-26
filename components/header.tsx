import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

const Header = () => {
  return (
    <Element
      name="top"
      className="sticky top-5 z-50 mx-6 flex items-center justify-between overflow-hidden rounded-[6px] bg-gray-100 p-3 md:mx-auto md:p-4 xl:w-4/5 2xl:w-[68%]"
    >
      <Link href={"/"}>
        <Image src={"/logo/logo.png"} alt="Logo" width={150} height={150} />
      </Link>

      <div className="flex items-center gap-x-4">
        <Link
          href={"/showcase"}
          className="hidden rounded-[6px] border-4 border-black bg-white px-8 py-2 transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] md:flex"
        >
          Projects
        </Link>
        <Link
          href={"/meeting"}
          className="rounded-[6px] border-4 border-black bg-white px-4 py-1 transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] md:px-8 md:py-2"
        >
          Book a call
        </Link>
      </div>
    </Element>
  );
};

export default Header;

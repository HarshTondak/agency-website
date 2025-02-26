import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-[#fafafa] px-6 py-10 md:mx-auto xl:w-4/5 xl:px-0 2xl:w-[68%]">
      <div className="flex flex-col flex-wrap gap-x-10 gap-y-5 sm:flex-row">
        <div className="flex w-fit min-w-[200px] flex-col gap-y-2">
          <h1 className="text-3xl font-medium md:text-5xl">
            <Image
              src={"/logo/logo.png"}
              width={120}
              height={100}
              alt="image"
            />{" "}
          </h1>
          <p className="text-left">+91 8595840297</p>
          <p className="text-left">info@socioheads.com</p>
        </div>

        <div className="flex w-fit min-w-[200px] flex-col gap-3">
          <p className="text-nowrap text-xl text-gray-500">Connect with us</p>
          <div className="flex flex-row gap-3">
            <Link href="https://www.facebook.com/people/Socioheads/100090495594400/?mibextid=ZbWKwL">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/socioheads/?igshid=YmMyMTA2M2Y%3D">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/socioheads/">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://twitter.com/socioheads">
              <FaTwitter size={20} />
            </Link>
          </div>

          <p className="text-lg text-gray-500">
            <FaMailBulk className="inline text-black" />
            &nbsp; info@socioheads.com
          </p>
        </div>

        <p className="min-w-[300px]">
          Socioheads is a digital marketing agency based in New Delhi that
          offers a wide range of digital marketing services to businesses. With
          a team of young, enthusiastic, and creative professionals, we provide
          services such as social media management, graphic designing, video
          editing, SEO, and more.
        </p>
      </div>

      <div className="mt-10 flex gap-x-4 md:justify-center">
        © 2022 SocioHeads. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

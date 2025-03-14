"use client";

import Works from "@/components/demos/works";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WordFadeIn from "@/components/magicui/word-fade-in";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Image from "next/image";
import Link from "next/link";

const Showcase = () => {
  return (
    <div className="inset-0 -z-10 h-full w-full overflow-clip bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] px-5">
      <Link href="https://wa.me/918595840297" target="_blank">
        <Image
          src={"/images/whatsapp.png"}
          alt="whatsapp-icon"
          width={50}
          height={50}
          className="fixed bottom-10 right-5 z-50 animate-bounce"
        />
      </Link>
      <Header />
      <div className="mx-6 md:mx-auto md:px-0 xl:w-4/5 2xl:w-[68%]">
        <div className="relative flex items-center justify-center">
          <WordFadeIn
            className="z-20 mx-auto max-w-3xl pt-20 text-3xl font-semibold md:text-center lg:text-5xl"
            words="Design & Code That Helps Your Business Grow"
          />
        </div>
        <p className="mx-auto my-6 text-xl text-gray-500 md:w-4/5 md:text-center md:text-2xl">
          Have a look at some of our recent projects.
        </p>

        <Works />

        <LetsMakeThingsHappenSection />
      </div>

      <Footer />
    </div>
  );
};

export default Showcase;

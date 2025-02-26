"use client";

import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Element } from "react-scroll";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TestimonialSection from "@/components/testimonials";
import { Process } from "@/components/demos/process";
import { Services } from "@/components/demos/services";
import { CoverDemo } from "@/components/demos/cover-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { NameScrollEffect } from "@/components/demos/nameScrollEffect";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { Guarantee } from "@/components/demos/guarantee";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="inset-0 -z-10 h-full w-full overflow-clip bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] px-5">
      <Header />
      <main className="md:pb-10">
        {/* <Image
          src={"/images/banner2.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="mb-10 w-full bg-cover bg-center object-cover"
        /> */}
        <div className="mx-6 mt-14 md:mx-auto md:px-0 xl:w-4/5 2xl:w-[68%]">
          <AnimatedShinyTextDemo />

          <div className="my-4">
            <CoverDemo />
          </div>
          <p className="mx-auto my-6 text-xl text-gray-500 md:my-10 md:w-4/5 md:text-center md:text-2xl">
            Schedule a call with us to discuss your project and get a quote in
            minutes
          </p>

          <div className="flex flex-wrap items-center gap-4 text-nowrap md:justify-center">
            <Link
              href="/meeting"
              className="rounded-[6px] border-2 border-black bg-[#121212] px-6 py-2 text-white transition duration-200 hover:bg-[#abcbff] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] md:px-16 md:text-xl"
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="rounded-[6px] border-2 border-black bg-[#121212] px-6 py-2 text-white transition duration-200 hover:bg-[#abcbff] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:border-white dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] md:px-16 md:text-xl"
            >
              Showcase
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 items-center gap-4 text-left md:mx-auto md:mt-16 md:grid-cols-4 md:justify-items-center">
            <BoxReveal boxColor={"#3b82f6"} duration={0.3}>
              <p className="flex items-center gap-x-2 font-semibold md:gap-x-4 md:text-xl">
                <PiCheckBold className="text-xl text-blue-500" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.3}>
              <p className="flex items-center gap-x-2 font-semibold md:gap-x-4 md:text-xl">
                <PiCheckBold className="text-xl text-blue-500" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.3}>
              <p className="flex items-center gap-x-2 font-semibold md:gap-x-4 md:text-xl">
                <PiCheckBold className="text-xl text-blue-500" />
                ADs
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.3}>
              <p className="flex items-center gap-x-2 font-semibold md:gap-x-4 md:text-xl">
                <PiCheckBold className="text-xl text-blue-500" />
                Strategy
              </p>
            </BoxReveal>
          </div>

          <div className="mx-auto my-20 items-center justify-between gap-x-28 gap-y-4 md:flex">
            <div className="md:w-2/5">
              <h1 className="w-4/5 text-2xl font-medium text-gray-600">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="my-6 flex w-full gap-x-5">
                <div>
                  <h1 className="text-3xl text-blue-500 md:text-5xl">
                    <NumberTicker value={280} /> +
                    <p className="md:text-md text-sm text-gray-500">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px self-stretch bg-gray-300"></div>

                <div className="min-w-0 flex-1">
                  <h1 className="overflow-hidden whitespace-nowrap text-3xl text-blue-500 md:text-5xl">
                    <NumberTicker value={105} /> +
                    <p className="md:text-md text-sm text-gray-500">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/images/logo2.png",
                    name: "Logo",
                  },
                  {
                    logo: "/images/logo3.png",
                    name: "Logo",
                  },
                  {
                    logo: "/images/logo4.png",
                    name: "Logo",
                  },
                  {
                    logo: "/images/logo6.png",
                    name: "Logo",
                  },
                  {
                    logo: "/images/logo7.png",
                    name: "Logo",
                  },
                  {
                    logo: "/images/logo8.png",
                    name: "Logo",
                  },
                  {
                    logo: "/images/logo9.png",
                    name: "Logo",
                  },
                  {
                    logo: "/images/logo10.png",
                    name: "Logo",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <Services />
      </Element>

      <section className="py-20">
        <NameScrollEffect />
      </section>

      <Element name="process">
        <Process />
      </Element>

      <section>
        <main className="mx-auto items-center justify-center space-y-6 px-6 md:flex md:gap-x-20 md:space-y-0 md:px-0 xl:w-4/5 2xl:w-[68%]">
          <h1 className="mx-auto flex items-center justify-center gap-x-2 text-center text-3xl font-bold md:text-5xl">
            <span className="flex items-center gap-x-1 text-blue-400">
              This is Why we do What we do?
            </span>
          </h1>
          <div className="md:w-1/2">
            <TestimonialSection />
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <Guarantee />
      </Element>

      <section className="my-10 md:mx-auto md:py-20 xl:w-4/5 2xl:w-[68%]">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}

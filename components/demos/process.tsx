import Image from "next/image";
import { AnimatedBeamMultipleOutputDemo } from "./animated-beam-demo";
import BoxRevealDemo from "./box-reveal-demo";

export function Process() {
  return (
    <main className="mx-6 md:mx-auto md:px-0">
      <h1 className="mx-auto flex items-center justify-center gap-x-2 text-3xl font-medium md:text-center md:text-5xl">
        Our{" "}
        <span className="flex items-center gap-x-1 text-blue-500">
          {" "}
          <Image
            src={"/icons/squiggle.svg"}
            width={100}
            height={100}
            className="w-6"
            alt="image"
          />
          Creative
          <Image
            src={"/icons/star.svg"}
            width={100}
            height={100}
            className="mb-8 w-6"
            alt="image"
          />
        </span>{" "}
        Process
      </h1>

      <p className="mx-auto py-4 text-center text-xl text-gray-500 md:w-1/2 md:text-2xl">
        All of our services are designed to help your business to get noticed.
      </p>

      <div className="mx-auto flex w-full flex-col items-center justify-center md:w-1/2 md:flex-row">
        <div className="order-2 w-full md:order-1 md:w-1/2">
          <AnimatedBeamMultipleOutputDemo />
        </div>
        <div className="order-1 w-full md:order-2 md:ml-0 md:w-1/2">
          <BoxRevealDemo />
        </div>
      </div>
    </main>
  );
}

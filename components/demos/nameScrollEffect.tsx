import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function NameScrollEffect() {
  return (
    <VelocityScroll
      text="SocioHeads - Digital Marketing Studio | "
      default_velocity={1}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-blue-400 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}

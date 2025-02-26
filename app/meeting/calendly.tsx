"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full">
      <InlineWidget
        styles={{ height: "525px" }}
        url="https://calendly.com/socioheads/30min"
      />
    </div>
  );
};

export default Calendly;

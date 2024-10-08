"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <div className="m-8 space-y-16">
      {Array.from(Array(100).keys()).map((i) => (
        <FadeUp delay={0.5} key={i}>
          <p className="text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            nemo iure, pariatur consequuntur, ad nam eveniet praesentium
            voluptas nesciunt quas corrupti dolorem, blanditiis eaque! Illum ab
            dolores accusamus repellat? Tempora.
          </p>
        </FadeUp>
      ))}
    </div>
  );
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) {
  let ref = useRef(null);
  let isInView = useInView(ref);
  let [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 15,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <div className="m-8 space-y-8">
      {Array.from(Array(100).keys()).map((i) => (
        <FadeIn key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, neque
          rerum! Vero in similique nobis maiores, alias illo cupiditate,
          eligendi amet consequatur iure et officia fugiat labore tenetur
          praesentium architecto!
        </FadeIn>
      ))}
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  let ref = useRef(null);
  let isInView = useInView(ref);
  let [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isInView && !isShowing) {
      setIsShowing(true);
    }
  }, [isInView, isShowing]);

  return (
    <motion.div
      initial="hidden"
      animate={isShowing ? "visible" : "hidden"}
      transition={{ delay }}
      variants={{
        hidden: {
          opacity: 0,
          y: 25,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}

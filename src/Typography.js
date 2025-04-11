import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimatedWrapper = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.25, delay: 0.25 }}
      className={`relative`}
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
};

const createAnimatedTypographyComponent = (Tag, defaultClass) => {
  return ({ children, className = "" }) => (
    <AnimatedWrapper className={`${defaultClass} ${className}`}>
      <Tag>{children}</Tag>
    </AnimatedWrapper>
  );
};

const Typography = {
  Title: createAnimatedTypographyComponent(
    "h1",
    "font-montaga text-[clamp(34px,4vw,72px)]"
  ),
  P: createAnimatedTypographyComponent(
    "p",
    "font-hind font-[400] text-[clamp(18px,2.5vw,32px)]"
  ),
  SubTitle: createAnimatedTypographyComponent(
    "h2",
    "font-montaga text-[clamp(28px,3vw,56px)]"
  ),
  PSm: createAnimatedTypographyComponent(
    "p",
    "font-hind font-[400] text-[clamp(16px,2vw,26px)]"
  ),
};

export default Typography;

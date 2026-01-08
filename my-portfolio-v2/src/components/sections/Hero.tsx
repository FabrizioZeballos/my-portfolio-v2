import { motion, useScroll, useTransform } from "motion/react";

export function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 260]);
  const opacity = useTransform(scrollY, [300, 480], [1, 0]);

  return (
    <div className="h-[calc(100vh-15rem)] px-4 md:px-24 flex items-center">
      <motion.div style={{ y, opacity }}>
        <p className="text-[32px] md:text-[42px] tracking-normal leading-normal text-white-primary/100 font-jakarta font-bold">
          <div className="flex items-center gap-2">
            <motion.span
              className="block text-muted"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
            >
              i&apos;m fabrizio
            </motion.span>
            <motion.span
              className="block text-muted"
              initial={{ x: -40, opacity: 0, rotate: -60 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 132,
                damping: 8,
              }}
            >
              ✌️
            </motion.span>
          </div>
          <motion.div
            className="block text-muted"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeIn",
              type: "spring",
              stiffness: 50,
              damping: 12,
            }}
          >
            <span className="block">
              full-stack dev
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              building sleek apps
            </span>
            <span className="block">
              @b/ackcode_,
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              swiss-based
            </span>
          </motion.div>
        </p>
      </motion.div>
    </div>
  );
}

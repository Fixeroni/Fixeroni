import {motion} from "framer-motion";
import { ReactNode } from "react";

function AnimateEntranceFromBottom({children}: {children: ReactNode}) {
  return (
    <motion.article
        initial={{
            display: "none",
            opacity: 0,
            y: 80
        }}

        animate={{
            display: "grid",
            opacity: 1,
            y: 1
        }}

        transition={{
            duration: 0.5
        }}
    >
        {children}
    </motion.article>
  )
}

export default AnimateEntranceFromBottom

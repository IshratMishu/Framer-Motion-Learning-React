import { motion } from "framer-motion"

const Transition = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 h-screen w-full bg-slate-700 origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1 , ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
                className="fixed top-0 left-0 h-screen w-full bg-red-400 origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1 , ease: [0.22, 1, 0.36, 1]}}
            />
        </>
    );
};

export default Transition;
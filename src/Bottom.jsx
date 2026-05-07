import { motion } from "framer-motion";

export default function Bottom() {
  return (
    <div className="w-full py-16 px-4 text-center 
      bg-linear-to-br from-slate-900 via-gray-900 to-black">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-gray-200"
      >
        <p className="text-lg md:text-xl leading-relaxed font-serif">

          No matter how far we go,  
          <span className="text-pink-400 font-semibold"> our bond </span> 
          will always find its way back.  

          <br /><br />

          Through every mistake, every silence, every storm…  
          it never broke — it only 
          <span className="text-purple-400 font-semibold"> grew stronger. </span>

          <br /><br />

          And I promise, from my heart —  
          this is not the end of our story…  
          <span className="text-yellow-300 font-bold animate-pulse">
            it never will be.
          </span>
        </p>
      </motion.div>

    </div>
  );
}
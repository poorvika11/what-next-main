import React from 'react';
import { motion } from 'framer-motion';

export default function RecommendationCard({
  data,
  setIndex,
  setSelected,
  selected,
  index,
}) {
  const cardVariants = {
    hidden: { x: '1000%' },
    visible: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { x: '-100%', transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const shakeVariants = {
    initial: { x: 0 },
    shake: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='border border-black p-8 bg-white border-b-0'>
        <div className='flex justify-center'>
          <motion.img
            src={data.image}
            alt={data.name}
            className='h-64'
            variants={shakeVariants}
            whileHover='shake'
          />
        </div>
        <div className='text-center'>
          <div className='text-2xl font-bold'>{data.name}</div>
          <div className='text-xl'>{data.category}</div>
        </div>
      </div>
      <div className='border border-black'>
        <div className='flex'>
          <motion.button
            className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 w-full poppins'
            onClick={() => setIndex((prev) => prev + 1)}
            variants={buttonVariants}
            whileHover='hover'
            whileTap='tap'
          >
            Skip
          </motion.button>

          <motion.button
            className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 w-full poppins'
            onClick={() =>
              setIndex((prev) => {
                setSelected((prev) => [...selected, index]);
                return prev + 1;
              })
            }
            variants={buttonVariants}
            whileHover='hover'
            whileTap='tap'
          >
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

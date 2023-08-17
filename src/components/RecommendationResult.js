import React from 'react';
import { motion } from 'framer-motion';

export default function RecommendationResult({ data, selected }) {
  const containerVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { delay: 1, duration: 2, type: 'spring', stiffness: 50 },
    },
  };

  return (
    <motion.div initial='hidden' animate='visible' variants={containerVariants}>
      <div className='text-2xl font-bold poppins mb-12 border border-black border-t-0 border-l-0 border-r-0'>
        Here are your recommendations!
      </div>
      <div className='text-xl font-bold poppins grid grid-cols-1'>
        {selected.length > 0 && (
          <div
            className='flex justify-between text-gray-800 text-2xl font-bold poppins border border-t-0 border-l-0 border-r-0 border-black pb-4'
            style={{ width: '700px' }}
          >
            <div>Image</div>
            <div>Name</div>
            <div>Category</div>
          </div>
        )}
        {selected.map((item, index) => (
          <div
            key={index}
            className='flex justify-between border border-black border-t-0 p-4 items-center'
          >
            <div>
              <img
                src={data[item].image}
                alt={data[item].name}
                className='h-20'
              />
            </div>
            <div className='text-xl font-bold poppins'>{data[item].name}</div>
            <div className='text-xl font-bold poppins'>
              {data[item].category}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

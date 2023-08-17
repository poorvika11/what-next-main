import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RecommendationCard from './RecommendationCard';
import RecommendationResult from './RecommendationResult';
import home_animation from '../assets/home_animation.gif';

export default function RecommendationEngine({ data }) {
  const [recommendation, setRecommendation] = useState(data);
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [selected, setSelected] = useState([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  const startAnimation = () => {
    setStart(true);
  };

  return (
    <motion.div initial='hidden' animate='visible' variants={containerVariants}>
      {!start ? (
        <motion.div
          className='text-2xl font-bold mb-4 flex flex-row gap-8 items-center'
          variants={containerVariants}
        >
          <div>
            <img
              src={home_animation}
              alt='home_animation'
              className='h-64 w-52'
            />
          </div>
          <div>
            Click on the button below to <br />
            start the recommendation system!
            {!start && (
              <div className='flex justify-end'>
                <motion.button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded'
                  onClick={startAnimation}
                  variants={buttonVariants}
                  whileHover='hover'
                >
                  Start
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      ) : index < recommendation.length ? (
        <RecommendationCard
          data={recommendation[index]}
          index={index}
          setIndex={setIndex}
          setRecommendation={setRecommendation}
          selected={selected}
          setSelected={setSelected}
        />
      ) : selected.length > 0 ? (
        <RecommendationResult data={recommendation} selected={selected} />
      ) : (
        <div>Sorry, no recommendations found!</div>
      )}
    </motion.div>
  );
}

import React from 'react';
import RecommendationEngine from './components/RecommendationEngine';
import { DATA } from './data';

const App = () => {
  return (
    <div>
      <div className='flex py-2 px-4 justify-center bg-blue-500 text-white text-xl font-bold poppins'>
        Recommendation System
      </div>
      <div style={{ height: '100vh' }} className='bg-gray-'>
        <div className='flex justify-center items-center h-full'>
          <RecommendationEngine data={DATA} />
        </div>
      </div>
      <div className='flex py-2 px-4 justify-center bg-blue-500 text-white text-xl font-bold poppins'>
        <a
          href='https://github.com/poorvika11'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-black'
        >
          @poorvika11
        </a>
      </div>
    </div>
  );
};

export default App;

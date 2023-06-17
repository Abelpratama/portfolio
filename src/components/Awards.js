import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Awards = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  return (
    <div className='section' id='Awards' ref={ref}>
      <div className='container mx-auto'>
        <div className='text-center'>
          <motion.h2
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='text-3xl font-bold mb-8'>
            Awards
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='mb-4'>
            <p>Still striving to achieve awards</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Awards;

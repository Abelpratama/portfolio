import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Interest = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  return (
    <div className='section' id='Interest' ref={ref}>
      <div className='container mx-auto'>
        <div className='text-center'>
          <motion.h2
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='text-4xl font-bold mb-8'
          >
            Interest
          </motion.h2>
          <motion.ul
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='text-lg'
          >
            <motion.li>Reading</motion.li>
            <motion.li>Gaming</motion.li>
            <motion.li>Hacking</motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Interest;

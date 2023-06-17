import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  return (
    <div className='section' id='Experience' ref={ref}>
      <div className='container mx-auto'>
        <div className='text-center'>
          <motion.h2
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='text-3xl font-bold mb-8'>
            Experience
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='mb-4'>
            <h3 className='text-xl font-bold mb-2'>Projects Pembuatan animasi VR pada taman nasional Bunaken (2021):</h3>
            <p>Creating object using Blender</p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='mb-4'>
            <h3 className='text-xl font-bold mb-2'>Membuat project bisnis Andalin Aja:</h3>
            <p>Membuat prototype aplikasi jasa pengiriman online</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

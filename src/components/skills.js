import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  return (
    <div className='section' id='skills' ref={ref}>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='text-center'>
          <h2 className='text-3xl font-bold mb-8'>Skills</h2>
          <div className='grid grid-cols-2 gap-12'>
            {/* Soft Skills */}
            <div>
              <h3 className='text-xl font-bold mb-4'>Soft Skills:</h3>
              <ul className='text-lg'>
                <li>Pemecah masalah</li>
                <li>Kreatif</li>
                <li>Komunikasi yang baik</li>
                <li>Kerja sama</li>
                <li>Berpemimpinan yang baik</li>
                <li>Berpikir kritis</li>
              </ul>
            </div>
            {/* Hard Skills */}
            <div>
              <h3 className='text-xl font-bold mb-4'>Hard Skills:</h3>
              <ul className='text-lg'>
                <li>Microsoft Office</li>
                <li>Android Studio</li>
                <li>R-studio</li>
                <li>Q-GIS</li>
                <li>Python</li>
                <li>XAMPP</li>
                <li>Canva</li>
                <li>Visual Paradigm</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div>
          {/* text */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='text-center mb-16'>
            <h2>About me</h2>
            <h3>I am Abel Pratama Ramadhan Lulut, an introverted individual with a keen interest in IT support. I have been studying Information Systems at Sam Ratulangi University. With 2 years of experience, I specialize in HTML, CSS, JavaScript, and React. As an introvert, I believe in being diligent and dedicated to my work without seeking unnecessary attention from others.</h3>
          </motion.div>
          {/* personal details */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='text-center'>
            <h2>Personal Details</h2>
            <ul className='text-lg'>
              <li>Name: Abel Pratama Ramadhan Lulut</li>
              <li>Birthday: 17 November 2001</li>
              <li>Degree: Degree</li>
              <li>Experience: 2 Years</li>
              <li>Phone: +62 851 7105 6989</li>
              <li>Email: abelpratam8986@gmail.com</li>
              <li>Freelance: Available</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

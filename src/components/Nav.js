import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText, BsAward } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 w-full flex justify-center'>
      {/* nav inner */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 
        rounded-full max-w-[460px] px-5 flex justify-between items-center text-2x1 text-white/50'>
        <Link 
          to='home' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-4'>
          <BiHomeAlt />
        </Link>
        <Link 
          to='about'
          activeClass='active'
          smooth={true}
          spy={true} 
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-4'>
          <BiUser />
        </Link>
        <Link 
          to='skills' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-4'>
          <BsClipboardData />
        </Link>
        <Link 
          to='Experience'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-4'>
          <BsBriefcase />
        </Link>
        <Link 
          to='Interest' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-4'>
          <BsChatSquareText/>
        </Link>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link 
              to='Awards' 
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ml-4'>
              <BsAward/>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;

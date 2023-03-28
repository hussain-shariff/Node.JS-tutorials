import React from 'react'
import { motion } from 'framer-motion'
import SideSectionItem from './SideSectionItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faChartSimple,
  faMagnifyingGlass,
  faFileInvoice,
  faAddressCard,
  } from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from '../context';

function SideBar() {
  const {toggleSidebar} = useAppContext()
  return (
    <motion.div 
        initial = {{ x : '-150vw' }}
        animate = {{ x : 0 }}
        transition = {{ duration: 0.6 }}
        className='h-screen z-50 w-full text-white bg-white/20 backdrop-blur-2xl
        fixed top-0 left-0 md:w-60'>
            <FontAwesomeIcon icon={faBars} className=' h-7 cursor-pointer absolute top-5 right-7'
            onClick={()=>toggleSidebar()}/>
            <div className='flex flex-col mt-20  items-center gap-5'>
                <SideSectionItem
                    name='Stats'
                    icon= {faChartSimple} />
                <SideSectionItem
                    name='All jobs'
                    icon={faMagnifyingGlass}/>
                <SideSectionItem
                    name='Add a job'
                    icon={faFileInvoice}/>
                <SideSectionItem
                    name='Profile'
                    icon={faAddressCard}/>
            </div>
    </motion.div>
  )
}

export default SideBar
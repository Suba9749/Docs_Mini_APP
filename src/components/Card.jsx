import React from 'react'
import { MdFindInPage } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"



function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{bounceStiffness:100 , bounceDamping:30}} className='relative  flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white  py-8 px-10 overflow-hidden'>
        <MdFindInPage />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>

        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3  mb-3'>
                <h5>{data.fileSize}</h5>
                <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close?<IoIosCloseCircleOutline />:  <FaFileDownload size=".7em" color='#fff'/>}
              
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"? "bg-blue-600" :"bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
                )
            }
            
            
        </div>
    </motion.div>
  )
}

export default Card

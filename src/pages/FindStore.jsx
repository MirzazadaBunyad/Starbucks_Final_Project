import React from 'react'
import Header from './Header'
import { TextField } from '@mui/material'
import { CiSearch } from 'react-icons/ci'
import {RxOpenInNewWindow} from 'react-icons/rx'

function FindStore() {
    return (
        <div>
            <div className='flex max-lg:flex-col-reverse'>
                <div className='w-[40%] max-lg:w-full'>
                    <div className='flex w-full max-lg:top-[10%] max-lg:w-[500px] relative py-[24px] items-center justify-between max-md:px-[24px] md:px-[40px] '>
                        <div className='w-[83%]' >
                            <TextField className='w-full' id="standard-basic" placeholder='Find a store' variant="standard" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <i className=' right-[25%]'> <CiSearch size={28} fill='#CDCDCD' /></i>
                            <button className='py-[7px] right-[5%] px-[16px] rounded-3xl border font-[SodoSB] max-md:text-[14px] !border-[#01754A] text-[#01754A] hover:bg-[#E8F1ED] '>Filter</button>
                        </div>
                    </div>
                    <div className='max-lg:bottom-0 max-lg:w-full'>
                        <div className='flex lg:mb-[120px] max-md:pl-[24px] flex-col md:pl-[40px] justify-start items-start py-[24px] pr-[16px] gap-[20px]'>
                            <h3 className='text-[28px] max-md:text-[19px] font-[SodoSB]'>We apologize for the temporary inconvenience.</h3>
                            <p className='text-[#6B6B6B] max-md:text-[14px] font-[Sodo]'>Do you want to look further away?</p>
                            <button className='py-[7px] px-[16px] bg-[#00754A] text-white rounded-3xl text-[14px] font-[Sodo]'>Expand search</button>
                        </div>
                        <div className='flex flex-col py-[24px] max-md:pl-[24px] md:pl-[40px] pr-[16px] gap-[25px]'>
                            <a className='flex gap-[10px]  text-[#036141] font-[Sodo] max-md:text-[14px] cursor-pointer'>Privacy notice <RxOpenInNewWindow/> </a>
                            <a className='flex gap-[10px] text-[#036141] font-[Sodo] max-md:text-[14px] cursor-pointer'>Terms of use <RxOpenInNewWindow/></a>
                            <a className='flex gap-[10px] text-[#036141] font-[Sodo] max-md:text-[14px] cursor-pointer'>Do Not Share My Personal Information <RxOpenInNewWindow/></a>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[60%] h-[30vh] max-lg:h-[30vh] max-lg:top-[20%] max-lg:w-full lg:h-[88vh]'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d194389.16980174003!2d49.77253531276856!3d40.42367389999787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1691048312936!5m2!1sen!2saz"
                        width="100%"
                        height="100%"
                        className="border-0"
                        allowfullscreen={true}
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default FindStore
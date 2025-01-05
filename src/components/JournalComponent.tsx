import React from 'react';
import {  FORMATTED_CURRENT_DATE, getFormattedNextDay, getFormattedPreviousDay } from '../utils/moment';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type JournalComponentProps = {
    
};

const JournalComponent:React.FC<JournalComponentProps> = () => {
    const [date, setDate] = React.useState<string>(FORMATTED_CURRENT_DATE);

    const changeDate = (operation: 'add' | 'subtract') => {
        setDate(operation === 'add' ? getFormattedNextDay(date) : getFormattedPreviousDay(date));
    }
    
    return <section className='flex flex-col gap-3  w-full'>
        <div className='flex flex-row justify-between items-center w-full px-4'>
            <div className='flex flex-row items-center cursor-pointer' onClick={() => changeDate('subtract')}><FaAngleLeft size={20} /><span className='text-sm italic'>Yesterday</span></div>
            <div className='flex flex-col items-center'>
                <h3>{date}</h3>
                <div className="text-sm">Click to access entry for a specific day</div>
            </div>
            <div className='flex flex-row items-center cursor-pointer' onClick={() => changeDate('add')}><span className='text-sm italic'>Tomorrow</span><FaAngleRight size={20} /></div>
        </div>
        <div className='flex flex-row justify-center w-full px-4'>
            <div className='basis-1/2 border-double border-gray-400 border-2'>
                <div className='flex flex-row justify-center items-center gap-2 py-2 border-gray-400 border-b-2'>
                    <h4>Tasks</h4>
                    <span className='text-base'>(<span className='italic font-light'>Planning</span>)</span>
                </div>
            </div>
            <div className='basis-1/2 border-double border-gray-400 border-2'>
                <div className='flex flex-row justify-center items-center gap-2 py-2 border-gray-400 border-b-2'>
                    <h4>Journal</h4>
                    <span className='text-base'>(<span className='italic font-light'>Reflecting</span>)</span>
                </div>
                <div className='flex flex-col gap-1 p-2'>
                    <div className='text-xs italic font-medium'>"What stirred your mind today, and how might it shape your tomorrow?"</div>
                </div>
            </div>
        </div>
        <div className='text-center'>
            <button className='text-sm border-gray-400 border-2 py-2 px-3 hover:bg-gray-100 rounded-full text-gray-600 hover:text-grey-800 hover:font-bold cursor-pointer'>Record Entry</button>
        </div>
    </section>
}
export default JournalComponent;
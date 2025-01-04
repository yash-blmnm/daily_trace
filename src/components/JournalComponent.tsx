import React from 'react';

type JournalComponentProps = {
    
};

const JournalComponent:React.FC<JournalComponentProps> = () => {
    
    return <section className='flex flex-col gap-2  w-full'>
        <div className='flex flex-row justify-center items-center w-full py-2 px-4'>
            <div></div>
            <h3>{Date.now().toString()}</h3>
            <div></div>
        </div>
        <div className='flex flex-row justify-center items-center  w-full px-4'>
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
                <div className='text-xs italic font-medium'>"What stirred your mind today, and how might it shape your tomorrow?"</div>
            </div>
        </div>
    </section>
}
export default JournalComponent;
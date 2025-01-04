import React from 'react';

type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return <header>
        <div className='flex flex-row justify-center items-center  w-full py-4 px-2'>
            <div className='basis-1/4'></div>
            <div className='basis-1/4 flex flex-col gap-1 items-center '>
                <h1 className=''>Daily.Trace</h1>
                <span className='text-xs'>Trace your days. Shape your journey.</span>
            </div>
            <nav className='flex flex-row justify-self-end basis-1/4 gap-2'>
                <div className='text-sm hover:text-blue-600 hover:font-bold cursor-pointer'>Add Goal</div>
                <div className='text-sm hover:text-blue-600 hover:font-bold cursor-pointer'>Account</div>
            </nav>
        </div>
    </header>
}
export default Header;
import React from 'react';
import CardBanner from '../Home/CardBanner';
import './Banner.css';

const Banner = () => {
    return (
        <div className='  flex items-center bgimg bg-black '>

            <div className='px-4 lg:px-24 flex w-full bg-[rgba(0,0,0,0.8)] flex-col md:flex-row justify-between items-center gap-12 py-24 lg:py-40'>
                {/* left side */}
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-white'>Buy and Sell Your Books <span className='text-blue-700'>For Best Prices</span></h2>
                    <p className='md:w-4/5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore nisi ratione laboriosam, ut esse vel pariatur magni impedit sunt nihil, accusamus praesentium perferendis iste? Asperiores explicabo hic quaerat illo.</p>
                    <div>
                        <input type='text' name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-white transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>

                {/* right side */}
                <div className=''>
                    <CardBanner />
                </div>
            </div>
        </div>
    )
}

export default Banner



import userIcon from '../../assets/user.png'
import editorsInsight1 from '../../assets/editorsInsight1.png'

const News = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold my-4'>Dragon News Home</h2>
            <div className=' border border-t-0 outline-0 rounded-b-lg'>
            <div className='flex items-center px-4 border gap-2 bg-gray-100 py-4 rounded-t-md'>
            <div className="w-10 rounded-full">
                <img src={userIcon} />
            </div>
            
            <div>
                 <h2 className='text-base font-semibold'>Awlad Hossain</h2>
                <p>2022-08-21</p>
            </div>
            </div>
            <div className='mx-4 space-y-2'>
                <h2 className='text-xl'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                <img src={editorsInsight1} alt="" />
                <p>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <span className='font-semibold text-orange-400'>Read More</span></p>
                <hr className='py-2' />
            </div>
            </div>
        </div>
    );
};

export default News;
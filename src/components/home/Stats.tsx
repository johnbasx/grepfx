import React from "react";

const Stats = () => {
  return (
    <div className='flex flex-wrap shadow md:flex-nowrap bg-main-back stats'>
      <div className='stat'>
        <div className='stat-figure text-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-8 h-8 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            ></path>
          </svg>
        </div>
        <div className='stat-title'>Total Likes</div>
        <div className='stat-value text-primary'>25.6K</div>
        <div className='stat-desc'>21% more than last month</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-8 h-8 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 10V3L4 14h7v7l9-11h-7z'
            ></path>
          </svg>
        </div>
        <div className='stat-title'>Page Views</div>
        <div className='stat-value text-secondary'>2.6M</div>
        <div className='stat-desc'>21% more than last month</div>
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <div className='avatar online'>
            <div className='w-16 rounded-full'>
              <img
                src='https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                alt='Image profile'
              />
            </div>
          </div>
        </div>
        <div className='stat-value'>86%</div>
        <div className='stat-title'>Tasks done</div>
        <div className='stat-desc text-secondary'>31 tasks remaining</div>
      </div>
    </div>
  );
};

export default Stats;

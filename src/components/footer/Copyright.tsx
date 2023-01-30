import React from "react";

const Copyright = () => {
  return (
    <div className='pt-12 mt-12 border-t border-gray-100'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <nav aria-label='Footer Navigation - Support'>
          <ul className='flex flex-wrap gap-4 text-xs'>
            <li>
              <a href='#' className='text-gray-500 transition hover:opacity-75'>
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href='#' className='text-gray-500 transition hover:opacity-75'>
                Privacy Policy
              </a>
            </li>

            <li>
              <a href='#' className='text-gray-500 transition hover:opacity-75'>
                Cookies
              </a>
            </li>
          </ul>
        </nav>

        <p className='mt-8 text-xs text-gray-500 sm:mt-0'>
          &copy; 2023. GrepFX. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Copyright;

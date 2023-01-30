import { footerLinksData } from "@contents/footerLinks";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {footerLinksData.map((data, index) => (
        <div key={"footer-" + data.id + index}>
          <p className='font-medium text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text'>
            {data.footerHead}
          </p>

          <nav aria-label='Footer Navigation - Services' className='mt-6'>
            <ul className='space-y-4 text-sm'>
              {data.footers.map((footLink, idx) => (
                <li key={"foot-" + footLink.id}>
                  <Link href='#'>
                    <span className="className='text-gray-300 transition hover:opacity-75'">
                      {footLink.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;

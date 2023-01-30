import { socialLinksData } from "@contents/footerLinks";
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <div>
      <p>
        <span className='text-xs tracking-wide text-gray-300 uppercase'>
          Call us
        </span>

        <a
          href='#'
          className='block text-2xl font-semibold text-gray-50 hover:opacity-75 sm:text-3xl'
        >
          +91-9100998877
        </a>
      </p>

      <ul className='mt-8 space-y-1 text-sm text-gray-300'>
        <li>Monday to Friday: 10am - 5pm</li>
        <li>Weekend: 10am - 3pm</li>
      </ul>
      <div className='mt-6'>
        <p className='font-medium text-gray-100'>Connect with us</p>
        <ul className='flex gap-6 mt-6'>
          {socialLinksData.map((social, index) => (
            <li key={"Social-" + social.id}>
              <Link
                href={social.link}
                rel='noreferrer'
                target='_blank'
                className='text-gray-300 transition hover:opacity-75'
              >
                <span className='sr-only'>{social.name}</span>

                <social.Icon className='w-6 h-6' />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../components/logo'
import { project } from '../config/config';


function Footer() {

  const sections = [
    {
      title: 'Resources',
      links: [
        { text: 'Shadcn/ui', url: 'https://ui.shadcn.com/' },
        { text: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      ],
    },
    {
      title: 'Follow us',
      links: [
        { text: 'Github', url: 'https://github.com/imran0developer' },
        { text: 'Linkedin', url: 'https://www.linkedin.com/in/imran0developer/' },
      ],
    },
    {
      title: 'Term and Policy',
      links: [
        { text: 'Privacy Policy', url: '#' },
        { text: 'Terms & Conditions', url: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/example', icon: '/facebook.svg' },
    { name: 'Twitter', url: 'https://twitter.com/example', icon: '/twitter.svg' },
    { name: 'Github', url: 'https://github.com/imran0developer', icon: '/github.svg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/imran0developer/', icon: '/linkedin.svg' },
  ];


  return (
    <footer className="bg-white dark:bg-gray-900 bottom-0 w-full">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo color={'black'} />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {section.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-4">
                      <Link href={link.url} className="hover:underline">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <Link href="#" className="hover:underline">
              {project.name}
            </Link>.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <div className='w-[30px] h-[30px]'>
                  <img
                    src={social.icon}
                  ></img>
                </div>

              </Link>

            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
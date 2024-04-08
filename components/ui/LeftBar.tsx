'use client';

import { sidebarLinks } from '@/constants/constants.index';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import { CiBookmark } from 'react-icons/ci';

export default function Navbar() {
  const pathname = usePathname();
  const [extanded, setExtanded] = useState(false);
  const handlers = useSwipeable({
    onSwipedUp: () => setExtanded(true),
    onSwipedDown: () => setExtanded(false)
  });

  return (
    <div
      className={`py-4 w-full md:relative md:w-fit bg-[#2e2c2f] md:[background:linear-gradient(180deg,rgb(234,225,214)_18.5%,rgb(44.2,44,47)_37.48%,rgb(44.2,44,47)_100%)] ${
        extanded ? 'rounded-[46px]' : 'rounded-full'
      } shadow-[0px_4px_4px_#00000040]`}
      {...handlers}
    >
      <Link href={'/'} className="w-20 md:flex hidden">
        <Image
          src="/icons/logo.svg"
          alt="Large Image"
          height={100}
          width={100}
          className="object-cover"
        />
      </Link>
      <div className="grid grid-cols-3 md:flex md:flex-col md:items-center gap-4 content-center justify-items-center p-2">
        {sidebarLinks.map((link) =>
          // ${pathname.substring(1) === link.label ?"w-[120px] md:w-[60px] md:h-[120px]" : "w-[60px]"}
          !extanded ? (
            <Link
              key={link.label}
              href={link.route}
              className={`h-12 flex justify-center items-center aspect-square rounded-full [background:linear-gradient(180deg,rgb(228,121,78)_0%,rgb(209,101,63)_100%)] ${
                link.mobile ? '' : 'hidden md:flex'
              }`}
            >
              <link.iconUrl color="#eae1d6" size={32} />
            </Link>
          ) : (
            <Link
              key={link.label}
              href={link.route}
              className={`h-10 rounded-full [background:linear-gradient(180deg,rgb(228,121,78)_0%,rgb(209,101,63)_100%)]`}
            ></Link>
          )
        )}
      </div>
    </div>
  );
}

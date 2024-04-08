import { IoBookmark } from 'react-icons/io5';
import { LuMusic } from 'react-icons/lu';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdOutlinePhone } from 'react-icons/md';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';

export const sidebarLinks = [
  {
    iconUrl: IoBookmark,
    route: '/courses',
    label: 'courses',
    mobile: true
  },
  {
    iconUrl: LuMusic,
    route: '/ressources',
    label: 'ressources',
    mobile: true
  },
  {
    iconUrl: AiOutlineTeam,
    route: '/team',
    label: 'team',
    mobile: false
  },
  {
    iconUrl: MdOutlinePhone,
    route: '/contact',
    label: 'contact',
    mobile: false
  },
  {
    iconUrl: IoIosPeople,
    route: '/community',
    label: 'community',
    mobile: false
  },
  {
    iconUrl: BsCurrencyDollar,
    route: '/pricing',
    label: 'Pricing',
    mobile: false
  }
];

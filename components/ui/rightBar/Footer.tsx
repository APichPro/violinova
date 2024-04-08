import Link from 'next/link';
import LocaleSwitcher from '@/components/ui/rightBar/LocaleSwitcher';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <div className="py-2 hidden md:flex flex-col gap-4 text-xs text-center bg-[#2e2c2f] text-[#eae1d6] rounded-full shadow-[0px_4px_4px_#00000040]">
      <div className="flex flex-wrap gap-4 justify-evenly">
        <Link href={'/contact'} className="">
          <h1>{t('contact')}</h1>
        </Link>
        <LocaleSwitcher />
        <Link href={'/'} className="">
          <h1>{t('sales_contract')}</h1>
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly">
        <Link href={'/'} className="">
          <h1>{t('GDPR')}</h1>
        </Link>
        <Link href={'/'} className="">
          <h1>{t('EULA')}</h1>
        </Link>
        <Link href={'/'} className="">
          <h1>{t('legal_notice')}</h1>
        </Link>
      </div>
    </div>
  );
}

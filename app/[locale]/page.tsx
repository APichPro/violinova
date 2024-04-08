import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage({ params: { locale } }: { params: any }) {
  const t = useTranslations('HomePage');
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2	flex flex-col items-center">
      <Image
        src="/icons/logo.svg"
        alt="Large Image"
        height={300}
        width={300}
        className="object-cover"
      />
      <Link
        href={'/courses'}
        className="border-2 rounded-full border-[#eae1d6] text-[#eae1d6] text-[24px] p-2"
      >
        <h1>{t('welcome_sentence')}</h1>
      </Link>
    </div>
  );
}

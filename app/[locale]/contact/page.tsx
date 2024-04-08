import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactPage({ params: { locale } }: { params: any }) {
  const t = useTranslations('ContactPage');
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2	flex flex-col gap-4 items-center text-[#eae1d6] text-2xl">
      <Image
        src="/icons/logo_resize.png"
        alt="Large Image"
        height={300}
        width={300}
        className="object-cover"
      />
      <h1 className="text-4xl">{t('subscribe')}</h1>
      <input
        aria-label="mail"
        type="text"
        className=" bg-transparent border-2 border-[#eae1d6] rounded-full"
      />
      <h1 className="text-[#D56942] text-4xl">{t('contact')}</h1>
      <h2>+33 7 81 81 93 95</h2>
      <h2>apichereau.pro@gmail.com</h2>
      <h2>9 place de Quilbignon</h2>
      <h2>Brest, 29200, France</h2>
    </div>
  );
}

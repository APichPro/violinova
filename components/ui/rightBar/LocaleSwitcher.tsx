'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <select
      aria-label="locale"
      className="appearance-none bg-transparent text-[#d56942]"
      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {['en', 'fr'].map((cur) => (
        <option key={cur} value={cur}>
          {t(cur)}
        </option>
      ))}
    </select>
  );
}

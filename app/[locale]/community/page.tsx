import { useTranslations } from 'next-intl';

export default function CommunityPage({ params: { locale } }: { params: any }) {
  const t = useTranslations('Community');
  return <div className="w-full">In development</div>;
}

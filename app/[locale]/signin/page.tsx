import { getSession } from '@/app/supabase-server';
import AuthUI from './AuthUI';

import { redirect } from 'next/navigation';
import Logo from '@/components/icons/Logo';

export default async function SignIn({ params: { locale } }: { params: any }) {
  const session = await getSession();

  if (session) {
    return redirect('/account');
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2	flex flex-col items-center text-[#eae1d6] text-[32px]">
      <Logo width="64px" height="64px" />
      <AuthUI />
    </div>
  );
}

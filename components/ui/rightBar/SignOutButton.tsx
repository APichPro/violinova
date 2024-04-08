'use client';

import { useSupabase } from '@/app/supabase-provider';
import { useRouter } from 'next/navigation';
import { PiSignOutBold } from 'react-icons/pi';

export default function SignOutButton() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <button
      title="signOut"
      className="h-12 aspect-square rounded-full bg-[#D56942] flex justify-center items-center"
      onClick={handleSignOut}
    >
      <PiSignOutBold color="#2e2c2f" size={32} />
    </button>
  );
}

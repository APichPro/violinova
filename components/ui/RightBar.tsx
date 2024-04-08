import { createServerSupabaseClient } from '@/app/supabase-server';
import { MdNotifications } from 'react-icons/md';
import SignOutButton from '@/components/ui/rightBar/SignOutButton';
import SignInButton from '@/components/ui/rightBar/SignInButton';
import ToolsBoard from '@/components/ui/rightBar/ToolsBoard';
import Footer from '@/components/ui/rightBar/Footer';
import { FaRegUser } from 'react-icons/fa';
import Link from 'next/link';

export default async function RightBar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <div className="w-full md:h-full md:w-fit md:relative flex">
      <div className="flex flex-col justify-between w-full h-min md:h-full md:w-min">
        <div className="p-2 flex flex-wrap justify-end gap-4 bg-[#2e2c2f] rounded-full shadow-[0px_4px_4px_#00000040]">
          {user ? (
            <>
              <Link
                href="/account"
                className="h-12 aspect-square rounded-full bg-[#D56942] flex justify-center items-center"
              >
                <FaRegUser color="#2e2c2f" size={32} />
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
          <MdNotifications size={48} color={'#D56942'} />
        </div>
        <ToolsBoard />
        <Footer />
      </div>
    </div>
  );
}

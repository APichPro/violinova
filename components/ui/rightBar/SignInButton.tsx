import Link from 'next/link';
import { PiSignInBold } from 'react-icons/pi';

export default function SignInButton() {
  return (
    <Link
      href="/signin"
      className="h-12 aspect-square rounded-full bg-[#D56942] flex justify-center items-center"
    >
      <PiSignInBold color="#2e2c2f" size={32} />
    </Link>
  );
}

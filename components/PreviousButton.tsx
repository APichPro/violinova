'use client';
import { useRouter } from 'next/navigation';

export default function PreviouButton() {
  const router = useRouter();

  return (
    <button
      title="button"
      className="w-[48px] h-[48px] rounded-full [background:linear-gradient(180deg,rgb(228,121,78)_0%,rgb(209,101,63)_100%)]"
      onClick={() => router.back()}
    ></button>
  );
}

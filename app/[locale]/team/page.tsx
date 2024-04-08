import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function TeamPage({ params: { locale } }: { params: any }) {
  const t = useTranslations('Team');
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2	flex flex-col items-center overflow-y-scroll scroll h-screen w-2/3">
      <Image
        src="/icons/logo_resize.png"
        alt="Large Image"
        height={300}
        width={300}
        className="object-cover"
      />

      <div className="flex flex-col gap-16 w-2/3">
        <div className="flex items-center gap-8 w-full">
          <div className="h-[200px] aspect-square rounded-[50px] border-[3px] border-solid border-[#eae1d6]" />
          <p className=" font-medium text-[#eae1d6] text-[20px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
            ex vel gravida ornare. Nam vel ex maximus, interdum ligula eget,
            tempor velit. Proin a imperdiet lectus. Ut id massa quis magna
            gravida iaculis eu sit amet quam. Integer non erat sodales enim
            pulvinar scelerisque. Nunc consequat tempor lorem non auctor.
          </p>
        </div>

        <div className="flex items-center gap-8 w-full">
          <p className="font-medium text-[#eae1d6] text-[20px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
            ex vel gravida ornare. Nam vel ex maximus, interdum ligula eget,
            tempor velit. Proin a imperdiet lectus. Ut id massa quis magna
            gravida iaculis eu sit amet quam. Integer non erat sodales enim
            pulvinar scelerisque. Nunc consequat tempor lorem non auctor.
          </p>
          <div className="w-[200px] h-[200px] rounded-[50px] border-[3px] border-solid border-[#eae1d6]" />
        </div>

        <div className="flex items-center gap-8 w-full">
          <div className="aspect-square h-[200px] rounded-[50px] border-[3px] border-solid border-[#eae1d6]" />
          <p className="font-medium text-[#eae1d6] text-[20px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
            ex vel gravida ornare. Nam vel ex maximus, interdum ligula eget,
            tempor velit. Proin a imperdiet lectus. Ut id massa quis magna
            gravida iaculis eu sit amet quam. Integer non erat sodales enim
            pulvinar scelerisque. Nunc consequat tempor lorem non auctor.
          </p>
        </div>

        <div className="flex items-center gap-8 w-full">
          <p className=" font-medium text-[#eae1d6] text-[20px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
            ex vel gravida ornare. Nam vel ex maximus, interdum ligula eget,
            tempor velit. Proin a imperdiet lectus. Ut id massa quis magna
            gravida iaculis eu sit amet quam. Integer non erat sodales enim
            pulvinar scelerisque. Nunc consequat tempor lorem non auctor.
          </p>
          <div className="w-[200px] h-[200px] rounded-[50px] border-[3px] border-solid border-[#eae1d6]" />
        </div>
      </div>
    </div>
  );
}

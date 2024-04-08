'use client';

import { useEffect, useState } from 'react';

export default function RessourceInfo({
  ressource,
  selected
}: {
  ressource: any;
  selected: any;
}) {
  const [selectedSection, setSelectedSection] = useState<String>();
  useEffect(() => {
    setSelectedSection(selected);
  }, [selected]);
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex justify-evenly text-[#eae1d6] text-[20px] text-center">
        <button
          className="w-full p-2 rounded-[25px_25px_0px_0px] border-2 border-solid border-[#df744a]"
          onClick={() => setSelectedSection(ressource.title)}
        >
          Détails
        </button>
        <button
          className="w-full p-2 rounded-[25px_25px_0px_0px] border-2 border-solid border-[#df744a]"
          onClick={() => setSelectedSection(selected)}
        >
          Info
        </button>
        <button
          className="w-full p-2 rounded-[25px_25px_0px_0px] border-2 border-solid border-[#df744a]"
          onClick={() =>
            setSelectedSection(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis ex vel gravida ornare. Nam vel ex maximus, interdum ligula eget, tempor velit. Proin a imperdiet lectus. Ut id massa quis magna gravida iaculis eu sit amet quam. Integer non erat sodales enim pulvinar scelerisque. Nunc consequat tempor lorem non auctor. '
            )
          }
        >
          Commentaires
        </button>
      </div>
      <div className="h-full scroll overflow-y-scroll text-[#eae1d6] text-[54px]">
        {selectedSection}
      </div>
    </div>
  );
}

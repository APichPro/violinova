'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';

export default function RessourcesList({
  ressources,
  subscription
}: {
  ressources: any;
  subscription: any;
}) {
  const [nameFilter, setNameFilter] = useState('');
  const [expandList, setExpandList] = useState(true);

  const handleNameFilterChange = (e: any) => {
    setNameFilter(e.target.value);
  };

  function romanNumeralGenerator(num: number) {
    let roman = '';

    roman += 'M'.repeat(num / 1000);
    num %= 1000;
    roman += 'CM'.repeat(num / 900);
    num %= 900;
    roman += 'D'.repeat(num / 500);
    num %= 500;
    roman += 'CD'.repeat(num / 400);
    num %= 400;
    roman += 'C'.repeat(num / 100);
    num %= 100;
    roman += 'XC'.repeat(num / 90);
    num %= 90;
    roman += 'L'.repeat(num / 50);
    num %= 50;
    roman += 'XL'.repeat(num / 40);
    num %= 40;
    roman += 'X'.repeat(num / 10);
    num %= 10;
    roman += 'IX'.repeat(num / 9);
    num %= 9;
    roman += 'V'.repeat(num / 5);
    num %= 5;
    roman += 'IV'.repeat(num / 4);
    num %= 4;
    roman += 'I'.repeat(num);

    return roman;
  }

  return (
    <div
      className={`${
        expandList ? 'flex-col justify-start items-start' : ''
      } flex gap-2 justify-center items-center md:flex-col md:justify-start md:items-start`}
    >
      <div className="flex gap-2">
        <button
          title="expandButton"
          onClick={() => setExpandList(!expandList)}
          className="h-12 aspect-square rounded-full bg-[#D56942] flex justify-center items-center"
        >
          <IoIosArrowDown
            size={32}
            className={`${
              expandList ? 'rotate-180 md:rotate-90' : 'md:-rotate-90'
            } transition duration-300 ease-in-out`}
            color={'#2f2e32'}
          />
        </button>
        <div
          className={`${
            expandList ? 'flex' : 'hidden'
          } rounded-full border-2 border-solid border-[#df744a] text-[#df744a]`}
        >
          <CiSearch size={48} color={'#D56942'} />
          <input
            className="bg-transparent"
            title="bpm"
            value={nameFilter}
            onChange={handleNameFilterChange}
          />
        </div>
      </div>
      <div
        className={`flex ${
          expandList ? 'flex-col' : ''
        } md:flex-col gap-2 py-4 overflow-x-scroll md:overflow-y-scroll md:overflow-x-hidden`}
      >
        {ressources
          .filter(
            (ressource: any) =>
              ressource.title
                .toUpperCase()
                .includes(nameFilter.toUpperCase()) ||
              ressource.difficulty
                .toUpperCase()
                .includes(nameFilter.toUpperCase())
          )
          .map((ressource: any) => (
            <Link
              href={`/ressources/${ressource.id}`}
              key={ressource.id}
              className={`${
                ressource.product != subscription &&
                ressource.product != undefined
                  ? 'bg-red-500'
                  : ''
              } flex items-center gap-4 border-[#df744a] rounded-full border-2 border-solid text-[#eae1d6] text-12`}
            >
              <h1 className="flex items-center justify-center w-12 aspect-square">
                {romanNumeralGenerator(ressource.id)}
              </h1>
              <h1
                className={`${
                  expandList ? 'flex' : 'hidden'
                } w-24 capitalize truncate text-left`}
              >
                {ressource.title}
              </h1>
              <h1
                className={`${
                  expandList ? 'flex' : 'hidden'
                } w-12 capitalize truncate text-left`}
              >
                {ressource.difficulty}
              </h1>
            </Link>
          ))}
      </div>
    </div>
  );
}

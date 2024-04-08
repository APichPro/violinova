'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';

export default function CoursesList({
  courses,
  subscription
}: {
  courses: any;
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
    <div className="">
      <div className="flex gap-4">
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
      </div>
      <div
        className={`flex ${
          expandList ? 'flex-col' : ''
        } md:flex-col gap-4 py-4`}
      >
        {courses
          .filter(
            (course: any) =>
              course.title.toUpperCase().includes(nameFilter.toUpperCase()) ||
              course.difficulty.toUpperCase().includes(nameFilter.toUpperCase())
          )
          .map((course: any) => (
            <Link
              href={`/courses/${course.id}`}
              key={course.id}
              className={`${
                course.product != subscription && course.product != undefined
                  ? 'bg-red-500'
                  : ''
              } flex items-center gap-4 border-[#df744a] rounded-full border-2 border-solid text-[#eae1d6] text-12`}
            >
              <h1 className="flex items-center justify-center w-12 aspect-square">
                {romanNumeralGenerator(course.id)}
              </h1>
              <h1
                className={`${
                  expandList ? 'flex' : 'hidden'
                } w-24 capitalize truncate text-left`}
              >
                {course.title}
              </h1>
              <h1
                className={`${
                  expandList ? 'flex' : 'hidden'
                } w-12 capitalize truncate text-left`}
              >
                {course.difficulty}
              </h1>
            </Link>
          ))}
      </div>
    </div>
  );
}

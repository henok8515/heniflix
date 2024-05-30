"use client";
import React from "react";
import RecommendIcon from "@mui/icons-material/Recommend";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/h.png";

const catagories = [
  {
    id: 1,
    name: "Recommended",
    icon: <RecommendIcon />,
  },
  {
    id: 2,
    name: "Popular",
  },
  {
    id: 3,
    name: "Featured",
  },
  {
    id: 4,
    name: "Favorites",
  },
  {
    id: 5,
    name: "Watch later",
  },
];

function Header() {
  const [product, setProduct] = React.useState(true);
  return (
    <header className="bg-white border-2 border-green-50 border-b-gray-300 m-0 p-0">
      <nav
        className="mx-auto bottom h-full flex max-w-7xl  items-center justify-between  lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 m-0 p-0">
          <Image height={70} alt="" width={70} src={Logo} />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              onClick={() => setProduct(!product)}
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              aria-expanded="false"
            >
              Catagories
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            {product ? null : (
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[200px] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {catagories.map((data) => (
                    <div
                      key={data.id}
                      className="group relative  flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div
                        onClick={() => setProduct(!product)}
                        className="flex-auto"
                      >
                        <a
                          href="#"
                          className="block font-semibold text-gray-900"
                        >
                          {data.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/pages/programs/tvshow"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Series
          </Link>
          <Link
            href="/pages/programs/Movies"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Movies
          </Link>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Sports
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm hover:text-blue-600  font-semibold leading-6 text-gray-900"
          >
            Log in
          </a>
          <a
            href="#"
            className="text-sm  hover:text-blue-600 ml-4 font-semibold leading-6 text-gray-900"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

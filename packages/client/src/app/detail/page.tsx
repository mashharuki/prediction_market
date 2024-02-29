"use client";

import { CardProps } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { SliderComp } from "@/components/Slider";
import Link from "next/link";
import { useState } from "react";
import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Detail() {
  const markets: CardProps = {
    imageUrl: "https://source.unsplash.com/random/800x600",
    description: "This is a description of market 1",
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <header className="bg-white m-10">
        <div className="flex items-center justify-center h-16">
          {/* 左側の領域（現在は空） */}
          <div className="flex-1"></div>

          {/* 中央の領域: Linkコンポーネント */}
          <div className="flex-1 justify-center flex"></div>

          {/* 右側の領域: Searchコンポーネント */}
          <div className="flex-1 justify-end flex">
            <Link href="/" aria-label="トップページへ">
              <IoMdClose />
            </Link>
          </div>
        </div>
      </header>
      <div className="m-10">
        <h1 className="text-3xl font-bold">{markets.description}</h1>
        <div className="flex-shrink-0">
          <img
            className="h-100 w-100 mt-10 object-contain"
            src={markets.imageUrl}
            alt="card image"
          />
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <button
            className={`w-full flex items-center gap-4 py-3 px-10 border border-transparent rounded-md shadow-sm text-3xl font-medium ${
              selectedOption === "yes"
                ? "bg-green-600 hover:bg-green-500"
                : "bg-green-200 hover:bg-green-100"
            }`}
            onClick={() => handleSelectOption("yes")}
          >
            {selectedOption === "yes" ? <FaRegCheckSquare /> : <FaRegSquare />}
            <p>{"Yes"}</p>
          </button>
          <button
            className={`w-full flex items-center gap-4 py-3 px-10 border border-transparent rounded-md shadow-sm text-3xl font-medium ${
              selectedOption === "no"
                ? "bg-green-600 hover:bg-green-500"
                : "bg-green-200 hover:bg-green-100"
            }`}
            onClick={() => handleSelectOption("no")}
          >
            {selectedOption === "no" ? <FaRegCheckSquare /> : <FaRegSquare />}
            <p>{"No"}</p>
          </button>
        </div>
        {/* <div className="mt-20">
            <p className="mb-2">Voting Amount</p>
        <SliderComp />
        </div> */}
        <div className="mt-10">
          <button className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium bg-green-400 hover:bg-green-300">
            {"Vote"}
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
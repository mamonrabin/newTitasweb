"use client";
import { itemList } from "@/src/api/categoryBaseApi";
import { exo } from "@/src/app/font";
import Image from "next/image";
import React, { useState } from "react";

const TechnicalArsenal = () => {
    const [activeTab, setActiveTab] = useState("front");

    // Filter items based on tab
    const filteredItems = itemList.filter(item => item.categoty === activeTab);

    return (
        <div className="mt-30">
            <h2 className={`${exo.className} text-4xl font-bold text-center`}>
                Technical Arsenal That Delivers Results
            </h2>

            {/* TAB BUTTONS */}
            <div
                className={`mt-16 ${exo.className} flex items-center justify-center gap-12`}
            >
                <button
                    onClick={() => setActiveTab("front")}
                    className={`px-12 py-6 uppercase text-lg font-bold rounded cursor-pointer
                        ${activeTab === "front" ? "bg-[#2B748A] text-white" : "border border-gray-200"}
                    `}
                >
                    Frontend Excellence
                </button>

                <button
                    onClick={() => setActiveTab("back")}
                    className={`px-12 py-6 uppercase text-lg font-bold rounded cursor-pointer
                        ${activeTab === "back" ? "bg-[#2B748A] text-white" : "border border-gray-200"}
                    `}
                >
                    Backend Power
                </button>

                <button
                    onClick={() => setActiveTab("morden")}
                    className={`px-12 py-6 uppercase text-lg font-bold rounded cursor-pointer
                        ${activeTab === "morden" ? "bg-[#2B748A] text-white" : "border border-gray-200"}
                    `}
                >
                    Modern Capabilities
                </button>
            </div>

            {/* ITEMS ACCORDING TO SELECTED TAB */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredItems.map(item => (
                    <div key={item.id} className="border group cursor-pointer border-gray-200 p-6 rounded-lg flex items-center justify-center flex-col text-center">
                        <Image className=" group-hover:rotate-360 group-hover:scale-115 duration-300" src={item.image} alt="titasweb" width={70} height={70}/>
                        <h2 className={`${exo.className} text-lg font-bold mt-4`}>{item.title}</h2>
                        <p className="text-gray-500 mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalArsenal;

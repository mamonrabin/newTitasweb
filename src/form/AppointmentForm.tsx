"use client";
import React, { useState } from "react";
import { exo } from "../app/font";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(30); // ⬅️ selected day
  const [selectedTime, setSelectedTime] = useState<string | null>(null); // ⬅️ selected time

  // Enabled days (same as your UI)
  const enabledDates = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const timeSlots = [
    "12:00 AM",
    "12:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];

  return (
    <div className="lg:px-10">
      <h2 className={`${exo.className} lg:text-4xl text-3xl font-bold`}>
        Make An Appointment
      </h2>

      <p className="mt-2 text-red-600 font-medium">
        Please for make an appointment contact us by our email or what&apos;s
        app
      </p>

      <form className="mt-8 flex flex-col gap-4">
        {/* --- USER INPUTS --- */}
        <div className="flex lg:flex-row flex-col items-center gap-4 w-full">
          <input
            className="px-4 py-3 rounded border border-gray-300 w-full"
            placeholder="Your Name"
          />
          <input
            className="px-4 py-3 rounded border border-gray-300 w-full"
            placeholder="Email Address"
          />
        </div>

        <select className="w-full px-4 py-3 border border-gray-300 rounded">
          <option>Select Service</option>
          <option>Full Stack Development</option>
          <option>Ecommerce Website</option>
          <option>Custom Website</option>
          <option>Graphics Solution</option>
        </select>

        <h2 className="font-bold text-sm mt-6">Select Date & Time</h2>

        {/* --- MAIN WRAPPER --- */}
        <div className="w-full mt-3 rounded-lg border border-gray-300 flex flex-col lg:flex-row overflow-hidden">
          {/* --- LEFT SIDE CALENDAR --- */}
          <div className="lg:w-5/12 border-r border-gray-300 flex flex-col min-h-[500px]">
            {/* Month Header */}
            <div className="p-3 bg-gray-100 border-b border-gray-300 flex items-center justify-between">
              <h6 className="font-semibold text-gray-800">November 2025</h6>

              <div className="flex gap-2">
                <button className="w-12 h-7 flex items-center justify-center rounded bg-[#2B748A] text-white">
                  <MdKeyboardArrowLeft />
                </button>
                <button className="w-12 h-7 flex items-center justify-center rounded bg-[#2B748A] text-white">
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>

            {/* Days */}
            <div className="p-3">
              {/* Weekdays */}
              <div className="grid grid-cols-7 mb-3 text-center text-xs text-gray-500">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {/* First disabled days */}
                {["26", "27", "28", "29", "30", "31", "1"].map((d) => (
                  <button
                    key={d}
                    disabled
                    className="h-9 text-sm text-gray-400 opacity-50"
                  >
                    {d}
                  </button>
                ))}

                {/* Disabled 2–17 */}
                {Array.from({ length: 17 }, (_, i) => i + 2).map((d) => (
                  <button
                    key={d}
                    disabled
                    className="h-9 text-sm text-gray-400 opacity-50"
                  >
                    {d}
                  </button>
                ))}

                {/* Enabled (Clickable) */}
                {enabledDates.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`h-9 text-sm rounded transition ${
                      selectedDate === day
                        ? "bg-[#15414e] text-white" // selected day
                        : "bg-[#2B748A] text-white hover:bg-[#1d4d5c]"
                    }`}
                  >
                    {day}
                  </button>
                ))}

                {/* Last disabled days */}
                {["1", "2", "3", "4", "5", "6"].map((d) => (
                  <button
                    key={d}
                    disabled
                    className="h-9 text-sm text-gray-400 opacity-50"
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 border-t text-center text-xs text-gray-500">
              🌐 Asia/Dhaka
            </div>
          </div>

          {/* --- RIGHT SIDE TIME SLOTS --- */}
          <div className="lg:w-7/12 p-5 flex flex-col min-h-[500px]">
            <div className="mb-4">
              <h5 className="font-semibold text-gray-800">
                {`Saturday, November ${selectedDate}`}
              </h5>
              <p className="text-gray-500 text-sm">28 time slots available</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 overflow-y-auto">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 text-sm rounded cursor-pointer transition ${
                    selectedTime === time
                      ? "bg-[#15414e] text-white"
                      : "bg-[#2B748A] text-white hover:bg-[#1d4d5c]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            disabled
            className={`${exo.className} bg-[#2B748A] text-white px-4 py-3 rounded cursor-not-allowed opacity-50`}
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceData = [
  {
    title: "ডায়াবেটিস (সুগার)",
    description: "ডায়াবেটিস, বাংলায় যা .......",
    image: "/service1.jpg",
  },
  {
    title: "হাই প্রেসার (উচ্চ রক্তচাপ)",
    description: "হাই প্রেসার বা উচ্চ রক্তচাপ.......",
    image: "/service2.jpg",
  },
  {
    title: "অতিরিক্ত ওজন (স্থূলতা)",
    description: "অতিরিক্ত ওজন বা স্থূলতা হ.......",
    image: "/service3.jpg",
  },
  {
    title: "কিডনিতে পাথর (কিডনি স্টোন)",
    description: "কিডনিতে পাথর বা কিডনি স্টোন.......",
    image: "/service4.jpg",
  },
  {
    title: "ফ্যাটি লিভার",
    description: "ফ্যাটি লিভার, বা লিভারে চি.......",
    image: "/service5.jpg",
  },
  {
    title: "হার্ট ব্লকেজ",
    description: "হার্ট ব্লকেজ (Heart block.......",
    image: "/service6.jpg",
  },
  {
    title: "ট্রাইগ্লিসারাইড (চিনি)",
    description: "ট্রাইগ্লিসারাইড (টিআইজি) হল.......",
    image: "/service7.jpg",
  },
  {
    title: "লিভারে চর্বি জমা (ফ্যাটি লিভার)",
    description: "লিভারে চর্বি জমা বা ফ্যাটি.......",
    image: "/service8.jpg",
  },
  {
    title: "কোলেস্টেরল (রক্তে চর্বি)",
    description: "কোলেস্টেরল হলো একটি চর্বি.......",
    image: "/service9.jpg",
  },
  {
    title: "হাইপারইন্সুলিনেমিয়া",
    description: "হাইপারইন্সুলিনেমিয়া হলো এক....",
    image: "/service10.jpg",
  },
  {
    title: "ফ্যাটি প্যানক্রিয়াস",
    description: "ফ্যাটি প্যানক্রিয়াস (Fat.......",
    image: "/service11.jpg",
  },
];

export default function Service() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">সেবা সমূহ</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 shadow hover:shadow-lg transition"
          >
            <div className="w-20 h-20 mx-auto mb-4">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-center font-bold text-lg mb-2 text-gray-800">
              {item.title}
            </h2>
            <p className="text-center text-sm text-gray-600 mb-3">
              {item.description}
            </p>
            <div className="text-center">
              <button
                onClick={() => setSelectedService(item)}
                className="text-blue-700 font-semibold hover:underline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0  bg-white-50  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md relative shadow-lg">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✕
            </button>
            <div className="mb-4 text-center">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                width={100}
                height={100}
                className="mx-auto rounded-full object-cover"
              />
              <h2 className="text-xl font-bold mt-3 text-gray-800">
                {selectedService.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {selectedService.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

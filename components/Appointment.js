import { Bookmark } from "lucide-react";


export default function Appointment() {
  return (
    <section className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto shadow-lg rounded-2xl mt-20 ">
      <div className="lg:flex items-center justify-between px-4 sm:px-6 md:p-8 py-6 ">
        <div className="font-bangla">
          <h3 className="text-3xl md:text-4xl font-medium pb-2">
            চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
          </h3>
          <p className="text-lg">
            • ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ
            স্টাইল।
          </p>
        </div>

        <div className="min-w-48 mt-5 lg:mt-0 flex items-center gap-x-2 bg-blue-400 hover:bg-red-500 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 text-black font-bold">
          <Bookmark /> Book Appointment
        </div>
      </div>
    </section>
  );
};


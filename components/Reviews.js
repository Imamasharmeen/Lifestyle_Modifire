import React from "react";
import Image from 'next/image';
export default function Reviews() {
  return (
    <div className="m:w-11/12 md:w-10/12 lg:w-8/12 mx-auto p-4">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-6">সুখী হওয়ার গল্প</h1>

      <p>
        আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু
        করার আগে আমার ওজন ছিল ৭৮ কেজি।। চিকিৎসা শুরুর ১ মাস ২৩ দিন পরে আমার ওজন
        হয় ৬৬ কেজি। আমি এখন আগের থেকে আনেক ভালো ফিল করছি।
      </p>
      <div>
        <Image
          src="/guriyaKhatun.png"
          alt="Reviews"
          className="rounded-full mx-auto mt-4"
          width={50} height={50}
        />
        <p></p>
          
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex justify-center items-center bg-[#d6faff]">
      <Image
        src="/banner.jpg" // Place your banner image in the public folder as 'banner.png'
        alt="Banner"
        width={2048}
        height={512}
        className="w-full h-auto max-w-full "
        priority
      />
    </div>
  );
}
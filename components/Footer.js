import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: Logo & Intro */}
        <div className="flex flex-col gap-3">
          <Image
            src="/logo.png" // Update your logo path here
            alt="Logo"
            width={80}
            height={80}
          />
          <p className="text-sm font-bangla leading-6">
            পিস লাইব্রেরী মূলত এটি একটি সংগঠ, যেখানে উপদেশকে খাদ্য হিসেবে নয়, বরং
            খাদ্যকেই উপদেশ হিসেবে গ্রহণ করুন।<br />
            এই প্রোগ্রাম নিয়ে আমাদের স্বাস্থ্যকর লাইফ স্টাইল পৌঁছে দেয়ার চেষ্টা করছি।
          </p>
        </div>

        {/* Column 2: ঠিকানা */}
        <div>
          <h3 className="font-bold font-bangla mb-2">ঠিকানা</h3>
          <p className="text-sm leading-6">
            PeaceLibrary DIABETES CENTRE<br />
            Vill - Sekhpur (Chandpur Bridge) Jharkhand Border<br />
            Po - Bhasaipaikar<br />
            Ps - Samserganj<br />
            Dist - Murshidabad<br />
            Pin - 742202<br />
            State - West Bengal
          </p>
        </div>

        {/* Column 3: সময়সূচি */}
        <div>
          <h3 className="font-bold font-bangla mb-2">খোলা থাকে</h3>
          <p className="text-sm font-bangla leading-6">
            সোম - বৃহস্পতি <br />
            (6 AM - 6 PM)
            <br />
            শনি - রবি <br />
            (6 AM - 6 PM)
            <br />
            <span className="text-red-600 font-semibold">শুক্রবার বন্ধ থাকে</span>
          </p>
          <div className="mt-3">
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
            />
          </div>
        </div>

        {/* Column 4: যোগাযোগ */}
        <div>
          <h3 className="font-bold font-bangla mb-2">যোগাযোগ</h3>
          <div className="text-sm space-y-2">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              <span>+91 9732 624 907</span>
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-green-600" />
              <span>+91 9732 624 907</span>
            </p>
            <div className="flex flex-col mt-3 gap-1">
              <Link href="/faq" className="text-blue-600 hover:underline">
                FAQ
              </Link>
              <Link href="/career" className="text-blue-600 hover:underline">
                Career
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm flex justify-between items-center px-4 max-w-7xl mx-auto">
        <p>© 2025 MD ABDUL KAIYUM - Peacelibrary. All Rights Reserved.</p>
        <div className="text-xl">
          <FaFacebookF className="text-blue-600 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

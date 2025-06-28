import LifestyleFB from "./LifestyleFB";
import LifestyleContent from "./LifestyleContent";

export default function Lifestyle() {
  return (
    <section className=" border border-red-500">
      <div className="sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto  border border-red-500">
        <h2 className="text-4xl font-bangla  font-bold flex items-center justify-center">
          স্বাস্থ্যকর লাইফস্টাইল
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="currentColor"
            className="w-10 h-10 text-blue-600"
          >
            <path d="M435-279h90v-156h156v-90H525v-156h-90v156H279v90h156v156ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z"></path>
          </svg>
        </h2>

        <div className="lg:flex justify-between lg:gap-20 p-5 border border-gray-300 shadow-lg">
         <div>
             <LifestyleFB />
         </div>
          <div>
            <LifestyleContent />
          </div>
        </div>
      </div>
    </section>
  );
}

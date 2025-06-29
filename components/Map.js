

;
export default function Map(){
  return (
    <div className="sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto  h-[400px] mt-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.392397600706!2d87.86139151492462!3d24.61039528419242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0f3fe99873345%3A0x84f9e4f748ad26cc!2sPeaceLibrary!5e0!3m2!1sen!2sin!4v1683123456789"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
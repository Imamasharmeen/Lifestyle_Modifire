import SectionContainer from "./SectionContainer";


const VideoS = ({ videoId, title }) => {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

const videos = [
  {
    id: "vMc7euF67lg",
    title:
      "আমার সুস্থ হওয়ার গল্প | আমি যেভাবে ওজন কমিয়ে সুস্থ হলাম | অতিরিক্ত ওজন কমানোর উপায়",
  },
  {
    id: "pj_bVgANAxg",
    title:
      "কিডনি ফেলিয়ার রোগী ডায়ালিসিস থেকে বাঁচতে ভিডিওটি দেখুন। স্টপ ডায়ালাইসিস",
  },
  {
    id: "VW97dpklud4",
    title:
      "এক মাসের চিকিৎসায় সম্পূর্ণ ডায়াবেটিস মুক্ত হয়ে বিদায় নিলাম | diabetes reverse | MD ABDUL KAIYUM",
  },
  {
    id: "J6lpzQyEeSA",
    title:
      "heart attack symptoms | হার্ট অ্যাটাক হলে কি করবে | হার্ট অ্যাটাক এর লক্ষন || PeaceLibrary",
  },
  {
    id: "EF7MDeZbS84",
    title:
      "আমাদের চিকিৎসাকে জাদুর সঙ্গে তুলনা | জাদু না চিকিৎসা | PeaceLibrary",
  },
  {
    id: "hOcppdlW6DM",
    title:
      "Diabetes reverse | ডায়াবেটিস থেকে মুক্তির গল্প ও উপহার নিয়ে উপস্থিত | ফিরে আসার গল্প| PeaceLibrary",
  },
];

export default  function Video(){
  return (
   <SectionContainer className="sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid lg:grid-cols-2 gap-5 p-5">
      {videos.map((video) => (
        <VideoS key={video.id} videoId={video.id} title={video.title} />
      ))}
    </SectionContainer>
  );
};

;
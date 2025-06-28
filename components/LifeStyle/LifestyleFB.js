import Link from "next/link";
import { useEffect } from "react";

export default function LifestyleFB(){
   useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement("script");
      script.src = process.env.NEXT_PUBLIC_FB_SCRIPT_SRC;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        if (window.FB) window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className=" fb-page border border-gray-200 overflow-x-hidden"
      data-href={process.env.NEXT_PUBLIC_FB_PAGE_LINK}
      data-tabs="timeline"
      data-width=""
      data-height="100%"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite={process.env.NEXT_PUBLIC_FB_PAGE_LINK}
        className="fb-xfbml-parse-ignore "
      >
        <a href={process.env.NEXT_PUBLIC_FB_PAGE_LINK}>Abdul KAIYUM</a>
      </blockquote>
    </div>
  );

};


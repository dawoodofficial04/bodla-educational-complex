import React, { useEffect } from "react";
import { SiOpenmediavault } from "react-icons/si";

export default function SocialMedia() {
  useEffect(() => {
    // Instagram embed script
    const script = document.createElement("script");
    script.src = "//platform.instagram.com/en_US/embeds.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h4 className="flex items-center mt-20 gap-4 text-2xl text-[#8A5DA1] md:text-3xl font-semibold mb-4 w-full max-w-6xl mx-auto">
        {/* Left Line */}
        <div className="grow border-3 rounded-xl border-t border-[#7E3F9E]"></div>

        {/* Text */}
        <span className="flex items-center gap-2 text-2xl md:text-4xl whitespace-nowrap">
          <SiOpenmediavault />
          Our Social Media
        </span>

        {/* Right Line */}
        <div className="grow border-3 rounded-xl border-t border-[#7E3F9E]"></div>
      </h4>
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* Facebook: Bodla Educational Complex */}
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBodlaEducationalComplex%2F&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="331"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        {/* Facebook: Punjab College Mian Channu */}
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPunjabCollegeMianChannuOfficial%2F&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="331"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        {/* Facebook: Nexskill Mian Channu */}
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNexskillMianChannu%2F&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="331"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        {/* Instagram: Bodla Educational Complex */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/afzalassociates/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "340px",
            width: "100%",
            padding: 0,
          }}
        ></blockquote>

        {/* Facebook: Regional Institute of Allied Health Sciences */}
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FReginoLInstituteofAlliedHealthSciences&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="331"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        {/* Instagram: Nexskill Mian Channu */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/nexskill_mianchannu/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "340px",
            width: "100%",
            padding: 0,
          }}
        ></blockquote>
      </div>
    </div>
  );
}

import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import PeerSanaullahBodla from "../../assets/PeerSanaullahBodla.jpg";
import TariqMahmoodAnsari from "../../assets/TariqMahmoodAnsari.jpg";

const MessageAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      {/* CEO MESSAGE ACCORDION */}
      <button
        onClick={() => toggleAccordion(1)}
        className="bg-[#7e3f9e] text-white w-full flex gap-5 items-center px-6 py-4 text-2xl font-semibold border rounded-xl shadow cursor-pointer"
      >
        <span>{activeAccordion === 1 ? "-" : "+"}</span>
        <FaUserGraduate />
        CEO Message
      </button>

      {activeAccordion === 1 && (
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 border border-t-0 rounded-b-xl shadow">
          <img
            src={PeerSanaullahBodla}
            className="w-40 h-40 rounded-xl object-cover shadow"
          />

          <div>
            <h3 className="text-xl cursor-default md:text-start text-center font-semibold mb-2">
              Peer Sanaullah Bodla
            </h3>

            <p className="text-lg cursor-default leading-relaxed text-gray-700">
              PEER SANAULLAH BODLA MEMORIAL TRUST ESTABLISHED IN 2001, in memory
              of Peer Muhammad Sanaullahah Bodla, who was a famous social
              activist and beloved political leader of the region. He played a
              key role in educational, social, and economic development of
              District Khanewal. BODLA Educational Complex aims at achieving
              Peer Muhammad Sanaullahah Bodla's dream of serving denizens
              through providing quality education in the field of general and
              health sciences. BEC is not merely an educational institute, but
              also provides health facilities to rural population by
              establishing free health camps. It also helps students in their
              career building and achieving life goals. The trust is meant to
              help needy students to complete their education not only at
              secondary level but also for their post-graduation at different
              medical institutions.
            </p>
          </div>
        </div>
      )}

      {/* DIRECTOR MESSAGE ACCORDION */}
      <button
        onClick={() => toggleAccordion(2)}
        className="bg-[#7e3f9e] text-white w-full flex gap-5 items-center px-6 py-4 lg:text-2xl font-semibold border rounded-xl shadow mt-4 cursor-pointer"
      >
        <span>{activeAccordion === 2 ? "-" : "+"}</span>
        <FaGraduationCap /> Academic Director Message
      </button>

      {activeAccordion === 2 && (
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 border border-t-0 rounded-b-xl shadow">
          <img
            src={TariqMahmoodAnsari}
            className="w-40 h-40 rounded-xl object-cover shadow"
          />

          <div>
            <h3 className="text-xl cursor-default md:text-start text-center font-semibold mb-2">
              Prof. Dr. Tariq Mahmood Ansari, (PhD, FCSP, FRSC)
            </h3>

            <p className="text-lg cursor-default leading-relaxed text-gray-700">
              Welcome To Bodla Education Complex, a highly recognised
              educational institute setting exemplary standards. Our quality is
              proven not only be our students who attain outstanding result
              during their intermediate studies but also by our esteemed group
              of graduates who have achieved great success beyond their years at
              PGC and have made us immensely proud. This is made possible
              through the efforts of our highly trained teachers whose aim to
              mature the potential of each student by providing individual
              assistancy to equip them with skills that remain with them
              throughout their lives. An extensive range of academic, athletics
              and social activities are also, allowing for a more well-rounded
              learning experience. Our students also benefit from a
              technologically inclusive critical and environment that has been
              tailor made for PGC. Our e-learning solutions are proving to bean
              extremely benefical resource for our students allowing them to
              keep up with the pace of this ever-charging word. I assure you
              that your educational experience in our institutions, will be a
              rewading one both, academically and culturally.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageAccordion;

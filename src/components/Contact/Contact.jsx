import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">
        Bodla Educational Complex
      </h1>

      <h2 className="text-xl sm:text-2xl font-semibold text-center mt-6 mb-6">
        Contact Information
      </h2>

      <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold mt-4 mb-2">
        <FaMapMarkerAlt /> Address and Map
      </h3>

      <div className="w-full mt-4 overflow-hidden rounded-md">
        <iframe
          title="Bodla Educational Complex"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.9874153080395!2d72.32987247537241!3d30.436458674728573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3923356260957207%3A0xb9cba1364b9314ed!2sPunjab%20College%20MianChannu!5e0!3m2!1sen!2sus!4v1764846317935!5m2!1sen!2sus"
          width="100%"
          height="300"
          className="border-0 w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="w-full h-px bg-gray-300 my-8"></div>

      <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold mb-4">
        <FaPhoneAlt /> Contact Information
      </h3>

      <div className="relative overflow-x-auto bg-neutral-primary shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-center rtl:text-right text-body">
          <thead className="text-sm text-body border-b border-default">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 sm:px-6 bg-neutral-secondary-soft font-medium"
              >
                Details
              </th>
              <th scope="col" className="px-3 py-3 sm:px-6 font-medium">
                Information
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-default">
              <th
                scope="row"
                className="px-3 py-4 sm:px-6 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
              >
                📞 RIAHS
              </th>
              <td className="px-3 py-4 sm:px-6">
                <a className="hover:underline" href="https://wa.link/pupyr1">
                  +92 301 9613810
                </a>
              </td>
            </tr>

            <tr className="border-b border-default">
              <th
                scope="row"
                className="px-3 py-4 sm:px-6 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
              >
                📞 PGC
              </th>
              <td className="px-3 py-4 sm:px-6">
                <a className="hover:underline" href="https://wa.link/dif090">
                  +92 329 4715701
                </a>
              </td>
            </tr>

            <tr className="border-b border-default">
              <th
                scope="row"
                className="px-3 py-4 sm:px-6 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
              >
                ⏰ College Timings (Mon–Saturday)
              </th>
              <td className="cursor-default px-3 py-4 sm:px-6">
                08:00 AM – 02:00 PM
              </td>
            </tr>

            <tr>
              <th
                scope="row"
                className="px-3 py-4 sm:px-6 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
              >
                📧 Emails
              </th>
              <td className="px-3 py-4 sm:px-6">
                <a
                  className="hover:underline break-all"
                  href="mailto:becomplex11@gmail.com"
                >
                  becomplex11@gmail.com
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full h-px bg-gray-300 my-8"></div>

      <h3 className="text-lg sm:text-xl font-semibold text-center mb-6">
        🌐 Follow Us On:
      </h3>

      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="https://www.facebook.com/BodlaEducationalComplex/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="text-gray-600 hover:text-gray-800" />
        </a>
        <a
          href="https://www.instagram.com/afzalassociates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-gray-600 hover:text-gray-800" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
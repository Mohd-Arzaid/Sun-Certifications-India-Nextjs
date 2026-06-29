import Link from "next/link";

const services = [
  {
    href: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    title: "BIS Mark (ISI License) for Foreign Manufacture",
    image: "/services-images/BIS.jpg",
    alt: "BIS Logo",
  },
  {
    href: "/cdsco-registration-certification",
    title: "CDSCO Registration Certification",
    image: "/services-images/CDSCO.jpg",
    alt: "CDSCO Logo",
  },
  {
    href: "/what-is-crs-bis-or-crs-registration",
    title: "BIS (CRS) Registration",
    image: "/services-images/BISCRS.jpg",
    alt: "BISCRS Logo",
  },
  {
    href: "/epr-certificate-for-plastic-waste-management-pwm",
    title: "Plastic Waste Management",
    image: "/services-images/PlasticWasteManagement.jpg",
    alt: "Plastic Waste Management Logo",
  },
  {
    href: "/a-guide-on-how-to-obtain-epr-certificate",
    title: "EPR Certificate certifications",
    image: "/services-images/EPRCertificate.jpg",
    alt: "EPR Certificate Logo",
  },
  {
    href: "/a-guide-on-how-to-obtain-lmpc-certificate",
    title: "LMPC Certificate certifications",
    image: "/services-images/LMPC.jpg",
    alt: "LMPC Logo",
  },
  {
    href: "/what-is-bis-certificate-indian-bis",
    title: "BIS Registration Certificate",
    image: "/services-images/BIS.jpg",
    alt: "BIS Logo",
  },
  {
    href: "/a-guide-to-bis-certification-indian-bis",
    title: "ISI MARK (BIS) for Indian Manufactures",
    image: "/services-images/ISIMark.jpg",
    alt: "ISI Mark Logo",
  },
];

const ServiceCard = ({ href, title, image, alt }) => (
  <Link
    href={href}
    className="relative col-span-1 h-[150px] md:h-[245px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] flex items-center justify-center md:block hover:scale-105 transition-all duration-300 border border-[#B5DDEB]"
  >
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center justify-center rounded-full bg-white border border-[#B5DDEB] w-[76px] h-[76px] md:w-[125px] md:h-[125px] overflow-hidden">
        <img
          src={image}
          alt={alt}
          title={alt}
          className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] object-contain"
        />
      </div>
    </div>
    <p className="font-geist text-sm md:text-lg w-full mt-9 md:mt-[7.5rem] px-3 md:px-2 text-center font-medium text-neutral-800">
      {title}
    </p>
  </Link>
);

const OurServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-10 overflow-x-hidden">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Our Services
        </div>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          India&apos;s Best Certificate Consultant
        </p>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

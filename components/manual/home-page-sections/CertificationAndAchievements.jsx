const CertificationAndAchievements = () => {
  const galleryImages = [
    {
      id: 1,
      image:
        "/home-page-certificate-img/Sun-Certifications-India-ISO-20000-page-0001.jpg",
      altText:
        "ISO Certificate of Sun Certifications India for information technology - service management - ISO 20000",
    },
    {
      id: 2,
      image:
        "/home-page-certificate-img/Sun-Certifications-India-ISO-10002-page-0001.jpg",
      altText:
        "ISO Certificate of Sun Certifications India for Customer Satisfaction for complaints handling in organization - ISO 10002:2018",
    },
    {
      id: 3,
      image:
        "/home-page-certificate-img/Sun-Certifications-India-ISO-9001-page-0001.jpg",
      altText:
        "ISO Certificate of Sun Certifications India for the quality managment system ISO 9001",
    },
    {
      id: 4,
      image:
        "/home-page-certificate-img/Sun-Certifications-India-ISO-27001-page-0001.jpg",
      altText:
        "ISO Certificate of Sun Certifications India for the information security management system - ISO 27001:2022",
    },
  ];

  return (
    <div className="bg-white pt-8 py-4">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Certification And Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)]"
              style={{
                boxShadow:
                  "0 8px 40px -8px rgba(26,135,129,0.10), 0 1.5px 8px 0 rgba(10,67,148,0.08)",
              }}
            >
              <div className="relative w-full h-[140px] md:h-[160px] overflow-hidden bg-gray-200 [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:object-center [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-110">
                <img
                  src={item.image}
                  alt={item.altText}
                  title={item.altText}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationAndAchievements;

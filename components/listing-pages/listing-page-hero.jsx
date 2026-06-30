const ListingPageHero = ({ heading, description }) => {
  return (
    <div className="text-center mb-6 md:mb-10">
      <h1 className="font-playfair text-2xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
        {heading}
      </h1>
      <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default ListingPageHero;

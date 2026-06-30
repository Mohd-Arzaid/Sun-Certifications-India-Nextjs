const ListingPageGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      {children}
    </div>
  );
};

export default ListingPageGrid;
